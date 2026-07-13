# CSS map — `src/styles/global.css`

Jump-to index so edits go straight to the right ~20 lines instead of grepping a ~1,780-line file. Line ranges drift as the file changes — re-grep the selector if a range looks off. Generated from a full audit 2026-06-06.

| Section | Lines | Controls |
|---|---|---|
| Design tokens (`:root`) | 1–12 | Color palette + `--wrap` (1300px column) + `--pad` (clamp gutter) |
| Reset + base body | 14–30 | `*`/`html`/`body` reset, smooth-scroll, black bg, Inter 300 |
| Lenis smooth scroll | 17–22 | `html.lenis` hooks, overscroll, stopped-state lock |
| Loader (curtain) | 32–102 | `#loader` intro overlay, logo pulse, progress bar, drifting word |
| Nav bar + menu button | 104–155 | `nav`, `.nav-logo` (folds on open), `.nav-menu-btn` |
| Fullscreen menu overlay | 157–213 | `.fullscreen-menu`, `.menu-links` (giant link list) |
| Menu patches (badges) | 215–289 | `.patch-*` draggable badges, wiggle, drag-trail particles |
| Menu footer | 291–313 | `.menu-footer`, contact + socials |
| Home hero | 315–467 | `.hero*` video bg, 3D tilt headline, eyebrow/CTA, loaded reveal |
| Trusted-by + logo grid | 469–508 | `.trusted*`, spinning M, `.logo-grid` invert-on-hover |
| Showreel (parallax) | 510–530 | `.showreel`/`.reel-*` scroll-zoom video + controls |
| **Home work grid `.work` (DEAD)** | 532–602 | Old 3-up grid — replaced by `.rwork-*`. Safe to delete. |
| Testimonials (13 variants) | 604–723 | `.tm-*` data-tm layout switcher + temp switcher |
| Collab / split feature | 725–743 | `.collab*` image + dark text band |
| Bottom CTA band | 745–751 | `.bottom-cta`, `.btn-solid` |
| Footer + wordmark | 753–784 | `footer`, nav grid, giant wordmark, meta/copy/socials |
| Fade util + page stub | 786–814 | `.fade(.on)` reveal util, `.page-stub` placeholder |
| Work index hero | 816–825 | `.work-hero*` eyebrow/title/meta |
| Work index controls | 827–869 | `.wp-controls`, filter / 2-4 col / grid-list toggles |
| Work index masonry grid | 871–911 | `.wp-grid`/`.wp-card*` + `.ov-focus` hover variant |
| Work index list view | 913–934 | `.wp-list`/`.wp-row*` + hover filmstrip |
| Work page shell + galaxy header | 936–973 | `.work-page`, `.galaxy*` floating-photo header, fly-in words |
| Responsive: home + work | 975–1017 | `@media` 860/520 collapses |
| Reduced-motion (global) | 1019–1030 | `prefers-reduced-motion` overrides (`.ph-frame` here is DEAD) |
| Photography page | 1032–1102 | `.pg-*` cover, lanes, lightbox (`.pg-modes` 1066–1071 DEAD) |
| Photography outro | 1089–1093 | `.pg-outro*` closing CTA |
| **Case study `.cs-*` template (mostly DEAD)** | 1104–1171 | Orphan scaffold — only `.cs-meta-item/-k/-v` + `.cs-next*` survive |
| Case study `.bc-*` (Blue Cross variant) | 1173–1217 | `.bc-page`/`.bc-hero`/`.bc-intro`/`.bc-shot`/`.bc-duo`/`.bc-quote`/`.bc-exec`/`.bc-meta` |
| Footer parallax + typewriter | 1219–1229 | `.fw-caret` (used). **`.fw-l` rules DEAD** (JS makes `.fw-text` now) |
| Work index filter animation | 1231–1235 | `.wp-switching`/`.wp-entering` reorder feedback |
| Work cursor badge | 1237–1248 | `.wp-cursor` follow-cursor "View Project" |
| Video play-cursor | 1250–1260 | `.vplay*` custom play cursor |
| Homepage CTA reveal | 1262–1266 | `.cta-reveal` "together" word rise |
| "Now" dock widget | 1268–1289 | `.now-*` Fresh Finds slide-out + Spotify |
| Home "Recent Work" reel `.rwork` | 1291–1360 | Pinned filmstrip, center scale, brick meter, fallback |
| Interior shared system `.ip-` | 1362–1401 | `.ip`/`.band-*`/`.ip-cta`/`.ip-btn` About/Services/Contact |
| **About `.ab-*` (DEAD)** | 1403–1424 | Superseded by `.abx-*`. Safe to delete. |
| Services `.sv-*` | 1426–1449 | Hover-indent service rows, capability pills, focus quote |
| Contact `.ct-*` | 1451–1481 | Two-col, floating-label form |
| Responsive: interior pages | 1483–1493 | `@media` 860 stacking |
| Case study v2 `.cs2-*` (Turnstile) | 1495–1593 | Full image-led template: hero/intro/logo/gallery/cdd/credits/products/next/cta |
| About premium rebuild `.abx-*` | 1595–1693 | Image hero, counters, process steps, team tiles |
| **Work-page header `.wh-*`** | 1695–1740 | Per-project hero: title over image, logo + animated marker circle (`--wh-circle`), lede, all-work |
| **Work intro `.wk-intro/.wk-grid`** | 1742–1752 | 2×2 photo grid + heading/copy on the `--wrap` column |
| **Work gallery `.wk-carousel/.wk-masonry`** | 1754–1777 | Auto-rotating 4-up carousel + 3-col masonry w/ text-block cell |

