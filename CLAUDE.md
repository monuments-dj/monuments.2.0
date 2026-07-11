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

## Active work (2026-07-11): DJ's 13-item feedback batch SHIPPED (see TODO.md top block)
Home hero = old-site staggered grammar (SIGHT/SOUND/AND/EMOTION + corner blocks); reel sits
under the culture line; PLAY reel. is a window reveal (parallax language = MOTION.md, 3 moves);
work hero centered for real + typewriter cycles DJ's lines; menu = hiring order w/ 01 Home;
capabilities refusals = numbered ledger; contact addr = 6180 Aldama St + spinning wire M;
type switcher ROUND 2 (06 GRIT Anton · 07 CLSH Clash Display · 08 SPCE Space Grotesk) after
DJ passed on 01-05. Switcher pill = bottom 86px + drag grip. Type/B-W/red-kickers still DJ's call.

## Active work (2026-07-10, historical): identity decisions OPEN (font pairing + B/W) · see LAUNCH.md 07-09 block
B/W default (pink dead; case-page scoreboards invert to PAPER in B/W); five type pairings in the
switcher pill; /template = the element library (fix elements THERE first, then propagate); locked
CTA system sitewide (closed kicker set, button always "Let's talk ↗", contact = 4 mailto doors);
EVERY video plays without a click, play-when-visible is the global default, and every .frames
sheet is packed by the global masonry script - all three systems live in PageFooter.astro (verify:
tools/motioncheck.mjs + bw-sweep.mjs + packcheck.mjs). Heroes = 78svh middle size. Initial page
payloads carry zero below-fold video bytes (pvid preload=none over posters).
DJ owes: pairing pick, B/W confirm (then bake + delete switcher + Kit menu line), testimonial
quotes, real-browser motion pass. Durable BTS pool: ~/Monuments-Social/bts-library/. Snip pass
COMPLETE 2026-07-10: every film poster sitewide now loops its own footage (motioncheck ALL PASS);
LAUNCH section A build leftovers also closed (touch proof line on home cards, Photography CTA,
On Camera row 2026/12 tapes, Tess clause confirmed shipped).

## Active work (2026-07-08, historical): HOME STRETCH toward the domain swap · full launch punch list exists
Goal unchanged: portfolio to get DJ HIRED inside agencies (goal 1) + sell clients on his work/taste
(goal 2). **The launch punch list is now consolidated: [LAUNCH.md](LAUNCH.md) (checklist + References)
+ [AUDIT-2026-07-08.md](AUDIT-2026-07-08.md) (full 26-page, 154-finding review). Read both.**
This session shipped: (a) hero + CTA reveal masks were clipping italic-serif descenders on every
header, fixed sitewide (padding-bottom on `.ln`/`.sl`; see CSS-MAP.md "Reveal-mask descenders" before
adding any masked header); (b) accent cobalt to ROSE sitewide + a TEMP accent switcher pill in
PageFooter.astro (**DJ owes an accent pick, then bake into `:root` and DELETE the switcher**); (c)
footer is now the shared PageFooter.astro; (d) Adorama AOV pass (38 imgs, FR-numbered contact sheet,
"The cutdowns"); (e) **killed the wrong 160M+ stat sitewide**; (f) 26-page audit + 7 safe fixes
(clothing-merch parallax CRASH, CWI/Contact visible placeholders, Rockys/title-case/grammar typos).
AWAITING DJ: accent pick (+delete switcher) · **verify "3.6M+ impressions" stat** (same class as the
wrong 160M+) · reconcile Est. 2016-vs-MMXXII · AOV reel · photo folders · fresh IG links (sony-this-
moment + clothing-merch) · Adorama cutdown video IDs · /hire green-light.
ON CLAUDE next (no new input needed, from the audit): flip I-voice slips (Flashpoint/Know Vape 3rd-
person), rewrite duplicate pull-quotes (donut/dw-drums/sony-this-moment), reconcile per-page date/
file-code + role-title inconsistencies, build the approved /hire page.

## Active work (2026-07-07, historical): COPY v3 APPLIED · POSITIONING = CREATIVE DIRECTOR
Goal unchanged: portfolio to get DJ HIRED (audience = hiring managers). POSITIONING UPDATED per
DJ's copy handoff (tools/copy-new.md = LOCKED source): **Creative Director**, sub-line "Integrated
campaigns · film · stills · experiential", hero thesis "The tools are everywhere. Taste isn't.",
I-voice, Emmy=Know Vape only / Buck the Quo=Rockys, Est. MMXXII. All 18 case pages at `/work/*`
(NEW: cwi-lets-get-started, placeholders pending assets). Photography = early-Mac OS9 hero.
AWAITING DJ: AI page copy (offer 08 exists, page NOT built), CWI assets, fresh IG links
(sony-this-moment + clothing-merch), Photography/Giving/Contact copy pass, case stat audit.
Full detail: TODO.md top block. Older context below.

## Active work (2026-06-30, historical): hiring-portfolio pivot
Case studies were then at /lab/*; all since migrated to /work/*. See TODO.md.

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
