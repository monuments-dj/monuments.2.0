import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import djsite from './integrations/djsite.mjs';

// TWO SITES, ONE REPO (docs/DJTHECD-PLAN.md §1). SITE=dj builds djthecd.com:
// pure static (no Keystatic admin, no serverless), its own canonical + sitemap,
// its own page tree, and the solo-voice transform + leak audit on the output.
// SITE unset = monuments.cc, byte-for-byte what it always was.
const DJ = process.env.SITE === 'dj';

// The Keystatic admin (/keystatic) now ships in production so you can log in from
// any browser (GitHub mode). PUBLIC PAGES STAY PRERENDERED/STATIC — only the admin
// and its auth API are server routes (Vercel serverless), so visitor speed is
// unchanged. Locally (no GitHub env vars) Keystatic falls back to local file storage.
export default defineConfig({
  site: DJ ? 'https://djthecd.com' : 'https://monuments-2-0.vercel.app',
  // Expose the dev server on the local network so DJ can open it on his phone
  // (same WiFi) at http://<mac-LAN-ip>:4321 with live hot-reload. Dev-only; the
  // production build is static and unaffected.
  server: { host: true },
  // Astro 5's host-injection guard rejects the request Host unless it's allow-listed,
  // which made the serverless request.url fall back to localhost — so Keystatic built
  // the GitHub OAuth redirect_uri as https://localhost/... and GitHub rejected it.
  // Allow-listing the production host fixes request.url.origin → the real redirect_uri.
  security: {
    allowedDomains: [{ hostname: 'monuments-2-0.vercel.app' }, { hostname: 'djthecd.com' }],
  },
  integrations: DJ
    ? [react(), sitemap({
        // NOTE: no `hire` here. On dj it is a real linked page (the menu's
        // one-page-brief pill) and belongs in the sitemap.
        filter: (page) => !/\/(lab|template|page-template|page-elements|cta-preview|work-preview|keystatic|capabilities|ai)(\/|$)/.test(page),
      }), djsite()]
    : [react(), keystatic(), sitemap({
        // keep internal surfaces out of the index (belt to robots.txt's braces)
        filter: (page) => !/\/(lab|template|page-template|page-elements|cta-preview|work-preview|keystatic)(\/|$)/.test(page),
      })],
  // /services renamed to /capabilities (DJ, 2026-07-07); keep old links alive
  redirects: DJ
    ? { '/work/sony-xperia-summer': '/work/sony-xperia' }
    : { '/services': '/capabilities', '/work/sony-xperia-summer': '/work/sony-xperia' },
  // dj is fully static (Keystatic is the only server route and it does not ship
  // there), so it builds to dist/ with no adapter: simpler, and Vercel's Astro
  // preset picks dist/ up on its own.
  ...(DJ ? {} : { adapter: vercel() }),
});
