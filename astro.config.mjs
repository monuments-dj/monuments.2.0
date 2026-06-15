import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// The Keystatic admin (/keystatic) now ships in production so you can log in from
// any browser (GitHub mode). PUBLIC PAGES STAY PRERENDERED/STATIC — only the admin
// and its auth API are server routes (Vercel serverless), so visitor speed is
// unchanged. Locally (no GitHub env vars) Keystatic falls back to local file storage.
export default defineConfig({
  site: 'https://monuments-2-0.vercel.app',
  // Expose the dev server on the local network so DJ can open it on his phone
  // (same WiFi) at http://<mac-LAN-ip>:4321 with live hot-reload. Dev-only; the
  // production build is static and unaffected.
  server: { host: true },
  // Astro 5's host-injection guard rejects the request Host unless it's allow-listed,
  // which made the serverless request.url fall back to localhost — so Keystatic built
  // the GitHub OAuth redirect_uri as https://localhost/... and GitHub rejected it.
  // Allow-listing the production host fixes request.url.origin → the real redirect_uri.
  security: {
    allowedDomains: [{ hostname: 'monuments-2-0.vercel.app' }],
  },
  integrations: [react(), keystatic()],
  adapter: vercel(),
});
