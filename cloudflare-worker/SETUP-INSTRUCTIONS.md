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

## Setup (split between you and your coworker)

### Steps YOU do (Cloudflare account setup, Worker, routes)

#### Step 1: Add `linked.earth` to Cloudflare

1. Create a free Cloudflare account at https://dash.cloudflare.com (or log in)
2. Click **Add a site** → enter `linked.earth`
3. Select the **Free** plan
4. Cloudflare will scan existing DNS records. Verify that the 4 A records above are present
5. Toggle all 4 A records to **Proxied** mode (orange cloud icon)
6. Cloudflare will show two nameservers it assigns (e.g., `anna.ns.cloudflare.com`, `bob.ns.cloudflare.com`) — **note these down** for your coworker

#### Step 2: SSL/TLS Settings

In the Cloudflare dashboard → **SSL/TLS**:

- Set encryption mode to **Full** (not "Full (strict)")
- This is needed because GitHub Pages has its own SSL certificate, but it won't match Cloudflare's validation for "strict" mode

#### Step 3: Create and Deploy the Worker

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

#### Step 4: Add the Worker Route

1. In the Cloudflare dashboard → **Workers & Pages** → `linked-earth-ontology`
2. Go to **Settings** → **Triggers** (or **Routes**)
3. Click **Add Route**
4. Enter:
   - **Route**: `linked.earth/ontology*`
   - **Zone**: `linked.earth`
5. Save

> At this point everything is configured. The site will continue to work on GitHub Pages as before until the nameservers are switched. Nothing breaks.

---

### Step your COWORKER does (DNS nameserver change)

The only thing your coworker needs to do:

1. Log in to the **domain registrar** where `linked.earth` is registered
2. Find the **nameserver settings** for `linked.earth`
3. Replace the current nameservers with the two Cloudflare nameservers (from Step 1 above), e.g.:
   - `anna.ns.cloudflare.com`
   - `bob.ns.cloudflare.com`
   - (The exact names will be shown in your Cloudflare dashboard)
4. Save and wait for propagation (usually minutes, can take up to 24 hours)

That's it — no IP changes, no other DNS records to modify. The A records are already configured in Cloudflare from Step 1.

---

## Verification

Once nameservers have propagated, test with these commands:

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
