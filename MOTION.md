# MOTION.md · the parallax language

DJ flagged it 2026-07-11 ("the way this section comes in is weird... we might need to have
that convo"). This is the proposed shared vocabulary. Three moves, one rule set. If a new
section needs motion, pick ONE move and name it in a comment; don't invent a fourth casually.

## The three moves

**1. Drift** (ambient, inside a frame)
The media inside a fixed frame moves slower than the page (image at 0.9x) or counter to it
(image at -0.1x while the frame rides at 1x). No pin. Used: hero media on home (image drifts
down at .22x while the type counter-drifts up), the About crew image (.plx).
Tokens: bg 0.9x · media counter -0.08 to -0.12x · never more than 12% travel.

**2. Window reveal** (arrival + a short hold)
A section enters and its layers land at different speeds: the panel/content rises slower
than the page (~0.7x, i.e. 30vh of catch-up), the media inside counter-drifts ~9%, side
elements drift in from ±24%, captions fade last. Progress rides TOTAL entry travel
(raw = viewports traveled since the section's top crossed the fold; 1 = docked) and the
reveal completes at raw 1.25 - just past docking - then the composed frame HOLDS under a
sticky stage for ~0.45 viewport before scrolling away. The hold is not optional: without
it the settled composition exists for exactly one scroll position and every real visitor
catches the section mid-flight (caught by DJ 2026-07-11). Toll: ~0.7 extra viewport.
Used: NOWHERE yet. It was tried on the PLAY reel. and DJ reverted it same day - the
original pin+scrub IS that section's vibe. This move stays in the kit for future sections.
Tokens: section 170svh, stage sticky 100svh · e=raw/1.25 · panel 30vh @ scale .92→1 ·
media -9% counter · words ±24% land e .75 · caption fade e .5-1.

**3. Pin + scrub** (a ride, use sparingly)
The section pins and scroll drives a timeline (filmstrip, horizontal walk). This is the
expensive move: it costs the visitor scroll distance, so it must PAY (real content, not
an entrance). Used: the PLAY reel. reveal (300svh; matched by measurement to monuments.cc 2026-07-11:
the muted reel is ALREADY PLAYING and 55vw when the stage locks - panel base 84vw at
scale .655 - grows to 84vw across the pin, "Showreel" caption beneath throughout;
PLAY / reel. are an arrival-only flourish, in over raw .45-.77, fully out before the
dock) + the Built-to-X filmstrip on home, About "How I work" horizontal walk.

## Rules
- Home carries TWO pins by DJ's explicit call (the reel reveal + the filmstrip); everywhere
  else: one pin per page, max, and a section may not pin JUST to arrive unless the arrival
  is the show (the reel reveal is the sanctioned example).
- prefers-reduced-motion: all three collapse to static (opacity 1, transform none).
- Travel distances in vh/%, never px, so they scale.
- The masked-line text reveal (.ln rise) is typography, not parallax; it stacks fine
  with any of the three.
