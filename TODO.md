# TODO — current state (2026-06-10)

**Quick start:** `cd monuments-site && npm run dev` → http://localhost:4321 · `npm run build`
(builds clean, **17 pages**, incl. `/lab/find-your-flow` + `/lab/work-kit`). Read `CLAUDE.md` first (shorthand + workflow), then `HANDOFF.md`, then `CSS-MAP.md` (line-map of global.css).
Project memory auto-loads — especially **monuments-copy.md** (the SOURCE-OF-TRUTH brand doc).

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
- `against.png` logo upside-down. Self-host showreel MP4 when DJ provides it.
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
