# Monuments — site handoff

Creative-direction / photography portfolio for **DJ Ramirez** (monuments.cc), being
rebuilt from WordPress/Elementor into a hand-coded **Astro** site. This doc is the
self-contained starting point for anyone (a person or a fresh AI chat) picking the
project up.

## Run it
```bash
cd monuments-site
npm install          # if node_modules is missing
npm run dev          # dev server → http://localhost:4321
npm run build        # static build → dist/  (currently builds clean: 9 pages)
npm run preview      # serve the built site
```
Routes: `/` `/work` `/work/turnstile` `/work/blue-cross` `/photography` `/about`
`/services` `/contact` `/giving`.

(If using the Claude Preview MCP: `launch.json` defines name **`monuments`**, port **4321** —
`preview_start({name:"monuments"})`, then screenshot/eval. Preview screenshots sometimes
catch black mid-load/HMR frames and YouTube renders unreliably headless — verify via
`preview_eval` reading the DOM/computed styles, not just screenshots.)

## Stack & conventions
- **Astro 5**, vanilla JS (no GSAP), **Lenis** smooth scroll (`window.lenis`).
- `src/styles/global.css` = **all** styles (one file), design tokens in `:root`
  (`--black #0d0f14`, `--white #f0eee9` cream, `--accent #6b8cae`).
- **Inter only** (weights 300–600). No second font without asking.
- **CMS:** Keystatic at `/keystatic` (GitHub-mode browser login, LIVE). React + `@keystatic/astro`
  + `@astrojs/vercel` are **dev-gated** in `astro.config.mjs` (dropped when argv has `build`) so the
  production build stays **pure-static**. Schema = `keystatic.config.ts`; content under `content/`.
  Editing saves to the repo but the live pages don't read the CMS yet (next task). Full setup
  (GitHub App, Vercel env vars, the `security.allowedDomains` OAuth fix) is in TODO.md.
- Boxed content = 100px L/R gutters (24px mobile); headers/footers full-bleed.
- `prefers-reduced-motion` respected throughout. Scroll FX are tasteful/restrained.

## Layout
- `src/layouts/Base.astro` — shell: head, Loader/Nav/Menu/Footer, global inline script
  (loader once-per-session, `toggleMenu`, `.fade` reveals, footer typewriter, draggable
  menu patches, global `.vplay` video-hover cursor), + Lenis init.
- `src/components/` — `Loader`, `Nav`, `Menu` (fullscreen + draggable "patches"), `Footer`.
- `src/pages/` — `index` (home), `work`, `photography`, `work/{turnstile,blue-cross}`,
  `about/services/contact/giving` (still stubs).
- `public/` — `logos/` (8 clients), `galaxy/` (work-header image field), `gallery/`
  (photography), `case-studies/`.

## Assets
Master imagery lives in DJ's Dropbox: `~/Library/CloudStorage/Dropbox/Monuments/website/`
(readable locally). The site CANNOT serve from Dropbox — copy/resize chosen images into
`public/` (`sips -Z <px> -s format jpeg`).

## Current state (2026-05-31)
- **Home** — hero (3D-tilt headline over bg video); trusted-by logos (1px grid, hover
  **inverts** box to black + white-knockout logo; the "M" monogram spins 360° on the **Y axis**);
  **showreel** (see below); featured-work cards; testimonials rotator; CTA.
- **Showreel** — parallax sticky zoom: a small 16:9 grows to a **large centered 16:9**
  (`~82vw`, black side gutters — NOT full-width) with **SHOWREEL** caption below, on pure
  black. Controls bottom-right: **play/pause + sound + fullscreen**; **play auto-unmutes**;
  loops via the YouTube API. Video = YT embed (DJ will swap in a self-hosted MP4 later —
  that resolves the YouTube branding-on-pause; don't chase it).
- **Footer (all pages)** — black; © + socials sit inside `<footer>` so the giant wordmark
  is the true page bottom. Wordmark **types** `Monuments → Built → To be → Remembered`
  (last word holds with a blinking caret), replays on scroll-in.
- **Menu** — fullscreen; draggable "patches" pop in staggered; nav "M" folds away when open.
- **Work** — galaxy header (floating photo field) + masonry grid; permanent 2/4-col toggle;
  list/grid toggle; **TEMP `.ov-switcher`** (bottom pill) cycling 10 hover styles.
- **Photography** — horizontal gallery lanes + a seamless drag/momentum filmstrip lightbox.
- **Case studies** — `/work/turnstile` (structured template) + `/work/blue-cross`
  (image-led); the other ~10 still 404.

## Open tasks
1. **Work-card hovers — build ~15 NEW options.** DJ dislikes all 10 current `.ov-*`
   variants (global.css). Add fresh ones to the `.ov-switcher` (JS in `work.astro`).
2. **Work header readability** — headline "A portfolio built to move people." floats over
   moving photos and is hard to read; add a scrim/contrast layer + a **subheadline**.
3. **Roll approved copy in** — home hero "We build things worth remembering" + subhead +
   CTA, plus About/Services/Contact/Photography. Voice + lines: see the project memory
   (`monuments-copy.md`) — plain-spoken, story-first, anti-jargon.
4. Build remaining case studies; flesh out About/Services/Contact stubs; deploy
   (Netlify/Vercel) when ready. (`against.png` renders inverted on purpose — that is
   the real AGAINST mark, confirmed by DJ; not a bug, leave it.)

## Notes
- DJ gives precise designer feedback, iterates fast, is cost-conscious (estimate effort
  before big tasks), and can't watch video — describe/screenshot instead.
- The fullscreen menu has playful easter eggs: 6 draggable patches that wiggle, and trail
  particles — the AI patch spews binary, Good Vibes rains smileys when shaken, the Emmy
  drops a giant trophy on shake, and "Good at camera stuff" plops film gear (🎬📷🎥) on
  drag. Trail logic lives in `Base.astro` (`spawnTrail` / `spawnFallingProp`). Keep the
  spirit — DJ loves leaving these for people to find.
