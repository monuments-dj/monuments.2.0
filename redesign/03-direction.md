# Design Direction: The System + Three Mockup Options

The strategy doc. Everything below obeys the locked positioning (memory + CLAUDE.md,
2026-06-30): this site is DJ's hiring portfolio. Audience = agency hiring managers and
brand marketers. Positioning = **Brand Experience / Experiential Creative Director**.
First person. Lead with the number. AI is a tool, not the headline. No em dashes.

## The shared system (all three directions obey this)

**Type: two families, locked scale.**
- Display: **Archivo** (per brand book; stand-in for Sohne/Neue Haas).
- Micro/metadata/labels: **Space Mono**, always 11-12px, weight 400, uppercase, tracked.
- Scale per page: one display size (clamp ~64-120px), one subhead (~28-32px), one body
  (17-18px/1.6), one mono label (11-12px). Nothing else.
- Weights: two per family, max.

**Palette: brand book, enforced.**
Ink #0A0A0A, Paper #F4F4F2, Denim #3E6E94 (the one structural color), Rose #EFA1AD
(punctuation only, never a paragraph). Panel #121212, Line #262626, Dim #8A8A88.
Alternation rule: a page alternates ink/paper (or stays one) by a RULE, never ad hoc.

**One mark:** the geometric eye+spark M. The blackletter M retires.

**Motion language (the budget).** Few, precise, 60fps, all transform/opacity +
IntersectionObserver, prefers-reduced-motion respected:
1. Line-by-line staggered headline reveals (Exo Ape).
2. Parallax on media only; type never drifts.
3. One magnetic element per page (the contact pill, Snellenberg).
4. Hover = the work responds (image reveals on index rows, slight scale on cards).
5. One pinned scroll-scrubbed scene per page maximum, fully composed (no dead height).
6. Interaction micro-copy in Space Mono ("SCROLL", "HOVER", "PLAY REEL").
7. Proof-of-life: live LA clock in the footer, (c) 2026, site version number.

**Seniority, structured (the "where I'm at" ask).**
- The **career timeline** is the spine of About: UX Designer > Agency Creative >
  Creative Director (teams up to 50, on camera) > Monuments (studio + consultancy,
  DJ + Tess). Rendered as a reverse-chronological list with mono years
  (Lisovskiy/Ligthelm pattern), not an infographic.
- The stats block, once, styled once: 4x agency revenue, 160M+ impressions, Emmy,
  50 contractors led.
- Format labels on every project (CAMPAIGN / BRAND FILM / EXPERIENTIAL / SOCIAL).
- Client band, quiet, one row.

**Voice.** First person, plainspoken, short sentences. Kill "Trusted By The Best" and
"Let's build something great, together." Replace with lines in DJ's register, e.g.
hero: "I make brand moments people show up for." CTA: "Tell me what you're building."

---

## The three directions (mockups in /public/redesign/)

### A. MONUMENT (cinematic editorial)
Exo Ape / Immersive Garden lane, wearing the brand book.
Ink-first, full-bleed media, slow cinematic pacing, line-reveal headlines, denim as
the structural color, rose only as the spark. The most "premium production studio."
Risk: needs strong footage to sing. Home + about.

### B. LEDGER (typographic index)
Ligthelm / Obys / Lisovskiy lane. Paper-first, type IS the design. Numbered work
index with hover media reveals, metadata everywhere in mono, the career timeline as
the literal centerpiece of About. Fastest, most confident, most "hire this senior
person." Risk: most restrained, least bells-and-whistles. Home + about.

### C. SIGNAL (kinetic bold)
basement / Unseen lane. Ink + acid confidence: oversized kinetic type, marquee strips,
sticky section headers, louder hovers, the spark motif animated. The most "bells and
whistles," still DOM/CSS-light. Risk: loudness can read junior if not disciplined;
discipline comes from the locked scale. Home + about.

All three share the same copy and the same structural seniority blocks, so the A/B/C
comparison isolates DESIGN, not content. Pick one, or Frankenstein (e.g. B's index +
A's case cadence + C's marquee as a single accent).

## After DJ picks
1. Fold the winner into global.css tokens + Base.astro (Archivo/Space Mono already
   linked per BrandWorld work).
2. Rebuild home + about on the real pages, then work index, then case studies.
3. Sweep: em dashes site-wide, retire blackletter M, unify stats, add timeline.
