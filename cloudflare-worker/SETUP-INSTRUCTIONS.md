# Cloudflare Setup Instructions for linked.earth Content Negotiation

## Background

We need to add HTTP content negotiation so that tools like `curl` can request ontology files in different formats:

```bash
curl -sH "Accept: text/turtle" -L http://linked.earth/ontology#
# → returns the Turtle (.ttl) serialization

curl -sH "Accept: application/rdf+xml" -L http://linked.earth/ontology/archive
# → returns the RDF/XML serialization
```

GitHub Pages (which currently serves `linked.earth`) cannot do this because it's static hosting. We need a Cloudflare Worker in front of it to inspect the `Accept` header and serve the right file.

Everything else on the site continues to work exactly as before — the worker only intercepts requests to the ontology namespace paths.

---

## Current Setup

- **Domain**: `linked.earth`
- **DNS**: 4 A records pointing to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- **Hosting**: GitHub Pages (repo: `linkedearthOntology`, branch: `gh-pages`, folder: `docs/`)
- **HTTPS**: Enabled via GitHub Pages

---

## What Needs to Change

### Step 1: Add `linked.earth` to Cloudflare (if not already there)

If the domain is not yet managed by Cloudflare:

1. Create a free Cloudflare account at https://dash.cloudflare.com
2. Click "Add a site" → enter `linked.earth`
3. Select the **Free** plan
4. Cloudflare will scan existing DNS records. Verify that the 4 A records above are present
5. Cloudflare will provide two nameservers (e.g., `anna.ns.cloudflare.com`, `bob.ns.cloudflare.com`)
6. Go to your domain registrar and update the nameservers to the ones Cloudflare provides
7. Wait for propagation (usually minutes, can take up to 24 hours)

### Step 2: Enable Proxy Mode (orange cloud)

In the Cloudflare dashboard → DNS → Records:

- Find the 4 A records for `linked.earth`
- Click the grey cloud icon next to each one to toggle it to **Proxied** (orange cloud ☁️)
- This makes traffic flow through Cloudflare, which is required for the Worker to intercept requests
- The A records stay pointing to the same GitHub Pages IPs — no IP changes needed

> **Important**: Leave any other subdomains (e.g., `www`, `wiki`) as-is unless they also need Workers.

### Step 3: SSL/TLS Settings

In the Cloudflare dashboard → SSL/TLS:

- Set encryption mode to **Full** (not "Full (strict)")
- This is needed because GitHub Pages has its own SSL certificate, but it won't match Cloudflare's validation for "strict" mode

### Step 4: Create and Deploy the Worker

Option A — **Via Cloudflare Dashboard** (no CLI needed):

1. Go to **Workers & Pages** in the Cloudflare dashboard
2. Click **Create** → **Create Worker**
3. Name it `linked-earth-ontology`
4. Replace the default code with the contents of `worker.js` (in this folder)
5. Click **Deploy**

Option B — **Via Wrangler CLI**:

```bash
npm install -g wrangler
wrangler login
cd cloudflare-worker/
wrangler deploy
```

### Step 5: Add the Worker Route

1. In the Cloudflare dashboard → **Workers & Pages** → `linked-earth-ontology`
2. Go to **Settings** → **Triggers** (or **Routes**)
3. Click **Add Route**
4. Enter:
   - **Route**: `linked.earth/ontology*`
   - **Zone**: `linked.earth`
5. Save

This tells Cloudflare: "run this Worker on any request to `linked.earth/ontology...`"

---

## Verification

Once deployed, test with these commands:

```bash
# Should return Turtle content
curl -sH "Accept: text/turtle" -L https://linked.earth/ontology | head -20

# Should return RDF/XML content
curl -sH "Accept: application/rdf+xml" -L https://linked.earth/ontology/archive | head -20

# Should return JSON-LD content
curl -sH "Accept: application/ld+json" -L https://linked.earth/ontology/core | head -20

# Should 303 redirect to HTML docs (browser behavior)
curl -sI https://linked.earth/ontology

# Existing versioned URLs should still work as before
curl -sI https://linked.earth/ontology/core/2.1.1/ontology.ttl
```

---

## What Stays the Same

- GitHub Pages continues to serve all files
- All existing URLs keep working (`/ontology/core/2.1.1/...`, `/ontology/archive/2.1.0/...`, etc.)
- The site's HTML pages, CSS, JS — everything is unchanged
- The Worker only activates for exact ontology namespace paths like `/ontology`, `/ontology/archive`, etc.

## Risk

- **Low risk**: If the Worker has a problem, you can remove the route in Cloudflare and traffic goes back to GitHub Pages directly
- **Rollback**: Toggle the DNS records back to "DNS only" (grey cloud) to bypass Cloudflare entirely
