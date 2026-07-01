# Monuments Site — working agreement

## ⛔ STOP — DO THIS FIRST, EVERY SESSION, BEFORE ANY EDIT
**This repo is edited from MULTIPLE places (this CLI + Cowork + maybe GitHub web).**
**Your local copy is probably STALE. Before touching ANY file, run:**
```
git fetch origin && git status
git pull --rebase origin main      # if behind
```
If `git status` shows you're behind origin/main, you MUST pull before editing, or you
will clobber work done elsewhere. Do not skip this even for a "quick" change.
If a pull conflicts, STOP and tell DJ — do not force anything.
(DJ explicitly asked for this guardrail because work happens in parallel sessions.)

---

Quick shorthand DJ can use. When DJ says these, act without re-explaining:

- **"ship it"** / **"push it"** / **"go live"** → commit all current changes with a clear
  message + `git push origin main`. Vercel auto-deploys in ~60s. Confirm when live.
- **"preview"** / **"local"** → make sure the dev server is running (Claude Preview MCP,
  name `monuments`, port 4321) and give DJ http://localhost:4321 to check.
- **"undo"** / **"roll back"** → revert the last change (working tree → last commit, or
  `git revert` the last commit if already pushed). Confirm what was undone.
- **"checkpoint"** → commit locally (no push) as a safe restore point.
- **"handoff"** → prep this conversation for a fresh chat (do it proactively at ~70% context).
  Steps: (1) update TODO.md (shipped this session / decisions / NEXT) + the "Active work" line
  below; (2) push any cross-session *facts* to memory; (3) commit + push the docs; (4) output a
  tight **kickoff prompt** for the new chat — working dir + "read CLAUDE.md, TODO.md, HANDOFF.md,
  CSS-MAP.md first" + one-line current state + the immediate next task. Goal: the new chat is as
  productive as this one from message 1.

## Workflow rhythm
Local-first. Iterate at localhost:4321 (instant hot-reload, private). DJ said: he's solo
on the repo for now (no need to sync-check every turn) and **auto-push at the end of each
change set is approved** — commit + push when a change feels done, no need to ask. Keep the
live site polished; each deploy is a clean rollback point.

## 🔍 VISUAL TRUTH FIRST — never clone or judge a page from its HTML
DJ's rule (2026-06-12): before cloning/judging ANY page, capture what's actually
rendered: `node tools/snap.mjs <url> <name> [width=1440] [--sections]` →
`tools/snaps/<name>/` gets a full-page screenshot, per-section crops, and
`elements.json` (every visible element's rect + computed font/color/bg).
Capture the reference AND the local build, Read both images, and diff the
numbers (px sizes, weights, column widths) — match measurements, not vibes.

## ⚠️ VERIFY AT DESKTOP WIDTH — don't repeat the v2 mistake
The Claude Preview MCP renders ~755px wide by default, so desktop-only bugs
(overlaps, misalignment) are INVISIBLE there. Before judging ANY layout:
`preview_resize` to **1280–1440px**, then screenshot + measure getBoundingClientRect
edges. Many spacing bugs this session came from shipping layouts only seen at 755px.
Avoid absolute-positioned elements over flowing text (they overlap at widths you can't see).

## Layout system (IMPORTANT — DJ's rule)
Every section fits ONE centered content column unless deliberately full-width:
`max-width: var(--wrap)` (1300px) + `margin: 0 auto` + `padding: … var(--pad) …`
(`--pad` = clamp(24px,5vw,40px)). All section left/right edges must line up. Full-bleed
(hero images, dark quote bands) = simply omit the wrap. When building any new section,
use these tokens so it aligns automatically. Don't reintroduce hardcoded `100px` gutters.

## Active work (2026-06-30): THE SITE IS NOW DJ'S HIRING PORTFOLIO
Real goal (memory `site-goal-agency-job` + `monuments-copy` = SOURCE OF TRUTH): a portfolio to get DJ
HIRED at an agency/brand. Audience = hiring managers. POSITIONING LOCKED: **Brand Experience /
Experiential Creative Director** (campaigns + experiential), lead with the NUMBER, AI is a tool NOT
the headline, first-person "I" voice. Case studies at `/lab/*`: buck-the-quo + adorama-music PUSHED,
know-vape built (has a TODO). NEXT: build the **Art of Visuals** flagship (4x revenue), a **Selected
Work** grid (Donut x Zumiez, AC Boise kit reveal), recut flagships results-first, add a hire-me kit,
rework the home hero. Full detail: TODO.md top block. Older /lab-redesign context below.

## Active work (2026-06-14, historical): see TODO.md
**CURRENT: the `/lab/*` v2 redesign + first promotions to production.** GSAP ScrollTrigger is the
scroll-animation stack (`src/scripts/gsap-lenis.js` bridges it to Lenis). Done: 9-preset color system
(incl. the `brand` ink/denim/rose preset), the inline pattern library on the hub (next-page · reel ·
next-project · galleries), the contextual cursor, the exoape light-forward pass on the hub, the reel
reveal, the about "How I work" pinned horizontal scroll, the `BrandWorld` brand-book band on `/lab`,
the spinning-metallic-M loader, and `NextProject.astro`. **FIRST PROMOTIONS TO `/`:** the Play/Reel
reveal (`ReelReveal.astro`) + the new loader now ship on the real homepage (the `monuments.cc` domain
is still WordPress/untouched — only the Vercel build changed). NEXT: roll the exoape pass onto the
other lab pages; self-host DJ's reel MP4 and pass `video=` so the reel/preview frames actually play;
swap the real vectorized eye+spark M into the loader (`ldrMPath` in `Loader.astro`). Older context below.

Building a GENERIC, multi-site component kit + data model — DJ's real goal is a category-based
site-factory; monuments = template #1 (memory `site-builder-vision`). **Keystatic CMS is LIVE**
(GitHub-mode browser login at `/keystatic`). **CMS→pages pipeline now WIRED**: `src/lib/work.ts`
(reader+adapter) → `WorkLayout.astro` (dispatches `sections` by type) + shared `Lightbox.astro`.
Proven at `/work-preview/sony-this-moment` (CMS-driven, matches the locked `/work/sony-this-moment`
ref pixel-for-pixel, builds pure-static). NEXT: DJ A/B-checks the comparison route, then flip real
`/work/[slug]` onto WorkLayout (sony LAST). FIND YOUR FLOW ring awaiting DJ's A/B/C pick at
`/lab/find-your-flow`. NOTE: astro.config is NOT dev-gated anymore — Vercel adapter always on,
public pages prerendered/static, only `/keystatic`+auth are serverless (HANDOFF text is stale).

## Deploy facts
- Repo: github.com/monuments-dj/monuments.2.0 (branch `main`)
- Host: Vercel (Hobby/free), auto-deploys on push to main → https://monuments-2-0.vercel.app
- `gh` CLI is authed (account monuments-dj) → Claude can `git push` directly, no prompts.
- Live WordPress at monuments.cc is UNTOUCHED — domain swap is a separate, deliberate,
  backed-up step. Never point the domain without explicit OK.

## Build / stack (see HANDOFF.md + TODO.md for full detail)
- Astro 5 static, Inter only, Lenis smooth scroll, vanilla JS. `npm run build` → 15 pages.
- All styles in src/styles/global.css. Pages in src/pages/. Shell in src/layouts/Base.astro.
