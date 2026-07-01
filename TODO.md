# TODO — current state (2026-07-01)

## ════ SESSION 2026-07-01 :: PORTFOLIO SCAFFOLD PASS (autonomous) ════
DJ said "move on all of them, scaffold the site first, rework design as pages are created,
message me with roadblocks." Built + PUSHED (commit 7d1bc8c → Vercel preview):
- ✅ `/lab/art-of-visuals` — FLAGSHIP, results-first, leads with "I grew the agency 4x."
  Real assets (Sony/Xperia/XM/Stansport/Creator Clubhouse). Cloned the adorama pattern.
- ✅ `/lab/donut-zumiez` + `/lab/ac-boise` — lighter Selected Work case pages (real assets;
  film/reel posters are NON-linking pending real video URLs).
- ✅ Lab hub: added the AOV flagship tile + a new **Selected Work** section (Donut, AC Boise,
  Sony This Moment, Sony Flow State).
- ✅ Home: hero copy → locked positioning ("Brand Experience & Experiential CD"; AI-floods-
  the-feed thesis; first-person) + a **3-number band** under the hero (4x / 160M+ / Emmy,
  each links to its case study). Verified legible on the dark body via snap.mjs.
- ✅ Contact: **hire-me kit** band ("Open to senior creative roles" + Email/LinkedIn/one-pager).
Build clean (~30 routes), all verified at 1440px with tools/snap.mjs.
- ✅ RECUT Adorama + Buck the Quo RESULTS-FIRST: moved each stat band directly under the hero so
  the NUMBER leads (Adorama 160M+/3.4M+/113K+/50K+; BTQ 18,000+/1-in-2/88%), shifted hero+role
  copy to first-person "I". Pushed.
- ⚠️ VOICE: know-vape.astro is still third-person ("DJ directed...") while every other case study
  is now first-person "I" — flip for consistency (quick; offered to DJ).
- ✅ THIN CREDITS STRIP: new reusable CaseCredits.astro added under the hero of all 6 case studies
  (role at a glance, accent-emphasized, auto light/dark). Bottom credits <dl> removed (promoted).
