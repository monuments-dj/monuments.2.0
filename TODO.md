# TODO — current state (2026-06-01)

**Quick start:** `cd monuments-site && npm run dev` → http://localhost:4321 · `npm run build`
(builds clean, **15 pages**). Read `CLAUDE.md` first (shorthand + workflow), then `HANDOFF.md`.
Project memory auto-loads — especially **monuments-copy.md** (the SOURCE-OF-TRUTH brand doc).

**DJ's style:** precise designer feedback, fast iteration. Replicate-first (match the real
monuments.cc, THEN optimize — don't redesign unprompted). Can't watch video. Estimate effort
before big tasks. Verify in-browser via Claude Preview MCP (name `monuments`, port 4321) — the
headless preview renders narrow (~755px) and pauses rAF when hidden, so read the DOM/computed
styles and trust DJ's real screen for fine spacing.

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
- [ ] DJ wants a **credits card + scroll-reactive circular "FIND YOUR FLOW" text** near the
  credits (see ref he sent: circular wordmark rotates with scroll, beside a white credits box).
  NOT built yet — was about to start when we paused.

## Open / lower priority
- About + Services: DJ is matching these to the real site via **Cowork** (separate tool).
  Coordinate — pull before editing if Cowork has been active (pre-push hook blocks stale pushes).
- Brand-doc conflicts still unresolved: photo-vs-film positioning, Tess section, featured-work list.
- `against.png` logo upside-down. Self-host showreel MP4 when DJ provides it.
- Real DJ/Tess headshots → swap into About placeholder tiles (`/public/about/`).