## Dead code to remove — ✅ ALL REMOVED 2026-06-12 (re-grepped each, build verified). Line ranges above have drifted ~110 lines; re-grep selectors.
- `--warm`, `--gray-bg` tokens (`:root`, lines 4, 7) — referenced nowhere
- `.fw-l` / `.fw-l.on` rules (1221–1222 + reduced-motion 1227) — JS now renders `.fw-text`, not per-letter `.fw-l`
- Home `.work` grid block (532–602 + its 860 entries) — replaced by `.rwork-*`
- Old About `.ab-*` (1403–1424 + 860 entries) — replaced by `.abx-*`
- `.cs-*` scaffold (1104–1171) EXCEPT `.cs-meta-item/-k/-v` and `.cs-next*` (those are used)
- `.menu-close` (177–190) — no such element
- `.pg-modes` temp switcher (1066–1071)
- `.ph-frame img` reduced-motion override (1029)

## Components plan
The work pages are 3 families sharing a tail: `.wh/.wk` (sony-this-moment only), `.bc-*` (blue-cross, flow-state, xperia, clothing-merch), `.cs2-*` (turnstile, flashpoint, waffle). Componentization plan → `src/components/work/` + `src/data/work/` (see chat / templating work). Rollout: scaffold → clothing-merch → bc family → cs2 family → sony-this-moment (locked ref) last.

## ⚠️ Cross-page gotcha: Reveal-mask descenders (added 2026-07-08)
The hero headers (`.hero .t .ln` / `.hero h1 .ln`) and the scroll-in CTAs
(`[data-split] .sl`) reveal each line by wrapping it in `overflow:hidden` and
sliding an inner `<span>` up from `translateY(125%)`. That mask clips the line
box — so at the tight display line-height (.9–.94) any DESCENDER (italic-serif
g/y/p/j, the italic Q tail, the low accent dot on the signature line) gets
SHEARED OFF. All-caps lines have no descenders so the bug hides; the italic
`.serif` last line exposes it. This was clipping nearly every header before
4ea50bd.
RULE when adding/editing any masked header: keep the mask room —
`.ln`/`.sl { overflow:hidden; padding-bottom:.18em; margin-bottom:-.18em }`
(reveals descenders, spacing unchanged) and the inner span at
`transform:translateY(125%)` (clears the taller mask, no pre-animation peek).
Don't reintroduce a bare `overflow:hidden` mask with `translateY(112%)`.
Verify VISUALLY — this is ink overflow, so getBoundingClientRect shows 0px
(rect == mask); only a screenshot reveals the clip. Sweep tooling:
tools/verify-heads.mjs + tools/build-montage.mjs → tools/snaps/verify/.

## ⚠️ Cross-page gotcha: html{overflow-x:clip} kills position:sticky (added 2026-07-11)
Most cut pages carry `body{overflow-x:hidden}` + `html{overflow-x:clip}`. With
html's overflow set, body's overflow STOPS propagating to the viewport, so body
itself becomes the scroll container - and every `position:sticky` inside it
silently never sticks (blank pinned stages, bars that scroll away). Home works
because it never sets html's overflow. The Kit had the combo and its motion lab
pin rendered blank until the html rule was removed there (commit d0310ae).
RULE: a page that pins ANYTHING must not set html{overflow-x:clip}. When the
picked motion language bakes sitewide, normalize all 25 pages that still carry
the combo (they have zero sticky today, so they're dormant, not broken).

## GRAIN v2 (2026-07-11, lives in PageFooter.astro)
Texture is per-surface and ALWAYS below text: light bands get ::before z:-1
inside isolation:isolate; media frames get ::after z:1 with captions lifted z:2.
Tune ONLY --grain-paper / --grain-media in PageFooter. The old fixed .grain
overlay divs are retired via display:none (elements still in 9 pages' HTML).

## ⚠️ Cross-page gotcha: padding SHORTHAND on .wrap co-classed elements (fixed 2026-07-12)
Work pages put .story ON the .wrap element (`class="wrap story"`). `.story{padding:12vh 0}`
came later in the sheet, so the shorthand's `0` nuked .wrap's horizontal gutter on 20 pages:
story kickers/h2s sat at x=0 at viewports ≤ ~1470px (invisible on DJ's wide display, where
.wrap's auto margins still gave ~100px+; glued to the glass on a recruiter's 13" laptop).
Fixed sitewide: any rule on a .wrap element pads VERTICALLY ONLY via longhands
(`padding-top:12vh;padding-bottom:12vh`). Never use the padding shorthand on an element
that shares a class with .wrap - it silently zeroes the gutter var(--pad) owns.
