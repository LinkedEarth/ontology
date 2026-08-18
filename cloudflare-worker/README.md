# Linked Earth Ontology — Content Negotiation Worker

A Cloudflare Worker that provides HTTP content negotiation for the Linked Earth ontologies hosted on GitHub Pages.

## What it does

When a client requests an ontology namespace URI (e.g., `http://linked.earth/ontology#`), the worker inspects the `Accept` header and returns the appropriate serialization:

| Accept Header | Response |
|---|---|
| `text/turtle` | `ontology.ttl` |
| `application/rdf+xml` | `ontology.rdf` |
| `application/ld+json` | `ontology.jsonld` |
| `application/n-triples` | `ontology.nt` |
| `text/html` (or browser) | Redirects to `index-en.html` |

## Supported ontologies

| Namespace | Latest |
|---|---|
| `http://linked.earth/ontology#` | core/2.1.1 |
| `http://linked.earth/ontology/archive#` | archive/2.1.0 |
| `http://linked.earth/ontology/chron_proxy#` | chron_proxy/2.1.0 |
| `http://linked.earth/ontology/chron_units#` | chron_units/2.1.0 |
| `http://linked.earth/ontology/chron_variables#` | chron_variables/2.1.0 |
| `http://linked.earth/ontology/instrument#` | instrument/2.1.0 |
| `http://linked.earth/ontology/interpretation#` | interpretation/2.1.0 |
| `http://linked.earth/ontology/paleo_proxy#` | paleo_proxy/2.1.0 |
| `http://linked.earth/ontology/paleo_units#` | paleo_units/2.1.0 |
| `http://linked.earth/ontology/paleo_variables#` | paleo_variables/2.1.0 |

## Setup

### Prerequisites

- `linked.earth` domain added to Cloudflare (proxied, not DNS-only)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) installed: `npm install -g wrangler`

### Steps

1. **Switch DNS to proxied mode**: In the Cloudflare dashboard, change the DNS A records for `linked.earth` from "DNS only" to "Proxied" (orange cloud icon). The A records should keep pointing to GitHub Pages IPs (185.199.108-111.153).

2. **Authenticate wrangler**:
   ```bash
   wrangler login
   ```

3. **Deploy the worker**:
   ```bash
   cd cloudflare-worker
   wrangler deploy
   ```

4. **Add the route** in the Cloudflare dashboard:
   - Go to Workers & Pages → linked-earth-ontology → Settings → Routes
   - Add route: `linked.earth/ontology*` → `linked-earth-ontology`
   - Select the `linked.earth` zone

### Testing

```bash
# Should return Turtle
curl -sH "Accept: text/turtle" -L http://linked.earth/ontology

# Should return RDF/XML
curl -sH "Accept: application/rdf+xml" -L http://linked.earth/ontology/archive

# Should return JSON-LD
curl -sH "Accept: application/ld+json" -L http://linked.earth/ontology/core

# Should redirect to HTML docs (browser default)
curl -sI -L http://linked.earth/ontology

# Versioned URLs still work as before (pass through to GitHub Pages)
curl -s http://linked.earth/ontology/core/2.1.1/ontology.ttl
```

## Updating versions

When a new ontology version is released, update the `ONTOLOGY_VERSIONS` map in `worker.js` and redeploy:

```bash
wrangler deploy
```
