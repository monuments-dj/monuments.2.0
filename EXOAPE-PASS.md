# exoape influence pass (lab pages)

DJ wants the lab pages to take on exoape.com's feel: white/clean, generous whitespace,
photos that FLOAT. Grounded in measured captures of exoape home / work / columbia / studio
(2026-06-13, via tools/snap.mjs + a multi-agent analysis). This doc is the playbook for the
whole sweep. The `/lab` hub is page #1; the other lab pages follow the same rules.

## The principles (what makes exoape feel that way)

1. **High-key, light-forward.** The airy feeling comes from LIGHT sections being near-pure
   paper with ink text, while a FEW dark grounds act as deliberate punctuation. Color lives
   almost only in the photos and the one red accent. So: light = the default, dark = a
   deliberate beat (a hero, a reel, a closer), never the wallpaper.
2. **Photos float bare.** No border, no caption box, a SMALL radius (10px), a soft TINTED
   shadow (never pure black), real margin so nothing touches, and a slow ~0.5x parallax
   (the image drifts inside an oversized frame). Sharp-ish, clean, hovering on the ground.
3. **Architectural whitespace.** Sections are tall and single-purpose; blocks are islands in
   mostly-empty fields; section seams are color cuts, not divider lines. One vertical rhythm
   pushed to the upper clamp.
4. **Quiet type, narrow copy.** Big calm headlines, copy kept to a narrow column (section
   heads max-width ~640px so the right half stays open), and a "+" kicker marker beside a
   small label (the "+" is the only accent there).

## Tokens (no new hex; LabFx themes must still reskin everything)

- **Light ground:** `background: var(--paper); color: var(--ink);`
- **Dark ground (punctuation):** `background: var(--bg); color: var(--fg);`
- Text alphas use `--ink-rgb` on light bands, `--fg-rgb` on dark bands.
- **Shadows:** retire pure black. Use `rgb(var(--ink-rgb) / 0.12-0.22)` everywhere.
- Spacing: `.lab-sec { padding: clamp(90px, 12vw, 160px) var(--pad); max-width: var(--wrap); }`
  is the one rhythm token. Do NOT change `--pad` (clamp(24px,5vw,40px)); the centered
  `--wrap` column + aligned edges stay per the repo layout rule.
- Kicker "+" marker: prepend `<span class="lab-kicker-mark" aria-hidden="true">+</span>`;
  `.lab-kicker { display:inline-flex; align-items:baseline; gap:22px; }`
  `.lab-kicker-mark { color: var(--accent); font-weight:500; }` label colored
  `rgb(var(--ink-rgb)/0.75)` on light / `rgb(var(--fg-rgb)/0.75)` on dark.

## Shared floating-media treatment (reusable across pages)

```css
/* SHARED FLOATING MEDIA (token-only, exoape float) */
.lab-float {
  --lf-ar: 0.8;            /* 4:5 portrait default */
  --lf-radius: 10px;
  --lf-float: 0px;         /* whole-block drift, set by JS */
  --lf-drift: 0%;          /* inner-image drift, set by JS */
  display: block;
  margin: clamp(28px, 4vw, 64px) auto;
  width: min(100%, clamp(280px, 34vw, 520px));
  transform: translateY(var(--lf-float));
  will-change: transform;
}
.lab-float-frame {
  position: relative; overflow: hidden;
  aspect-ratio: var(--lf-ar); border-radius: var(--lf-radius);
  box-shadow: 0 28px 64px rgb(var(--ink-rgb) / 0.16);
}
.lab-float-img {
  position: absolute; left: 0; top: -9%;
  width: 100%; height: 118%; object-fit: cover; display: block;
  transform: translateY(var(--lf-drift)); will-change: transform;
}
.lab-float--sm { width: min(100%, clamp(240px, 22vw, 340px)); }
.lab-float--lg { width: min(100%, clamp(320px, 42vw, 600px)); }
.lab-float--push { margin-top: clamp(60px, 9vw, 150px); } /* stagger a frame lower */
@media (prefers-reduced-motion: reduce) {
  .lab-float { transform: none !important; }
  .lab-float-img { transform: none !important; top: 0; height: 100%; }
}
```
JS: drive `--lf-drift` (image, ~16% range) + `--lf-float` (block, ~26px) from each
`.lab-float`'s progress through the viewport, like the reel's handler.

## Hub page recipe (page #1)

Flip `.lab` root to `--paper/--ink` so hero, ticker, experiments, building blocks, ticker
lab, the bench row, and the library intro all read LIGHT. Reserve DARK for exactly two beats:
the PatternLibrary `#reel-reveal` band and the final `.lab-end` CTA + ShapePile closer. Soften
every shadow to `--ink-rgb` alphas, float the hero frames (opacity 1, radius 10px, reduce the
montage to ~4 frames, kill the dark scrim), de-box the building-blocks cards, switch the
under-hero ticker to `tone="black"` in an airy band, apply the "+" kicker + narrow section
heads everywhere.

## Measured exoape reference points

- Light ground pure white, ink `#0D0E13`; dark grounds `#0D0E13` / footer `#070707`.
- 120px gutter on 1440; sections 1800-2700px tall; total scroll ~9377px.
- Floating media locked ~4:5 portrait (0.80), sizes 276x344 up to 584x729, staggered at
  varied left offsets so they cascade diagonally. Motion clips 16:9 + 1:1.
- ZERO border-radius and ZERO box-shadow on exoape's own media (sharp edges); we soften to a
  10px radius + faint tinted shadow so it reads as monuments, not a clone.
- Display type 250px/weight-400/tracking -11.5px; lede 24/32; kicker 14px with "+" ~22px left.
