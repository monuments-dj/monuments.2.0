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
Local-first. Iterate at localhost:4321 (instant hot-reload, private). Only push when a
batch feels good — keeps the live site (https://monuments-2-0.vercel.app) polished and
every deploy a clean rollback point. Default to batching changes, not push-per-edit.

## Deploy facts
- Repo: github.com/monuments-dj/monuments.2.0 (branch `main`)
- Host: Vercel (Hobby/free), auto-deploys on push to main → https://monuments-2-0.vercel.app
- `gh` CLI is authed (account monuments-dj) → Claude can `git push` directly, no prompts.
- Live WordPress at monuments.cc is UNTOUCHED — domain swap is a separate, deliberate,
  backed-up step. Never point the domain without explicit OK.

## Build / stack (see HANDOFF.md + TODO.md for full detail)
- Astro 5 static, Inter only, Lenis smooth scroll, vanilla JS. `npm run build` → 15 pages.
- All styles in src/styles/global.css. Pages in src/pages/. Shell in src/layouts/Base.astro.
