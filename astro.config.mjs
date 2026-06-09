import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// The Keystatic admin (/keystatic) now ships in production so you can log in from
// any browser (GitHub mode). PUBLIC PAGES STAY PRERENDERED/STATIC — only the admin
// and its auth API are server routes (Vercel serverless), so visitor speed is
// unchanged. Locally (no GitHub env vars) Keystatic falls back to local file storage.
export default defineConfig({
  integrations: [react(), keystatic()],
  adapter: vercel(),
});
