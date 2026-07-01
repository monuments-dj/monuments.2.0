# Diagnosis: Why the Current Deploy Feels Flat and All Over the Place

Measured from full-page captures of monuments-2-0.vercel.app, July 1 2026
(tools/snaps/deploy-home, deploy-about, deploy-work; elements.json = computed styles
of every visible element). Not vibes: numbers.

## 1. Typography has no system (the biggest problem)

- **The entire site is Inter.** The brand book (v0.8) specifies Archivo display +
  Space Mono microcopy. Neither is used on the deployed pages. Inter is the default
  font of every SaaS dashboard on earth; it reads "template," not "creative director."
- **Home page uses 29 distinct family/size/weight combinations.** Weights 300, 400,
  500, 600, 700, 900 plus an italic. Display sizes measured: 66, 79, 86, 101, 108,
  112, 115px across pages. No two share a scale relationship. That is why it feels
  "all over the place": it literally is.
- **Thin small text everywhere.** The most common styles on the home page are
  10-13px at weight 300 with wide tracking. At that size, w300 renders weak and
  gray. References do the opposite: tiny type is mono or medium-weight, and confident.
- Section headers alone appear as 30px/w600, 86px/w600, 108px/w900, 66px/w500:
  four different display voices on one page.

**The fix is a locked scale:** 2 families (Archivo + Space Mono per the brand book),
3-4 sizes per page, 2 weights. Obys and Ligthelm show how far that alone goes.

## 2. Alternating sections without a grammar

DJ likes alternation. The current build alternates, but randomly. Home page, in order:
near-black hero, black stats band, WHITE logo grid, black reel section, LIGHT GRAY
project panels in fake macOS windows, NAVY (#1c2733-ish) quote CTA, black footer.
The about page adds a CREAM band. That is five-plus surface colors with no rule for
when a section is dark or light, so each boundary is a jolt instead of a rhythm.

References alternate on a rule: Exo Ape alternates image-dominant vs text-dominant
(not palette); Schneider and Ligthelm hold two colors total and alternate density.
Alternation reads as rhythm only when the palette is constant.

## 3. Massive dead vertical space

The home page is 19,750px tall at 1440w. The "work in motion" reel section captures
as thousands of pixels of empty black with one small centered thumbnail. Scroll-pinned
scenes are good (that matches the REFERENCES.md finding), but pinning must be
scroll-scrubbed composition, not empty document height. Right now the page feels
like walking through empty hallways between three rooms.

## 4. Brand marks conflict

The nav/loader uses the OLD ornate blackletter M; the "Trusted" section shows the
geometric M. Two different logos on one page. The eye+spark system from the brand
book appears nowhere on the deployed home page.

## 5. Copy voice violates the locked rules

- Third person on the about hero ("DJ Ramirez has spent a decade...") vs the locked
  first-person voice.
- Em dashes on the about page ("at the senior level — strategy...", "lasts past the
  launch. — ") violating the no-em-dash hard rule.
- Generic lines the voice doc would kill: "Trusted By The Best", "Let's build
  something great, together." Every reference site with a strong voice would cut these.
- Identity wobble: home hero says "The creative portfolio of DJ Ramirez" while about
  says "A creative agency led by CD DJ Ramirez." Portfolio or agency? Pick the
  hiring-portfolio framing (per the locked positioning) and hold it everywhere.

## 6. Seniority is asserted, not structured

The stats exist (4x, 160M+, Emmy, 2M+, $100K) which is good raw material, but they
are scattered (two different stat bands, home and about, styled differently). There is
no career timeline, no chronological work list, no format labels on projects, no
awards/press block. The references show seniority structurally: Lisovskiy's
reverse-chronological everything-list, Ligthelm's dated awards list, Miranda's stats
block, Thorp's format labels. The raw material is already better than the container.

## 7. UI chrome pileup

Blue circle "menu" chip (a third accent blue, different from the steel-blue stats and
the navy CTA), a green-dot "Fresh Finds" edge dock, macOS window chrome on project
panels. Each is a separate idea. None comes from the brand system. The micro-interaction
budget is being spent on chrome instead of on type and work.

## Summary

The bones are fine (sections exist in a sensible order; the stats and client list are
strong; Lenis is already in the stack). What is missing is ONE system enforced
everywhere: one type scale, one palette rule for alternation, one brand mark, one
voice, and a motion budget spent on a few precise moments instead of spread thin
across chrome. That is exactly what the three mockup directions demonstrate.
