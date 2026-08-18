// Cloudflare Worker for Linked Earth Ontology Content Negotiation
//
// Setup:
// 1. Add linked.earth to Cloudflare (proxy mode, not DNS-only)
// 2. Create a Worker with this script
// 3. Add a route: linked.earth/ontology* → this worker

// Maps ontology path segments to their latest version folder
const ONTOLOGY_VERSIONS = {
  'core': '2.1.1',
  'archive': '2.1.0',
  'chron_proxy': '2.1.0',
  'chron_units': '2.1.0',
  'chron_variables': '2.1.0',
  'instrument': '2.1.0',
  'interpretation': '2.1.0',
  'paleo_proxy': '2.1.0',
  'paleo_units': '2.1.0',
  'paleo_variables': '2.1.0',
};

// Maps Accept media types to ontology file names
const FORMAT_MAP = [
  { types: ['text/turtle'],                         file: 'ontology.ttl',    contentType: 'text/turtle; charset=utf-8' },
  { types: ['application/rdf+xml', 'application/xml'], file: 'ontology.rdf',    contentType: 'application/rdf+xml; charset=utf-8' },
  { types: ['application/ld+json'],                  file: 'ontology.jsonld', contentType: 'application/ld+json; charset=utf-8' },
  { types: ['application/n-triples'],                file: 'ontology.nt',     contentType: 'application/n-triples; charset=utf-8' },
  { types: ['text/html', 'application/xhtml+xml'],   file: 'index-en.html',   contentType: null }, // null = pass through to origin
];

const ORIGIN = 'https://linked.earth';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, ''); // strip trailing slashes

    // Determine which ontology is being requested
    const match = resolveOntology(path);
    if (!match) {
      // Not an ontology namespace request — pass through to GitHub Pages
      return fetch(request);
    }

    const accept = request.headers.get('Accept') || '';

    // Find the best matching format from the Accept header
    const format = negotiateFormat(accept);

    if (!format || !format.contentType) {
      // HTML or unknown — redirect to the documentation page
      const htmlUrl = `${ORIGIN}/ontology/${match.name}/${match.version}/index-en.html`;
      return Response.redirect(htmlUrl, 303);
    }

    // Fetch the ontology file from GitHub Pages and return with correct Content-Type
    const fileUrl = `${ORIGIN}/ontology/${match.name}/${match.version}/${format.file}`;
    const response = await fetch(fileUrl);

    if (!response.ok) {
      return new Response('Ontology file not found', { status: 404 });
    }

    return new Response(response.body, {
      status: 200,
      headers: {
        'Content-Type': format.contentType,
        'Access-Control-Allow-Origin': '*',
        'Vary': 'Accept',
        'Link': `<${ORIGIN}/ontology/${match.name}/${match.version}/index-en.html>; rel="alternate"; type="text/html", ` +
                `<${ORIGIN}/ontology/${match.name}/${match.version}/ontology.ttl>; rel="alternate"; type="text/turtle", ` +
                `<${ORIGIN}/ontology/${match.name}/${match.version}/ontology.rdf>; rel="alternate"; type="application/rdf+xml", ` +
                `<${ORIGIN}/ontology/${match.name}/${match.version}/ontology.jsonld>; rel="alternate"; type="application/ld+json"`,
      },
    });
  },
};

/**
 * Resolves a URL path to an ontology name and version.
 * Returns { name, version } or null if the path doesn't match an ontology namespace.
 */
function resolveOntology(path) {
  // /ontology → core ontology (namespace is http://linked.earth/ontology#)
  if (path === '/ontology') {
    return { name: 'core', version: ONTOLOGY_VERSIONS['core'] };
  }

  // /ontology/{name} → sub-ontology (namespace is http://linked.earth/ontology/{name}#)
  const subMatch = path.match(/^\/ontology\/([a-z_]+)$/);
  if (subMatch && ONTOLOGY_VERSIONS[subMatch[1]]) {
    return { name: subMatch[1], version: ONTOLOGY_VERSIONS[subMatch[1]] };
  }

  return null;
}

/**
 * Parses the Accept header and returns the best matching format entry,
 * respecting quality values (q parameters).
 */
function negotiateFormat(accept) {
  if (!accept) return null;

  // Parse Accept header into sorted list of { type, q }
  const parsed = accept
    .split(',')
    .map((part) => {
      const [typePart, ...params] = part.trim().split(';');
      const type = typePart.trim().toLowerCase();
      const qParam = params.find((p) => p.trim().startsWith('q='));
      const q = qParam ? parseFloat(qParam.trim().substring(2)) : 1.0;
      return { type, q };
    })
    .filter((entry) => entry.q > 0)
    .sort((a, b) => b.q - a.q);

  // Find the first Accept type that matches a format
  for (const { type } of parsed) {
    for (const format of FORMAT_MAP) {
      if (format.types.includes(type)) {
        return format;
      }
    }
    // Handle wildcard
    if (type === '*/*') {
      return null; // default to HTML
    }
  }

  return null;
}
