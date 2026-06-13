# Design references — DJ-approved (2026-06-12)

The locked reference set for monuments v2. Captures live in `tools/snaps/` (gitignored;
re-capture with `node tools/snap.mjs <url> <name> 1440 --steps=14` for virtual-scroll sites).
Use these for patterns and principles (type scale, pacing, motion choreography, framing) —
never copy assets, code, or distinctive trade dress. The site must stay monuments-flavored.

## The three (DJ: "absolutely legendary")
Taste line: clean but tech-forward. NOT gamified. Menus that feel modern, fresh, easy, fun.

### exoape.com — THE design-language match
DJ: "closest to my design language. And copy, also."
- **/work is the target for the monuments work landing.** Full-screen image portals per
  project, project title + one-line descriptor overlaid, slow cinematic pacing, "All
  Projects" index escape hatch, page counter. (snaps: ref-exoape-work)
- **/work/columbia-pictures is the strongest case-study reference.** Calm editorial
  layout: small kicker labels (Problem / Solution) beside narrow copy columns, huge
  full-bleed media between sections, generous whitespace. (snaps: ref-exoape-columbia)
- /studio: "Our Story" hero (giant serif-adjacent display + short mission line), kinetic
  single-word moments ("Converts") with belief statements. (snaps: ref-exoape-studio)
- "Play Reel" split-word + centered video panel — DJ loves his own reel entrance on the
  current home; this is the evolution path. Dark, cinematic, restrained parallax.

### tinywins.com — voice + kinetic type
- DJ's favorite intro animation anywhere.
- About page: the "WINS" expand-down + copy-multiplication scroll moment = his single
  favorite effect. Build a monuments version (candidates: MONUMENTS, or AUDIT/AUTOMATE/
  DEPLOY on the AI page). (snaps: ref-tinywins-home, ref-tinywins-about)
- Frames work as THINKING, not deliverables — the strategic-framing model for work pages.

### lusion.co — service presentation + play
- About-page tilted service cards (STRATEGY / CREATIVE / TECH / PRODUCTION with mirrored
  text + list items) = ready-made pattern for AUDIT → AUTOMATE → DEPLOY service blocks.
