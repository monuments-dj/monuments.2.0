# TODO — next session

**Quick start:** `cd monuments-site && npm run dev` → http://localhost:4321 · `npm run build` (builds clean, 9 pages). Read `HANDOFF.md` for the full map. A Claude chat also auto-loads the project memory — especially **monuments-copy.md** (DJ's approved copy + voice).

**DJ's style:** precise designer feedback, fast iteration, loves tasteful scroll FX + playful easter eggs, can't watch video (screenshot/describe instead). Estimate effort before big tasks. Verify in-browser via the Claude Preview MCP (name `monuments`, port 4321) — read the DOM/computed styles when screenshots catch black/HMR frames.

## High priority
- [ ] **Work-card hovers — build ~15 NEW options.** DJ disliked all 10 existing `.ov-*` variants (slide/wipe/duotone/glitch/stamp/lift/flood/invert/frame/skew — global.css ~`/* Overlay variants */`). Add fresh treatments + buttons to the `.ov-switcher` toggle (its JS in `work.astro` swaps the `ov-*` class on `#wp-grid`; switcher is fixed bottom, raised to clear the Astro dev toolbar). Once DJ picks a winner → bake it in as the default + delete the switcher and unused variants.
- [ ] **Work-page header.** Add a subheadline under the "A portfolio built to move people." headline + a readability scrim/contrast layer so it reads over the moving galaxy photos (DJ flagged this as an accessibility issue). Pull copy from `monuments-copy.md`.
- [ ] **Roll the approved copy in** (all in `monuments-copy.md`). Home hero → **"We build things worth remembering"** + subhead + CTA buttons (See the Work / Let's Talk); then About / Services / Contact / Photography ("When the brief calls for it, I shoot too."). Pages currently still have old placeholder copy.

## Medium
- [ ] **Build out About / Services / Contact** — currently `.page-stub` placeholders. Real layouts + the approved copy.
- [ ] **Case-study pages** — ~10 still 404 (`/work/<slug>`). Two templates exist (Turnstile = structured `cs-*`, Blue Cross = image-led `bc-*`). Pick one, make it data-driven, add the rest.

## Loose ends
- [ ] `public/logos/against.png` is saved upside-down — confirm it's intentional brand styling or flip it.
- [ ] DJ will self-host the showreel as an MP4 (replaces the YouTube embed → removes the YT branding-on-pause). Swap it in when he provides the file.
- [ ] Deploy (Netlify/Vercel) when ready — currently local dev only.

## Done this session — don't redo
- Showreel: parallax scroll-zoom (small 16:9 → large **centered** 16:9 + "SHOWREEL" caption, pure-black section); controls = play/pause + sound + fullscreen, **play auto-unmutes**; loops via API.
- Footer (all pages): black; © + socials moved inside so the wordmark is the true page bottom; word-by-word typewriter **Monuments → Built → To be → Remembered** (last word holds, caret blinks), replays on scroll-in.
- Trusted-by: 1px grid lines, **hover-inverts** the box (black + white logo), the "M" monogram **spins 360° on the Y axis**.
- Photography: horizontal gallery lanes + seamless drag/momentum filmstrip lightbox.
- Menu: **6 draggable patches** with easter eggs — AI (robot icon) spews binary, Good Vibes (smiley) **shake = smiley downpour**, Emmy (gold rosette) **shake = giant trophy**, "Good at camera stuff" (lens) **drag = film gear 🎬📷🎥**; all wiggle occasionally; "M" logo folds away on menu open.
- Git: 5 commits through `f744f67`. Builds clean.
