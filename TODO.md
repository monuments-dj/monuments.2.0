# TODO — current state (2026-06-01)

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

**⏳ Decisions waiting on DJ:**
1. FIND YOUR FLOW: pick A / B / C (or a mix) at `/lab/find-your-flow`.
2. CMS scope: Keystatic visual editor now / clean data files (GUI later) / no CMS.

**NEXT (in order):**
- [ ] Reuse the photography `.pg-*` gallery + filmstrip **lightbox** for the work-page gallery — lift the lightbox into a shared component (DJ's instruction). Don't build a new one.
- [ ] Finish the kit + a `WorkLayout` that renders `project.sections` by `type`; keep components self-contained.
- [ ] Sweep the dead CSS listed in `CSS-MAP.md` (re-grep first — multi-session repo).
- [ ] Migrate work pages to the kit: scaffold → clothing-merch (proof) → bc family → cs2 family → **sony-this-moment (locked ref) LAST** → drop in the FIND YOUR FLOW winner.

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