- Physics confetti/squiggle layers = playful without being a game.
- Sound FX: DJ unsure, suspects too gimmicky for his brand. Verdict: skip for v1; if ever,
  opt-in toggle only. (snaps: ref-lusion-home, ref-lusion-about + DJ's screenshots)

## Approved page scope (v2 push, LA deadline Thu 2026-06-18)
1. **Homepage v2** — "go crazy" but pull from existing site. KEEP: the reel entrance
   (DJ loves it), the footer (loves it), overall current home is "close to where I'd
   want to live". Build as /lab variant; A/B against current.
2. **Work landing** — exoape /work portals model.
3. **Blue Cross reimagined** — approved as-is "for now"; next step = reimagine as a
   portfolio page w/ exoape-columbia editorial structure. Replace the .cs-next /
   WorkNext block with a FUN creative next-project transition (the old Elementor one
   was forced on him; he wants something original).
4. **About** — exoape /studio + tinywins about energy.
5. **Services** — lusion tilted-cards pattern for the offer.
6. **Contact** — modern, fresh, easy (think exoape/lusion contact moments).
7. **AI / Labs page** — audit→automate→deploy offer (see memory: ai-consulting-page).
8. **Photography** — keep the lightbox + lanes DJ built (he worked hard on it, likes it)
   but align polish/pacing with the reference set. Lower priority than 1-7.

## Strategy (DJ's words, paraphrased)
Impress with (1) the work, (2) the layout. Visitors should ENJOY the site and come back
excited for updates. The site is the proof-of-work for the AI consulting offer: v1 took
6 months by hand; v2 with Claude must visibly outclass it.

## Motion vocabulary — MEASURED, not assumed (2026-06-12, via tools/motion.mjs)
Frame-by-frame scroll captures (tools/snaps/motion-*). What these sites actually do:

**The model is PINNED SCENES, not a scrolling document.**
- tinywins /about: viewport locks on a scene; scroll progress COMPOSES it. Copy
  fragments land in corners one at a time, the illustration assembles piece by
  piece, then the famous moment: the key word DUPLICATES one copy per scroll
  tick, each copy stepping down/right in a cascade between two phrase fragments.
  More scroll = more copies; scroll back = they retract. Then the next scene
  slides UP AND OVER the pinned scene like a sheet.
- exoape /studio: giant short statements scrub through while panels overlap;
  image blocks travel at ~half scroll speed; a section's text is still exiting
  while the next image panel is already entering. Continuous interleave.
- Telemetry: elements deviate up to ~244px from static flow per 500px of wheel.
  That is pinning + 0.5x parallax factors, not subtle drift.

**Implications for our pages (the gap that made /lab/ai feel like a PDF):**
1. Document flow + entrance reveals ≠ experience. Scenes must PIN (sticky stage,
   200-300vh parent; progress through parent drives composition).
2. Motion must be scrubbed and reversible, driven by scroll position every frame.
3. Transitions overlap: next scene slides over the current one. Sections never
   just stack.
4. Parallax factors are large (0.4-0.6x) and choreographed, not ±60px seasoning.
Tool: `node tools/motion.mjs <url> <name> [width] [steps] [wheel]` → filmstrip
sheets + motion.json + moved-summary.json. RUN THIS before designing any motion.

## The full motion map (all reference pages scanned, 2026-06-12)
10 motion scans in tools/snaps/motion-*. Per-page mechanics, measured:

**tinywins /home** — Rhythm: STATEMENT SCENE → BRAND WORLD → STATEMENT SCENE.
Giant claims split across two pinned scenes (line one, then its payoff). Work
shows as full-bleed color-blocked "brand worlds" (each case study takes over the
viewport in the client's palette). Between them: collage scenes where small
panels scatter-assemble around the viewport at staggered offsets. Device mockups
sit on pinned stages and tilt/settle as you pass.

**tinywins /about** — (mapped earlier) pinned scenes, corner-landing fragments,
the scroll-driven word-duplication cascade, sheet-over scene exits.

**lusion /home** — One continuous WebGL world; objects PERSIST and morph between
scenes (chrome blobs → paint stroke → reel). Copy floats over the world and
scrubs scale. Reel moment = words part as video panel grows between them.

**lusion /about** — The inversion of tinywins: the TEXT barely moves (persistent
identity line left, descriptor right), the WORLD does the storytelling (light
shafts, camera drift, environment morphs). Minimal copy, maximal atmosphere.

**exoape /home** — Headline builds LINE BY LINE across scroll ticks (word group
1, then 2, then 3 stacking into the full claim) while a media panel scales and
settles behind. Work index = asymmetric collage, images at 3-4 sizes rising at
different rates around a centered portrait.

**exoape /studio** — (mapped earlier) giant short statements scrub through;
image panels at ~half scroll speed; sections interleave (text exits while next
image enters).

**exoape /work** — THE PORTAL MECHANIC (target for our work landing): each
project is a centered image card that GROWS toward full-bleed as you scroll in,
title overlaid, then hands off as the next project's card rises from beneath.
Persistent index/counter. Grow → handoff → grow rhythm.

**exoape /work/columbia-pictures** — Editorial case-study flow: cream base,
kicker + narrow-column statements, then full-width color panels (teal/dark) with
stills collaged at varied sizes stepping in at alternating offsets. Background
color alternates per chapter with sheet-over transitions. Ends in a dense
thumbnail wall + credits. (Model for our case studies, incl. Blue Cross v2.)

**Cross-site laws (every page obeys these):**
1. One idea per scene; the scene owns the viewport until its idea lands.
2. Motion is scroll-scrubbed and reversible; nothing fires once and dies.
3. Scenes overlap at the seams (slide-over / grow-over / morph), never hard-cut.
4. Media moves at a different rate than type (usually slower, ~0.5x).
5. Color/world changes happen per scene, not per page: each chapter has its own
   atmosphere.
