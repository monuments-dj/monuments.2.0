import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// Keystatic (the CMS admin at /keystatic) loads in DEV ONLY. `astro build` has
// "build" in argv, so the integrations are dropped → production stays 100%
// pure-static (no React, no adapter, no server routes) → zero visitor-speed
// impact. To enable browser login from the deployed site later, switch
// keystatic.config.ts storage to { kind: 'github' }, add the Vercel adapter,
// and render the integrations unconditionally (public pages stay prerendered).
const editing = !process.argv.includes('build');

export default defineConfig({
  integrations: editing ? [react(), keystatic()] : [],
});
