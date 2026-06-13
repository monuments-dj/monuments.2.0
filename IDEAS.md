# Envelope log — what's working, what to push (Claude's read, 2026-06-12)

DJ asked for my actual opinion: scan the three references + both monuments sites,
say what's working, and keep a running log of things worth pulling from, even if
they don't make v1. Grounded in frame-by-frame motion scans (tools/snaps/motion-*).
Living document: add, argue, strike.

## What's working — and honestly

### monuments v2 (the rebuild)
- **The showreel scroll-zoom is already real scroll-linked motion.** The scans show
  it scrubbing from small to full-stage as you scroll. It is the most
  reference-grade moment on the site today. Keep it as the home anchor.
- **The footer typewriter wordmark** (Monuments / Built / To be / Remembered) is a
  genuine identity moment. No reference site has a better closing beat.
- **The marker circle** on work headers is the most ownable visual on the site:
  hand-drawn humanity over a clean grid. None of the three references have an
  equivalent. This should graduate from a work-page detail to THE site-wide motion
  signature.
- **The photography page** (lanes + drag-momentum lightbox) is already an
  experience, not a document. Closest thing on the site to the references' feel.
- **The menu patches + easter eggs** are the personality layer the references
  mostly lack (lusion plays, but generically). Problem: they are buried behind the
  menu button. Most visitors will never find them.
- **Layout discipline** (--wrap/--pad) reads premium and makes everything align.

### monuments v1 (old WP site)
- The voice survives everywhere: SIGHT SOUND AND EMOTION with the red accent is a
  strong, ownable hero statement.
- The red hand-drawn squiggles/arrows family = the seed of the marker language.
- Honest assessment: structurally it is sections stacked on sections. The rebuild
  already beats it on motion, speed, and discipline. Its value now is voice and
  visual DNA, not layout.

### tinywins
- Pinned scenes where scroll composes the moment (fragments land, word cascades).
- The deeper lesson is not the effect, it is the GENEROSITY: they spend an entire
  viewport-scene on one sentence. Confidence = giving copy room.
- Work framed as thinking. Their about page sells judgment, not deliverables.

### exoape
- Restraint + scale: giant two-word statements, half-speed image panels, scenes
  that overlap as they exchange (text exits while next image enters). Closest to
  monuments' dark cinematic palette. The work-page full-screen portals are the
  target for our work landing (DJ confirmed).
- Case studies: kicker labels beside narrow columns, then huge media. Calm and
  certain. The model for our case-study rebuild.

### lusion
- One continuous world: scenes MORPH into each other (3D objects persist and
  transform between sections) rather than cut. The strongest "alive" feeling of
  the three, and the cautionary tale: it costs WebGL complexity we do not need
  for v1.
- Services as physical, slightly imperfect objects (tilted cards). Play layered
  on clean type without breaking cleanliness.

## What's NOT working on v2 (so we fix it in this push)
1. Sections stack discretely; nothing overlaps or hands off. The references never
   hard-cut between scenes.
2. The home is widget-dense (patches, now-dock, reel, rwork, testimonials, CTA).
   References do fewer things bigger. Candidates to merge or cut in v2: testimonial
   band + rwork could become one scene.
3. Work-card hovers: DJ already disliked all 10 .ov-* variants. Portals model
   replaces this problem entirely.
4. Galaxy work-header readability (noted in HANDOFF) - scrim fix or portal
   replacement.
5. Entrance-only reveals everywhere (.fade). Upgrade the load-bearing moments to
   scrubbed motion; keep .fade for body copy.

## The envelope log (pull from these; v1 picks marked ★)
Effort: S = hours, M = a session, L = multi-session.

1. ★ **Marker-as-motion-system** (ours, seeded by v1's squiggles) - S/M
   Scroll-progress draws marker strokes: underlines key words, circles numbers,
   arrows between thoughts, site-wide. SVG stroke-dashoffset driven by scroll.
   Becomes the monuments signature the way confetti is lusion's.
2. ★ **Pinned-scene engine** (tinywins/exoape) - M
   Sticky stage + tall parent; progress composes the scene. Vanilla, no deps.
   First applications: AI page era section, the questions, case-study insight
   moments.
3. ★ **Scene handoffs** (exoape) - S/M
   Next section slides up OVER the pinned one (sheet-over transition). Kills the
   stacked-sections feel site-wide.
4. ★ **Work portals** (exoape /work) - M
   Full-screen project portals for the work landing. Monuments twist: the galaxy
   floating-photo field lives BETWEEN portals as the connective tissue.
5. ★ **Next-project transition** (DJ's explicit ask) - M
   The next project's hero rises over the current page's end and BECOMES the next
   page's header (Astro view transitions + scene-over choreography). Replaces the
   "forced Elementor" feeling with continuity no reference site fully does.
6. **Image-stamp cascade** (tinywins WINS mechanic, made ours) - M
   Scroll duplicates PHOTOGRAPHS in a stepped trail (we are a photo studio; words
   are their version, frames are ours). Hero candidate for the photography page
   or the AI page's "input → filter" beat.
7. **The site that builds itself** (no reference has this) - M/L
   AI page meta-moment: a scene where the page visibly assembles (layout blocks
   snap in, copy types, marker circles draw) as proof-of-work for the offer.
   "This is what we do for you" without saying it.
8. **Cursor loupe on photography** (ours) - M
   A cursor-following magnifier over the lanes. Photographer-brand-native
   interactivity. Desktop only, reduced-motion safe.
9. **Patches escape the menu** (ours + lusion's play) - S
   A few draggable patches live on the contact page (toss physics). The easter-egg
   layer finally gets discovered.
10. **Studio ticker** (extends the now-dock) - S
    A one-line "in the studio this week:" ticker near the footer. Directly serves
    DJ's goal: visitors come back to see what is new. CMS-editable via Keystatic.
11. **Scroll-scrubbed reel** (exoape "work in motion" energy) - L
    Showreel playback position tied to scroll through a pinned stage. Heavy
    (frame-accurate video scrubbing); only after self-hosted MP4 lands.
12. **Continuous-world morphs** (lusion) - L, probably never
    Logged for honesty: the full lusion treatment needs WebGL and fights our
    static-speed posture. Steal the PRINCIPLE (elements persist across scenes)
    via shared marker strokes + view transitions instead.
13. **Per-page footer wordmark lines** - S, needs DJ copy approval
    The typewriter footer says something page-specific (work: a line about the
    craft; AI page: a line about the era). Same mechanic, deeper narrative.
14. **Speed as a feature** - S, ongoing
    The references are gorgeous and HEAVY. We stay instant (static, preloaded,
    100 Lighthouse) and say so on the AI page. For the pitch audience, fast IS
    the wow.

## Suggested v1 set (my recommendation)
(2) pinned-scene engine + (3) scene handoffs as the foundation, then (1) marker
system, (4) portals, (5) next-project transition. That set makes the whole site
feel like one designed experience and covers DJ's explicit asks. (6)-(10) are the
second wave; (7) is the one I would fight for on the AI page.
