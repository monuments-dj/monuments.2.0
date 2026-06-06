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

## Workflow rhythm
Local-first. Iterate at localhost:4321 (instant hot-reload, private). DJ said: he's solo
on the repo for now (no need to sync-check every turn) and **auto-push at the end of each
change set is approved** — commit + push when a change feels done, no need to ask. Keep the
live site polished; each deploy is a clean rollback point.

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

## Active work (2026-06-01) — see TODO.md
Refining work/case-study pages to match real monuments.cc, one at a time. Sony "This Moment"
is the built reference (`.wh-*` header w/ animated marker circle + per-page `--wh-circle`
colour; `.wk-intro` 2×2 grid+text). NEXT: roll that pattern to the other work pages + build
the scroll-reactive circular "FIND YOUR FLOW" credits component.

## Deploy facts
- Repo: github.com/monuments-dj/monuments.2.0 (branch `main`)
- Host: Vercel (Hobby/free), auto-deploys on push to main → https://monuments-2-0.vercel.app
- `gh` CLI is authed (account monuments-dj) → Claude can `git push` directly, no prompts.
- Live WordPress at monuments.cc is UNTOUCHED — domain swap is a separate, deliberate,
  backed-up step. Never point the domain without explicit OK.

## Build / stack (see HANDOFF.md + TODO.md for full detail)
- Astro 5 static, Inter only, Lenis smooth scroll, vanilla JS. `npm run build` → 15 pages.
- All styles in src/styles/global.css. Pages in src/pages/. Shell in src/layouts/Base.astro.