- ✅ LAUNCHED / PROMOTED INTO MAIN SITE (DJ: "promote into main site" + "launch now, fill in live",
  NO domain swap): Work page now pins the 6 case studies to the front (Case-study badge + headline
  result, /lab/* links) + new Experiential filter + featured-pinned shuffle; home Recent-Work slider
  leads with the 6 case studies. Live monuments.cc WordPress UNTOUCHED. Placeholders still flagged
  in-file and to fill live: AOV stat numbers, Donut/AC Boise video URLs, LinkedIn URL + one-pager PDF.
- ✅ WAFFLE ME UP header video: DJ's "WEB HEADER" YouTube loop (LI496YXDIRE) now runs as the muted
  autoplay hero background (poster holds until PLAYING, then fades in — no black load flash). Caught +
  fixed a PROD-ONLY black flash (blind reveal timer) by revealing only on the real PLAYING state;
  verified on the live Vercel deploy in a real browser. Reusable pattern for header loops elsewhere.
- ✅ DONUT × ZUMIEZ films wired: DJ gave 3 cuts — launch film (2eUYg_P5rfc) is the main linked
  player; Croy collab (HEx3bUYCwdk) + the cut (UwM3_jGjz6Q) as a 2-up row. All 200. In-file TODO
  to confirm which poster/caption maps to which cut.
- ⏳ CREDITS BAR (per DJ: agency + my role + other creators, black bar/white text, "lives on every
  work/case-study page"): built 3 A/B variants at /lab/credits (V1 inline · V2 columned · V3 end-
  credits, role highlighted). AWAITING DJ's pick, then wire the winner as a shared component onto
  every /work + /lab case study (real per-project credit data needed per page).
- ✅ CREDITS variants extracted to shared CreditsVariants.astro; embedded at the TOP of the /lab
  hub (first section under the hero) + reused on /lab/credits. Still AWAITING DJ's pick to wire the
  winner onto every work/case-study page.
- ✅ DONUT merch: pulled 4 real product shots from donut.media (work shirt/jort/tee/stickers),
  web-optimized, added a "The product I made films for" section linking to the product pages.
- 🏗️ "FEARLESS" page SCAFFOLDED at /lab/fearless (DJ: "build the page, I'll give content soon").
  Full case-study structure w/ PLACEHOLDER copy + dashed image slots + Draft badge + in-file TODO.
  NEED FROM DJ: what Fearless is + premise, role/collaborators, headline number(s), assets (hero +
  stills + any video), year/credits. Then swap placeholders, add images, promote to Work/home.

**⛔ ROADBLOCKS / needs DJ (all flagged as in-file `⚠️ TODO` comments):**
1. AOV: only "4x" is real — the other 3 stat values (5+, 100M+, 3yrs) + role title + year span
   + client roster are PLACEHOLDER. Give me the real numbers/titles.
2. Video URLs: Donut launch films (2 cuts) + AC Boise IG reel (id DR04D0ZDOjV) render as
   non-linking posters — need clean watch/embed URLs to make them play.
3. Contact hire-kit: real **LinkedIn URL** (placeholder points to linkedin.com), and a hosted
   **resume/one-pager PDF** (currently a mailto) → drop a PDF at /public and I'll wire it.
4. Know Vape: DONE except reach numbers. DJ directed all 6 Myth vs Fact spots (IdahoPTV 2023),
   linked episode grid uses DJ's video.wkno.org URLs (verified). Emmy = 2024 NW Regional
   (NATAS NW), Community Outreach/Small Market, CAMPAIGN-level — framed honestly ("part of an
   Emmy-winning campaign"; DJ not on the public Emmy credit list, so no personal-Emmy claim).
   ✅ DJ DECIDED (2026-07-01): keep the "part of the Emmy-winning campaign" framing (he can't
   confirm his spots were in the submission, and isn't on the credit list, but they're Know
   Vape-branded so "part of" is defensible). Do NOT escalate to a personal/craft Emmy claim.
   ⚠️ ONLY LEFT: reach/impression numbers for the Award section (optional).
5. ⚙️ `caffeinate` + the dev server (localhost:4321) are still running — kill when fully done.


## ════ SESSION 2026-06-30 :: CAREER PIVOT + case studies + portfolio strategy ════
**THE BIG SHIFT (memory `site-goal-agency-job` + `monuments-copy` are SOURCE OF TRUTH):** the site's
real job is now a **PORTFOLIO TO GET DJ HIRED** at an agency/brand. Audience = hiring managers, not
brand clients. POSITIONING LOCKED: lead as a **Brand Experience / Experiential Creative Director**
(campaigns + experiential), agency-native, targeting culturally-relevant brands. AI = a TOOL, NOT the
headline. Lead with the NUMBER, not the idea. Thesis: "As AI floods feeds with cheap content, brands
win in the real world. That's the work I lead." Voice = first-person "I" + "my friends" (the crew),
Tess = PM; DO NOT lead with "make brands cool" (fuzzy, rejected).

**Research (2 cited multi-agent workflows, in memory):** experiential + campaign CD is durable/
AI-resistant through 2030 (Forrester: ~7.5% agency jobs to AI by 2030; creative spared). Holdcos
contracting (~-15% projected 2026); money moved in-house + to experiential specialists. Ride the LA
mega-event window (World Cup 2026 / Super Bowl 2027 / LA28). Lean audio/sports/music/gaming/DTC, NOT
legacy film/TV (contracting). Founder "flight-risk" bias is REAL (Rutgers 2024, successful founders
penalized MORE) — beat it with REFERRALS + "joining to build" framing, not cold apps. Comp anchors:
exp CD ~$94-160K, LA CD ~$133-213K, VP/ECD ~$193-350K+; awards = ~$50K premium.

**Case studies built this session (all `/lab`, in the hub `v2` grid):**
- ✅ PUSHED earlier: `/lab/buck-the-quo` (experiential flagship: More in Store, 18k conversations,
  enrollment lift) + `/lab/adorama-music` (160M+ impressions, Shorty finalist, a "Behind the film"
  2nd video). Real assets, real roles.
- `/lab/know-vape` (Emmy-winning IdahoPTV anti-vaping film series DJ DIRECTED; dark + green; poster
  gallery + video). ⚠️ TODO (comment in file): which/how many videos, incl. Nic Sick? Emmy
  category+year, reach numbers, full role breakdown.
- ⚠️ AWARD FIX: BTQ was wrongly "3 Rocky Mountain Emmys" → corrected to **Rocky Advertising Awards**
  (per DJ's resume; the Emmy is Know Vape). Confirm exact award name + that the badge images fit.

**PORTFOLIO STRATEGY (agreed):** a few FLAGSHIP deep case studies told as RESULTS (problem→strategy→
build→execution→NUMBER) + a lighter **"Selected Work" grid** for range (don't reel-dump). Flagships:
Buck the Quo, Adorama, Know Vape, and **Art of Visuals — NOT BUILT YET, build it** (4x agency revenue
is DJ's single most marketable number). Selected Work: Donut x Zumiez (2023 launch films DJ directed),
AC Boise kit-reveal (IG reel DR04D0ZDOjV = "This kit is Boise", USL League One, Hummel + Against), the
Sony launches, etc.

**Assets on disk (all web-sized, in `public/case-studies/<slug>/gallery/`):** buck-the-quo (19),
adorama-music (38), know-vape (10). NEW — SOURCED + DOWNLOADED 2026-06-30 (a sourcing workflow found
these, verified downloadable): donut-zumiez (9: dz-01..04 car-meet, product-shirt, film-01, merch,
yt-launch, yt-ptcruiser), ac-boise (9: home-01/02, away-01/02, keeper-01, crest, logo.png, yt-away,
yt-keeper), art-of-visuals (9: xm5-01, xm4-01, xm3-bts, xperia-01/02, stansport-01, podcast-cover,
yt-thismoment, yt-flowstate). The `yt-*.jpg` are YouTube poster stills for the videos below.
**VIDEO LINKS to wire (posters already downloaded):**
- Donut x Zumiez (DJ = launch films): YouTube `4UidSBSTo8o` (launch party) + `W4gT_4BWf5c` (PT Cruiser).
- AC Boise: the reveal DJ DIRECTED is the IG reel `instagram.com/reel/DR04D0ZDOjV` ("This Kit Is Boise",
  HOME kit, IG-only, no stable poster → use home-01 as poster). Also YT `eOnejUtqpKY` (away) + `2QqHz5Gz3qA`
  (keeper) IF DJ directed those. Context: USL League One, Hummel + Against, Egyptian Theatre reveal 12/3/25.
- Art of Visuals: YT `KIi8cBOlU50` (This Moment/XM4) + `CS5UXhe17O4` (Flow State/XM3) + `l1RBdpQ8vi8`
  (Adorama, already used elsewhere) + `sdFbORd-6wE` / `wZCPlSlN9Oo` (Xperia) + Vimeo `809843534` (agency reel).
  ⚠️ Sourcing could NOT confirm Intel / MSI / Sonos / DW Drums assets, and can't confirm WHICH cuts DJ
  directed on Donut or AC Boise-away/keeper — verify all attribution with DJ before publishing.

**Also shipped earlier this session (PUSHED):** homepage mobile overflow fix (`.trusted` grid +
menu fit on phones); the homepage **RECENT WORK slider** (`RecentProjects.astro`, promoted from
`/lab/project-detail`: white, compact, minimal scrubber; mobile = autoplay scroll-snap carousel,
hardened by an adversarial-review workflow — 6 real bugs fixed); added **Lab** to the main menu;
`astro.config` `server: { host: true }` for phone testing; AGAINST logo is intentional (not upside-down).

**NEXT (in order):**
1. Finish **Know Vape** once DJ confirms the specifics (films / Nic Sick / Emmy category+year / reach).
2. Build the **Art of Visuals** flagship (source assets first) — the 4x-revenue business-impact story.
3. Build a **Selected Work** grid; add Donut x Zumiez + AC Boise + the Sony launches as entries.
4. **Recut the flagships results-first** (lead with the number) per the hiring-portfolio research;
   shift copy to first-person "I" per `monuments-copy`.
5. Add the **hire-me kit**: an "open to [roles]" line + prominent contact/LinkedIn + a resume/one-pager.
6. Rework the **HOME hero** to the locked positioning + a 3-number band above the fold.
7. ⚙️ `caffeinate` is running (keeps the Mac awake) — kill it when done. New chat can turn it off.

**Quick start:** `cd monuments-site && npm run dev` → http://localhost:4321 · `npm run build`
(builds clean, ~30 routes). Read `CLAUDE.md` first (shorthand + the VISUAL-TRUTH workflow),
then `REFERENCES.md` (locked design refs + measured motion laws), `DESIGN-SPEC.md`,
`IDEAS.md` (envelope log), and `COLOR-SYSTEM.md` (color-tool decision). Brand voice =
memory `monuments-copy.md` (SOURCE OF TRUTH).

## ════ SESSION 2026-06-13 (cont.) :: GSAP scroll motion + exoape pass + color tool ════
**Shipped this session (all on `/lab`, committed + deployed):**
- **Color system DONE:** 8 contrast-verified LabFx presets (monument, noir, electric, press,
  slate, forest, sand, mono), generated by `tools/gen-palettes.mjs` (Adobe Leonardo + culori,
  every value WCAG-checked). Do NOT hand-edit LabFx hex; edit PRESETS in that script and re-run.
  See `COLOR-SYSTEM.md`.
- **Pattern library is INLINE on the `/lab` hub** (`src/components/PatternLibrary.astro`, rendered
  in `lab/index.astro`, no separate page). Elements so far: next-page scroller (with live dials)
  and the reel reveal. Sections alternate light/dark.
- **Reel reveal = the exoape "Play Reel" scroll moment via GSAP ScrollTrigger:** pin the stage,
  scroll-scrub so a small film + "Play"/"Reel" slide in from the sides, then the film scales to
  take over the full viewport, click to play. It is a POSTER STILL right now (YouTube embeds got
  ad-blocked / black-boxed). NEXT: self-host DJ's reel as an MP4 for real click-to-play + crispness.
- **Contextual cursor** (LabFx): destination-aware labels (View work, Contact us, Our story,
  Swipe, Play, etc.); the menu button has no label.
- **Exoape light-forward pass on the `/lab` HUB** (white, clean, floating photos). The playbook for
  the REST of the lab pages is `EXOAPE-PASS.md` (light = --paper/--ink, dark = --bg/--fg as
  deliberate beats; soft tinted shadows; the shared `.lab-float`; the "+" kicker; 640px heads).
- **About (`/lab/about`): "How I work / Five things I refuse to fake" is now a PINNED HORIZONTAL
  SCROLL** (GSAP), the section pins and the card row translates sideways. Reduced-motion falls
  back to a vertical stack.

**GSAP is now the scroll-animation stack.** Added `gsap` 3.15. Pinned/scrubbed effects import
`src/scripts/gsap-lenis.js` (registers ScrollTrigger and BRIDGES it to the existing Lenis: waits
for `window.lenis`, then drives Lenis from `gsap.ticker`, ONE rAF loop). `Base.astro`'s standalone
Lenis loop self-stops via `window.__lenisGsapBridged`. GSAP loads only on pages whose components
import it. The bug that ate the reel saga: the bridge ran before Lenis existed in the PROD bundle
(dev ran Base first), so it worked locally but froze on deploy. Fixed by waiting for Lenis.

**⚠️ WORKFLOW LESSON (memory `verify-in-djs-real-browser`):** verify scroll/motion/embeds in DJ's
ACTUAL browser (Claude-in-Chrome, it connects) AND the LIVE deploy, NOT the local sandbox. Prod vs
dev script order, ad-blockers (YouTube to a black box), macOS Reduce Motion, and Vercel serving
mixed old/new builds for ~30 to 60s after a push all bite and are invisible locally. Poll the live
URL across requests until the new build is consistent before judging.

**⏳ OPEN / NEXT:**
1. **Reel:** wire a self-hosted MP4 into `.rr-panel` for real click-to-play + crisp takeover (DJ
   to send the reel file, or pull from the YouTube showreel `VMubUUZ2tdU`).
2. **About horizontal scroll — VERIFIED on the LIVE deploy (2026-06-13, DJ's real browser via
   Claude-in-Chrome + real-Chromium snap).** ScrollTrigger pin-spacer present (padding-bottom =
   computed amount, 730px @1920px); section stays pinned (sectionTop=0) the whole range; track
   translates frame-accurate 0 to -730 @1920 (every 25% step within 1px of expected); no console
   errors; renders clean (photos loaded). Snap: `tools/snaps/about-howiwork-mid/`. ⚠️ PERF NOT yet
   numbered — the rAF/FPS probe got throttled because the tab was backgrounded (rAF pauses when
   hidden). Behavior is frame-accurate (good sign); a true smoothness read needs the tab FOREGROUND
   (DJ scrolls it) or a real-Chromium FPS script. Watch perf on that heavy page (credo + parallax + pin).
3. **Roll the exoape light-forward pass onto the other lab pages** (hub done; follow `EXOAPE-PASS.md`).
4. **Pattern library — Element 03 NEXT-PROJECT HANDOFF SHIPPED + verified (2026-06-13, commit
   34c0219).** Exoape grow→handoff: current project hero grows, next project's card rises from
   beneath and takes over with its title (DJ's starred next-project ask, IDEAS.md). Scroll-scrubbed
   + a Scrub dial to freeze any frame; 3 takeover styles (rise/grow/curtain) + rise-distance and
   handoff-point dials; Counter/Label toggles. Light beat after the dark reel. Real-Chromium verified:
   render math exact across all 3 styles, scroll driver maps 100→0 clean, prod build clean. Caught +
   fixed a path bug (flashpoint hero is in `/gallery/`). Cards: Sony This Moment (tm-02) → Flashpoint.
   **Element 04 PHOTO GALLERIES SHIPPED + verified (2026-06-14).** Dark inline element on the hub:
   one curated 16-frame set (8 land / 8 port from `/gallery/thumb`) laid out three ways via the dial,
   Justified (flex rows sized by aspect) / Masonry (CSS multicol, natural heights) / Grid (uniform
   4:3) + Columns (2-6, also drives justified row height) + Gap + "Mono until hover" toggle. Click any
   frame to open the shared `Lightbox.astro` (full-size from `/gallery/full`). Real-Chromium verified:
   all 3 layouts render, dial drives every prop, lightbox opens correct full src, no console errors.
   **The inline pattern library is now COMPLETE (01 next-page · 02 reel · 03 next-project · 04 galleries).**
5. **Project-detail slider PAGE SHIPPED + verified (2026-06-14).** New dedicated page
   `/lab/project-detail` (linked from the hub "Also on the bench" row). Lusion `of_the_oak`-style
   project-detail slider: a section that PINS while a horizontal track of 6 framed "chapter" panels
   (Sony This Moment, tm-01→tm-09) scrubs sideways on scroll (GSAP ScrollTrigger via `gsap-lenis.js`).
   Each panel = a device-framed still + chapter title/description; HUD = counter + bottom progress
   hairline + prev/next arrows (arrows lenis.scrollTo the next slice). Consistent frame-left layout
   so a frame stays on screen at every handoff (alternating left a void at the midpoint — fixed).
   Reference capture: `tools/snaps/ref-lusion-of_the_oak/` (snap.mjs `--steps`, 21 frames). Dark/
   cinematic (--bg/--fg), reduced-motion + ≤820px fall back to a vertical stack. Real-Chromium
   verified: pin holds, track 0→-7200 frame-accurate, counter 01→06, no console errors, images load.
6. **`NextProject.astro` — the standard work-page project-nav component (2026-06-14, DJ loves it).**
   Reusable next-project hand-off: the clean scroller (caption + big next name + tag + filling rail,
   `is-full` lights the cue) PLUS a MEDIA CLUSTER (a video-preview frame + 2 peeking photos) that
   starts small and GROWS as you scroll (`--np-g` scale 0.34→1 near-linear, `--np-mo` opacity).
   Scroll-to-end carries to the next project via a SHORT gated overscroll (`threshold` prop, default
   100px, was 320 — much snappier) or click. Props: href/name/tag/accent/poster/video?/photos/threshold.
   `video` optional (mp4); without it the poster frame is the video slot (awaiting real reels). LIVE on
   `/lab/sony-this-moment` (→Turnstile, red, turnstile bts/products media) and `/lab/flashpoint`
   (→This Moment, teal, sony tm media). Inline tmx-np/fp-np removed. Real-Chromium verified on both:
   media grows 0.54→0.74→1, pull-to-next fires in ~120px, no console errors. ⚠️ STILL OPEN: the GLOBAL
   footer renders AFTER the component (gate stops pull-to-next firing at the footer). Decide whether to
   suppress the footer on case studies (component = true closer) or fold next-project into the footer.
   TODO: self-host project reel MP4s and pass `video=` to make the preview frames actually play.
7. **`/lab/flashpoint` TEST PAGE shipped + verified (2026-06-14, DJ's ask).** New light-forward lab
   case study for the Flashpoint rebrand (Adorama's photo-gear label), linked from the hub "Also on
   the bench" row. Brand-literal teal (#16a3ab) + orange (#f0612a) on --paper; assets float as cards.
   Beats: FLASHPOINT hero (floating mockups, drift), the brief (services + real lead copy), the
   IMAGINE/ILLUMINATE/CREATE concept triad (staggered light-in, brand colours), the system gallery
   (6-col editorial grid → shared Lightbox), the work spanned, credits, then the DARK next-project
   scroller into /lab/sony-this-moment (teal fill). Copy = the real /work/flashpoint text, de-em-dashed.
   Real-Chromium verified: all sections render, concept lights, scroller fills→100% + pull-to-next, no
   console errors. NOTE: built purpose-fit (not a sony clone) since Flashpoint is a rebrand, not a film.
8. **🚀 FIRST PROMOTION TO PRODUCTION HOME (2026-06-14, DJ's call).** Promoted the Play/Reel showreel
   reveal from the lab onto the REAL homepage `/` (`src/pages/index.astro`), as `ReelReveal.astro`.
   Replaced the old scroll-zoom YouTube showreel (its markup is gone; the old guarded JS self-disables;
   dead `.showreel/.reel-*` CSS in global.css + the dead showreel/reel-control JS in index.astro can be
   cleaned up later). Component is self-contained: hard-coded dark colours (home has no --bg/--fg
   tokens), GSAP ScrollTrigger pin/scrub bridged to Lenis via `src/scripts/gsap-lenis.js` (the bridge
   waits for window.lenis, so the prod script order is safe — the reel-saga fix holds). POSTER STILL
   for now (DJ chose "replace, poster for now"); pass `video=` / a self-hosted MP4 later for real play.
   Real-Chromium verified LOCAL: reveal pins (stageTop=0), panel scales 0.26→1, Play/Reel words slide
   in then fade, the EXISTING rwork reel still scrubs (track -53→-1096), no console errors. ⚠️ Domain
   monuments.cc still WordPress/untouched — this only changes the Vercel `/` build. NOT yet componentized
   with the lab's inline reel (PatternLibrary still has its own copy; dedupe later).
9. **Loader REDESIGNED (2026-06-14, DJ's ask).** Replaced the old MONUMENTS-word + raster-M + bar loader
   with: black field, a SPINNING METALLIC M (the "#2 conic metal sweep" — DJ A/B-picked it from 6 variants
   a metallic-m-loader workflow generated), flanked by CREATIVE / PRODUCTION / AI. `Loader.astro` (SVG +
   chrome/conic/spec gradients) + the loader CSS in `global.css` (`.ldr-*` + `#ldrConicRot`/`#ldrSpecMove`
   + keyframes). Progress + curtain dismiss UNCHANGED (Base.astro drives `#loader-bar`/`#loader-pct` then
   `.done`). Real-Chromium verified: shows, words animate, progress fills, curtain dismisses + reveals hero,
   no console errors; reduced-motion holds a still frame. Shows on `/` only (index.astro `loader={true}`).
   ⚠️ THE M IS A PLACEHOLDER geometric mark — DJ is vectorizing the real one; swap is one line: replace
   `<path id="ldrMPath" d="…">` in Loader.astro (same 0 0 120 100 viewBox), then update/delete `.edge`.
10. **BRAND BOOK INTEGRATED into the lab (2026-06-14, overnight).** DJ sent the brand book v0.8
   (`~/Downloads/monuments-brand-book.html`; see memory `monuments-brand-book`). Built `BrandWorld.astro`,
   a dark "Brand World" band on `/lab` (id `#brand`, after the session index): living M-eye-NUMENTS
   wordmark (eye blinks, spark spins), the ink/paper/denim/rose palette, the auto-cycling symbol family,
   a soft eye-sun, voice + Space Mono colophon. Added Archivo + Space Mono (Base font link) and
   `--denim`/`--rose`/`--brand-ink`/`--brand-paper` tokens. Picked from 4 generated concepts; the other 3
   (**sun-playground** — interactive generative soft-sun + symbol grid, very lab-native; **block-noise**;
   **wordmark-hero**) are PARKED at `public/brand-lab/*.html` (local only, not deployed — view at
   `localhost:4321/brand-lab/<name>.html`). DJ may want one added. Real-Chromium verified: generators fire,
   symbol cycle runs, no console errors, reads as a clean dark beat in the lab.
11. **CODE TIGHTENED (2026-06-14, overnight).** Removed the dead scroll-zoom showreel CSS (`.showreel`/
   `.reel-*` in global.css) + JS (the scroll-zoom IIFE + the `reelVideo` YouTube block in index.astro) left
   over when the home moved to ReelReveal; kept the hero YouTube control. Verified the home is intact (hero,
   tilt, testimonials, reel reveal, rwork, loader all present, no console errors). NOT deduped: the lab's
   inline reel vs ReelReveal are intentionally different (the lab one reskins with LabFx, the home one is
   fixed-dark) — leave them.
12. **BRAND color PRESET + dark `/lab` hero (2026-06-14).** Added the 9th LabFx preset **`brand`**
   (ink/denim/rose) to the picker — generate via `tools/gen-palettes.mjs` (denim #3E6E94 was
   Leonardo-lifted to #527da0 for AA on ink), wired through `LabFx.astro` (`THEMES` array + a `.fx-sw`
   swatch + `:root.theme-brand`). Made the `/lab` HERO a darker version that reads off `--bg`/`--fg`
   tokens, so it retints with whatever preset is active. Real-Chromium verified across presets, brand
   preset applies ink/denim/rose with no errors.
13. **BrandWorld tagline CLIP FIXED (2026-06-14, commit ca2ad54).** The `M●NUMENTS` wordmark (Archivo
   ~1230px at the old 164px) overflowed the brand band's 1180px inner and dragged `.taglinerow` left
   under `overflow:hidden`, clipping "Built to be remembered." Fix in `BrandWorld.astro`: widened
   `.bw .inner` to `var(--wrap,1300px)`, added `min-width:0` to `.bw .hero > div` (so the wordmark
   can't force the track/tagline wider), capped the wordmark at `clamp(36px,10vw,150px)`. Verified
   flush + clip-free with Archivo loaded at 375 / 768 / 1024 / 1440 / 1920 / 2200px.
14. **CODE TIGHTENED — verified dead-code sweep (2026-06-14, commit 2a5ba64).** Multi-agent adversarial
   audit over this session's files (each removal grep-proven unreferenced across src/public/tools).
   Removed 13 dead items: legacy `.work-grid`/`.work-card`/`.work` home rules (home is `.rwork-*` now)
   + the `.work-card` reduced-motion entry; 7 orphan `cs-` label comments + the TEMP movement-toggle
   comment; the no-op `function build()` in index.astro (no callers; superseded by `drawWave`);
   `.fx-ring` (cursor renamed `.fx-cur`) + the mousedown handler writing the never-read `--press`;
   the `.tmx-next*` reduced-motion rules orphaned when the next-project block moved into
   `NextProject.astro`; corrected a stale "eight swatches" comment (picker has 9). 1 candidate KEPT:
   the `.bw` full-bleed gutter is a live design choice (CLAUDE.md full-bleed exception), not dead.
   Build clean; `/` + `/lab` + `/lab/sony-this-moment` render with 0 console errors.

**New tools:** `tools/gen-palettes.mjs` (color), `tools/snap-el.mjs` (capture one element at a
scroll offset in real Chromium), `tools/snap-themes.mjs`. The headless Claude-preview pauses rAF
and cannot composite a Lenis scroll, so use these (real Chromium) to capture motion.

## ════ SESSION 2026-06-13 — the /lab v2 redesign is the live work ════
**Everything new lives at `/lab/*` (the originals at `/`, `/work`, `/about`, etc. are UNTOUCHED
until DJ promotes a page). Hub: `/lab` (a public "Laboratory" showcase). Each change is its own
commit = clean rollback. Deployed: https://monuments-2-0.vercel.app/lab**

**The v2 pages (all on the shipped design system):** `/lab/home` (SIGHT SOUND AND EMOTION
mouse-tilt hero + red floating hand + brand-world scenes), `/lab/work` (exoape-style vertical
project cards + the actual showreel video + "View" cursor), `/lab/about` (DJ likes it; real
photo montage, "Billions" stat that ticks up in a 4-up row, pinned credo, light/dark balance),
`/lab/services` (real capabilities + AI block + attention hourglass + black logo ticker),
`/lab/ai` (audit/automate/deploy, ambient reel hero, WILD intro, cards fold into a paper
airplane on scroll, "Can your AI do this?" demo), `/lab/blue-cross` + `/lab/sony-this-moment`
+ `/lab/turnstile` (editorial case studies; insight scene = a ~56vh band, not full screen),
`/lab/giving`, `/lab/contact`.

**Shipped components (src/components/):** LabFx (theme tokens + grain + contextual cursor +
4-preset color selector), FloatingHand (tiny red hand, flies diagonally on scroll behind text),
BrandTicker (scroll-velocity logo marquee; `tone="white"|"black"`, live `data-speed`),
WeavingLine (REMOVED from pages, DJ hated it — file still exists), ShapePile (physics shapes),
AttentionHourglass (8s drain + flip), AIWorkflowDemo (cycling capability demo). Tools:
`tools/snap.mjs` (full-page capture + measured geometry) and `tools/motion.mjs` (frame-by-frame
scroll filmstrips) — ALWAYS use these to judge motion before/after; DJ has twice called out work
done without actually looking.

**The system:** tokenized colors via LabFx on `:root` (lab-only). Default theme "monument" =
warm dark + RED accent (the floating-hand red). Type-clip fix on all word masks
(overflow-clip-margin). Motion laws = pinned scenes, scrubbed+reversible, sheet-over handoffs,
media slower than type (REFERENCES.md). Voice: studio "we", no em dashes, CD-first, never
"photo studio"/"small". Black/WHITE section balance matters (DJ: too much black).

**⏳ OPEN / NEXT:**
- COLOR: stop hand-picking theme hexes. Use **Adobe Leonardo** (generate accessible scales from
  the red) and/or **Radix Colors**; **culori** for math. See COLOR-SYSTEM.md. Regenerate the 4
  LabFx presets from a tool.
- DJ to send a specific photo album for the about-credo background (currently random from
  /gallery/full; swap the POOL in about.astro's montage script).
- Donut Media + DW Drums ticker logos are agent-crafted approximations — swap real marks.
- DJ rewrites the AI-page copy himself (going-wild voice). Showreel = self-host the MP4 later.
- Promote chosen /lab pages onto the real routes when DJ signs off.

## ──────── older sessions below (historical) ────────

**DJ's style:** precise designer feedback, fast iteration. Replicate-first (match the real
monuments.cc, THEN optimize — don't redesign unprompted). Can't watch video. Estimate effort
before big tasks. Verify in-browser via Claude Preview MCP (name `monuments`, port 4321) — the
headless preview renders narrow (~755px) and pauses rAF when hidden, so read the DOM/computed
styles and trust DJ's real screen for fine spacing.

## SESSION 2026-06-08/09 — what changed (read this first)
**Strategic context (NEW — memory `site-builder-vision`):** monuments is DJ's *learning vehicle + template #1* for a **category-based website-builder / site-factory** (client fills a form + uploads images → point a domain → auto-build a site by business category). So **build components + data model GENERIC / multi-site-ready, not monuments-specific**; theme by category via `--` tokens; per-client editing = a git-based CMS (Keystatic-style); reuse, don't reinvent.

**Shipped this session:**
- Real bug fixed: `--pad` was `--pad: var(--pad)` (circular) → killed padding on EVERY work section. Now `clamp(24px,5vw,40px)`. (This was the "spacing" complaint.)
- `CSS-MAP.md` (repo root): audited line-map of all of global.css + a confirmed **dead-code list** to delete (old `.work` grid, old `.ab-*`, orphan `.cs-*` scaffold, `.menu-close`, `.pg-modes`, unused `--warm`/`--gray-bg`). CSS is otherwise structurally clean.
- Sony This Moment gallery: **continuous auto-scroll filmstrip** carousel (CSS-only marquee, hover-pause) + a **masonry** with a dark text-block cell that **randomizes its slot each page load**.
- `/lab/find-your-flow`: FIND YOUR FLOW credits ring built as **3 motion options A/B/C** to compare live — A scroll-dial, B draw-in seal, C counter-rotor.
- `/lab/work-kit`: first reusable, SELF-CONTAINED (scoped-style) work components — **WorkScope** ("what I did for them": heading+body+services list), **WorkCredits**, **WorkQuote** — + generic `src/data/work/types.ts` (Section/Project model with BOTH `scope` and `credits` as section types). Additive; no live page touched.

- **Keystatic CMS — GitHub-mode browser login WORKING (2026-06-10).** `/keystatic` admin, collections **Work projects** + **Testimonials** + singleton **Site settings** (`keystatic.config.ts`; content under `content/`). React + `@keystatic/astro` + `@astrojs/vercel@8` adapter are added in `astro.config.mjs` but the integrations are **dev-gated** (`!process.argv.includes('build')`) so the production build stays **pure-static** (verified). Storage auto-switches local-in-dev / GitHub-on-deploy via `import.meta.env.DEV`. GitHub App "Monuments CC CMS" created + installed on the repo (Contents+PR read/write); 3 Vercel env vars set (KEYSTATIC_GITHUB_CLIENT_ID/SECRET + KEYSTATIC_SECRET, Sensitive/Production). Fixed an OAuth `redirect_uri=localhost` bug via `security.allowedDomains:[{hostname:'monuments-2-0.vercel.app'}]` in astro.config (Astro 5 host-injection guard). DJ logged in OK. Login from anywhere: monuments-2-0.vercel.app/keystatic.

**⏳ Decisions waiting on DJ:**
1. FIND YOUR FLOW: pick A / B / C (or a mix) at `/lab/find-your-flow`.
2. ✅ RESOLVED — CMS = Keystatic GitHub mode (built + login working, see above).

## SESSION 2026-06-10 (cont.) — CMS→pages pipeline WIRED
**The reader/adapter/WorkLayout pipeline is built + proven end-to-end.**
- `src/lib/work.ts` — `createReader(@keystatic/core/reader)` over `content/work/*`; `toProject()` ADAPTS the flat Keystatic record → the generic `Project` (header + ordered `sections[]`, `src/data/work/types.ts`). This is the only seam that knows Keystatic field names. Exports `listWorkSlugs` / `getProject` / `getAllProjects`.
- `src/components/work/WorkLayout.astro` — dispatches `project.sections` by `type`, reusing the **global** `.wh / .wk-intro / .wk-carousel / .wk-masonry / .bc-quote / .bc-meta / .cs-next` classes so a CMS page matches the locked Sony ref pixel-for-pixel (verified: same grid cols, 42s `wkScroll`, 3-col masonry, accent emphasis, `#e0322d` circle). Masonry images are Lightbox triggers.
- `src/components/Lightbox.astro` — the photography `.pg-*` filmstrip lightbox LIFTED into a shared component (auto-drift + grab-momentum + keyboard). Binds to any `[data-lb-full]` trigger, grouped by `[data-lb-group]`. (Photography still has its own inline copy — entangled w/ lane drag-guard; migrate it onto this later.)
- Added `quote{}` object to `keystatic.config.ts` (the `bc-quote` was the only non-CMS field) + a new `IntroSection` (`wk-intro` grid) to `types.ts`, distinct from `ScopeSection` (services-list/Flashpoint).
- **Seed:** `content/work/sony-this-moment.json` (real Sony content). NOTE on-disk path: data-only collection → **flat `content/work/<slug>.json`**, NOT a `<slug>/index.json` dir.
- **Comparison route:** `/work-preview/[slug]` renders the CMS page via WorkLayout. Locked `/work/sony-this-moment` is UNTOUCHED — A/B them at 1440 before flipping real routes.
- ✅ Build clean (18 pages). `/work-preview/sony-this-moment` prerenders to **pure-static** `index.html` (CMS content baked in, 0 react islands) — static posture preserved.
- ⚠️ **DOC FIX:** `astro.config.mjs` is NO LONGER dev-gated (that approach is gone). Current: Vercel adapter always on, **public pages prerendered/static, only `/keystatic` + auth API are serverless.** HANDOFF.md's "dev-gated pure-static build" text is stale.

**NEXT (in order):**
- [ ] **DJ A/B check** `/work-preview/sony-this-moment` vs locked `/work/sony-this-moment` at 1440 → if it matches, flip real `/work/[slug]` onto WorkLayout (sony LAST, it's the ref).
- [ ] Roll real projects into the CMS (clothing-merch = proof, then bc family, cs2 family). Each work page becomes a `content/work/<slug>.json`.
- [ ] Reuse `Lightbox.astro` on the photography page too (retire its inline copy) once the work flow is locked.
- [ ] Finish the kit (WorkScope is wired into WorkLayout for the services/Flashpoint variant; WorkQuote/WorkCredits superseded by the global `.bc-quote/.bc-meta` for the Sony family — decide whether to keep them).
- [x] ✅ DONE 2026-06-12 — dead CSS swept (all CSS-MAP candidates re-grepped + removed, ~110 lines; build verified clean).

## SESSION 2026-06-12 — Blue Cross clone + full QC pass
- **`/work/blue-cross` REBUILT as a faithful clone of monuments.cc/portfolio/blue-cross-2** (verified against the live page in-browser): `.wh` header (firefighter hero = bci-02, BCBS logo `/logos/blue-cross.png`, red `--wh-circle`, real intro copy) → page-scoped `.bx-scope` copy band (services list left / two paragraphs right, like live) → `.wk-carousel` (live swiper order: bci-22/24/02/28) → full 23-image `.wk-masonry` in live order → **new `WorkNext.astro`** (giant-ghost-text next-project teaser cloned from the live template; reusable, scoped styles). NOTE: local bci-NN numbering == live Blue-Cross-Of-IdahoNN numbering.
- **QC pass (all clean):** `npm run build` 18 pages no errors; all 19 routes 200 + 404 works; zero console errors/warnings on every page (home, work, photography, about, contact, giving, both labs, all case studies); zero failed network requests; zero broken internal links/assets (only flag: `/about/dj.jpg` inside an intentional HTML comment placeholder); no console.log/TODO/debugger anywhere in src.
- ⏳ DJ to A/B `/work/blue-cross` vs the live page, then approve cloning the remaining work pages.

## DONE (do not redo)
- Live + deployed: GitHub `monuments-dj/monuments.2.0` → Vercel auto-deploy →
  https://monuments-2-0.vercel.app  (`gh` authed; `git push` works hands-off).
- All 15 pages build; all 8 case studies exist (no 404s). Home, Work, Photography,
  Contact, About, Services all built.
- Menu patches: vintage set (Idaho [straight], LA, AI handshake, No Risk No Story, race,
  film). Camera patch emojis sized down.
- **Layout system:** every section uses `--wrap` (1300px) + `--pad` (clamp 24–40px),
  centered. Sections fit the column UNLESS deliberately full-width (hero img, dark quote band).

## IN PROGRESS — work-page refinement (this is the active task)
Refining the work/case-study pages to match the real monuments.cc, one at a time.
**Sony "This Moment" is the reference build** — pattern to roll to the others:
- `.wh-*` work header: full-bleed campaign image, big uppercase title (top), client logo
  + italic role with a hand-drawn **marker circle** that draws in / holds / fades / redraws
  (~5s loop). Circle colour is per-page via inline `style="--wh-circle:#xxx"`.
- `.wk-intro`: 2×2 photo grid (left) + heading & 2 paragraphs (right).
- Then bc-* image/quote sections, `.bc-meta` credits, `.cs-next`.

**NEXT:** roll the `.wh-*` header + `.wk-intro` pattern to the other work pages, each with
its own `--wh-circle` colour + client logo:
- [ ] sony-flow-state, sony-xperia-summer, flashpoint, waffle-me-up, clothing-merch, blue-cross, turnstile
- [x] **FIND YOUR FLOW** credits ring — BUILT as 3 motion options at `/lab/find-your-flow`
  (A scroll-dial / B draw-in seal / C counter-rotor). ⏳ DJ to pick — see SESSION block above.

## Open / lower priority
- About + Services: DJ is matching these to the real site via **Cowork** (separate tool).
  Coordinate — pull before editing if Cowork has been active (pre-push hook blocks stale pushes).
- Brand-doc conflicts still unresolved: photo-vs-film positioning, Tess section, featured-work list.
- Self-host showreel MP4 when DJ provides it. (NOTE: `against.png` renders inverted
  by design — that's the actual AGAINST mark, confirmed by DJ. Do NOT "fix"/flip it.)
- Real DJ/Tess headshots → swap into About placeholder tiles (`/public/about/`).

## SESSION 2026-06-12 (cont.) — V2 LAB PAGES BUILT (autonomous run, DJ to review)
All new versions live at /lab/* (originals untouched; every page = its own commit
for rollback). Built on the measured motion system (REFERENCES.md): pinned scenes,
scrubbed reversible motion, sheet-over handoffs, marker accents.
- /lab/ai — pinned ERA + QUESTIONS scenes, WILD stamp cascade, tilt cards
- /lab/home — line-by-line hero build + marker circle over video, showreel kept,
  brand-world work bands, services rows (incl. AI), trusted grid
- /lab/work — exoape-style portals (grow → handoff), index list w/ hover thumbs
- /lab/blue-cross — editorial chapters, pinned insight scene, collage, stats,
  frame wall, portal-grow next-project ending
- /lab/about — pinned credo scene, drifting galaxy media, team tiles
- /lab/services — CD-first rows w/ marker underlines, cream AI block, process strip
- /lab/contact — giant marker-underlined email, expect cards, draggable patches
⏳ DJ: review each, punch-list or promote to real routes.
