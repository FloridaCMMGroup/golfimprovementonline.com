// Cloudflare Worker entry. Static site: every request is served from the repo
// by the assets setting in wrangler.jsonc, except www, which goes to the bare domain.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
