# Motion Grammar of the References (measured, 2026-07-02)

Method: tools/motion.mjs wheel-scrolled each site at 1440px like a human, saved a frame
per step, and measured per-element deviation from uniform scroll (moved-summary.json).
Filmstrips read frame by frame. This is observed motion, not inference.

## Tiny Wins — the anchor
- **THE move: a pinned horizontal work reel.** The section pins; a sentence stays
  fixed ("Make them feel ___") while only the LAST WORD swaps per project
  (elevated, bright, optimized, steady, fortified, polished, ahead of the game,
  at home, unleashed) and the work slides horizontally, scrubbed by scroll.
  A tiny tick-mark scrubber (audio-waveform style) shows progress.
- Line-split text reveals (`p.split-line`) on statements.
- **Sticky footer under-reveal** (`footer.sticky`): the page slides up to expose
  the footer beneath it.
- Hero video is pinned while the intro statement scrolls over it.
- Measured: 22 of 28 tracked elements move against scroll. Motion IS the site.

## Monolog
- **Scroll-lit list:** the services list ("Brand Strategy / Visual Identity / ...")
  sits dim, and items ILLUMINATE one by one as scroll progresses. Scroll = a dimmer
  switch. Signature and cheap.
- Story cards flow normally; drama is reserved (SLIK wordmark glitch on hover).
- Giant condensed "PROJECT JOURNEY" banner as a section divider.
- Fixed navbar; about opens as a MODAL (measured as fixed layer), footer under-slides.

## Code by Jesse
- **Character-level text animation** on buttons (`btn-animate-chars`) and a
  **scramble-text cursor** (`cursor-scramble`) that follows the pointer.
- Video-first work cards (device mockups playing footage), sections fade between
  dark scenes; fixed logo; stats appear as plain rows.

## Work by W
- **A persistent 3D companion** (the pointing glove) that floats over sections and
  follows through the whole page: mascot-as-cursor-companion.
- Sparse pinned sections; giant W mark and address blocks in a long footer zone;
  services accordion (01/03).

## What ships into the converged cut (this pass)
1. **Tiny Wins reel → m-home:** "The index" becomes a pinned scroll-scrubbed
   horizontal reel: fixed line "Made people feel ___" with the word rotating per
   project (bigger / human / heard / loud), tick scrubber, archive captions kept.
   Reduced-motion fallback: plain horizontal scroll.
2. **Monolog scroll-lit list → m-services (offer rows) + m-about (method steps):**
   rows sit at 35% ink and light to full as they cross the viewport center.
3. **Jesse scramble → the mail pills + corner nav links** on all m-pages:
   text scrambles through mono glyphs on hover (300ms, settles left-to-right).
Parked for later: sticky footer under-reveal, glove-style companion (the spark
could play this role one day), about-as-modal.
