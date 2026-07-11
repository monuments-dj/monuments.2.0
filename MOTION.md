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

**2. Window reveal** (arrival)
A section enters and its layers land at different speeds: the panel/content rises slower
than the page (~0.7x, i.e. 30vh of catch-up), the media inside counter-drifts ~9%, side
elements drift in from ±24% and land by e=.75, captions fade last (e .5-1). Progress e =
how far the section's top has entered the viewport (0 at the fold, 1 docked). No pin, one
viewport tall, no scroll toll. Used: the PLAY reel. section on home (the reference build).
Tokens: panel 30vh @ scale .92→1 · media -9% counter · words ±24% · caption fade e .5-1.

**3. Pin + scrub** (a ride, use sparingly)
The section pins and scroll drives a timeline (filmstrip, horizontal walk). This is the
expensive move: it costs the visitor scroll distance, so it must PAY (real content, not
an entrance). Max one per page. Used: the Built-to-X work reel on home (the only one),
About "How I work" horizontal walk.

## Rules
- Entrances are move 2, never move 3. A section may not pin just to arrive.
- One pin per page, max. Everything else is drift or window reveal.
- prefers-reduced-motion: all three collapse to static (opacity 1, transform none).
- Travel distances in vh/%, never px, so they scale.
- The masked-line text reveal (.ln rise) is typography, not parallax; it stacks fine
  with any of the three.
