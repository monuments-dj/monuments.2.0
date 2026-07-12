# TODO - current state (2026-07-12 · Buck the Quo + CWI rebuild SHIPPED)

## 🚀 SESSION 2026-07-12 (part 6 · BTQ + CWI real assets) SHIPPED
Commit 1db81cc, pushed live. Downloaded DJ's Dropbox assets, transcoded with ffmpeg-static,
verified in-browser. Research workflow (47 agents, adversarially verified) sourced the CWI stats.
- **Buck the Quo:** header = his keep-pushing video · above-fold clip strip (5 clips he shot/cut) ·
  outdated Drake Cooper imagery replaced with his own photos · poster-wall = full-screen brand break ·
  killed the ugly I AM/I CAN/I WILL triad · rewrote 'My part' as maker-to-FIELD-MENTOR (his no-college
  path, 18k teens in a summer, camera handoffs, ambassadors) · four-year run.
- **CWI:** REMOVED all director/directed claims (he's writer + casting, with Tess) · replaced the
  miscredited YouTube films with 6 self-hosted program spots (Fire/Public Safety/Arts+Humanities/
  Technology/Business Admin/Mining) · added 'cut for every screen' demo (16:9/1:1/9:16) + a catalog ·
  editing guide shown early · killed the giant hero asterisk + the contact sheet · swapped Against's
  self-reported 4.4/5.0/98 for CWI's OWN cited numbers (9 straight semesters, +6.8%, 31,000+; Idaho
  State Board 2025) + Idaho's 43.6% go-on rate. Verified stats: tools/cwi-stats-verified.md.

## 🔴 NEEDS YOU — from the BTQ/CWI rebuild (confirm these)
1. **CWI credit** is now **Writer + Casting** (with Tess), all directing removed. Confirm the exact
   wording ("Writer · the program spots" / "Casting · DJ Ramirez + Tess").
2. **CWI stats**: I pulled Against's 4.4/5.0/98 (those are the agency's self-reported claims, not
   yours/CWI-official) and used CWI's real cited growth instead. OK to keep that framing?
3. **CWI program spots**: I featured 6. The 5.3GB folder has more (BTS, SCOUT, other rounds). Tell me
   the "best ones to run with" and I'll swap/add. RD 1-4 + Superbowl cuts can go in the catalog.
4. **CWI hero** uses your FIRE spot (has baked-in program text, dimmed). Want a clean b-roll clip with
   no text instead? I can pull from the BTS/SCOUT footage.
5. **BTQ captions**: I captioned your new photos honestly from the images (helmet, backpack, hat, socks,
   games, portrait). Fix any that are off. Old Drake Cooper images remain in the repo, unreferenced.
6. **Real-browser check**: both pages are video-heavy now (hero loops, clip strip, program spots) — give
   them a pass on your machine + the live deploy.

---

# TODO - current state (2026-07-12 · Kit batch 5 SHIPPED)

## 🚀 SESSION 2026-07-12 (part 5 · Kit build-out + adorama fix) SHIPPED
Commit ecf0fd6, pushed live. All verified with Playwright at desktop widths.
- **Adorama overlap FIXED for real** → the poster+two-stills split is now a shared,
  edit-once `src/styles/filmsplit.css` (`.filmsplit`/`.filmstack`, `#el-filmsplit`).
  Root cause was the CSS-grid min-height:auto blowout; guarded now. Verified NO overlap
  1024→1440 (clean 14px gap). Imported by adorama + the Kit (ELEMENT 23).
- **01B annotations** now look hand-drawn (loose overshoot oval + wavy double-underline,
  thicker strokes) and **draw-on → hold → reset on a 4s infinite loop.**
- **New Kit elements, each with a unique `#el-` id:** 24 header slider (uniform logo +
  what-I-did + blurb, auto-advance, inline **Edit** + JSON **Export**, real seeded copy) ·
  25 count-up numbers + 3 callout treatments · 26 gallery B (masonry → lightbox) ·
  27 kickers + CTA (3 variations) · 28 hover-blurb card · 29 varied-size recruiter-ordered
  work index. Every existing element also got an `id="el-NN"` anchor.
- **Instagram logo** on SocialWall (source badge + per-comment mark, `source` prop).

## 🔴 NEEDS YOU — full sweep (2026-07-12, flagged loudly per your ask)
DECISIONS (your call):
1. **Headers:** on the Kit, pick the header direction — A (with blurb) / B (no blurb),
   oval vs double-underline, AND whether work headers become the SLIDER (ELEMENT 24) or
   stay static per page. Approve/remap the 01C service colors. Then I roll it sitewide.
2. **Gallery per page:** contact sheet (15) vs masonry+lightbox (26) — you pick per page.
3. **Work index:** keep the grid/index, or switch to the new varied-size view (29)?
   You said the index feels off.
4. **Kickers + CTA (27):** pick/edit the final variations to roll sitewide.
5. **Count-up numbers (25):** which REAL stats to wire into each page (specimen now).
6. Type/font pick · B/W confirm (→ bake + delete switcher) · 10 testimonial quotes.
7. **VERIFY the "3.4M+ views" Adorama ledger stat** (same unverified class as the killed
   160M+ and the 3.6M question). Reconcile Est. MMXXII vs 2016.
8. Grain louder or leave · Photography OS9 page (reskin/leave/retire) · rolodex geography
   copy + map pin photo fixes · podcast 30K vs 100K · MSI which-3-careers.
BLOCKED (need a link/asset from you): AOV merch folder · crew photo original · remaining
34 MSI BTS frames · other 7 To-the-Point episodes · fresh IG links (sony-this-moment +
clothing-merch).
REAL-BROWSER CHECK: the looping hand-drawn 01B annotations + the adorama overlap fix on
the live deploy at your widths.

---

# TODO - current state (2026-07-11, LATE NIGHT · autonomous batch SHIPPED)

## 📞 DJ'S OUTREACH LIST (2026-07-11) - get the real quotes
Theater is the picked treatment; every slide holds a "quote incoming" chip under the
real name until DJ collects the words. NO placeholder copy ever again (guard comment
lives in Testimonials.astro). Reach out to:
1. Prince McClinton · CEO, Art of Visuals · IG linked: instagram.com/artofvisuals
   (his personal handle unverified - swap in when DJ confirms; LinkedIn: /in/princemcclinton)
2. Krizia Vega · Director, Native Saints · IG linked: instagram.com/kriziavega
3. Jennie MYERS (site spells Myers, not Meyers) · CEO, Against · linked: goagainst.com
4. Nathan Zanders · CEO, MOX · link TBD
5. Jake Goble · CEO, Rad Animal + Creative Hotline · collaborator · link TBD
6. Alex Stevens · CEO, Bluepixel · link TBD
7. Mitch Khun · Creative Director, Stoltz Marketing Group · link TBD
8. Tommy Lundberg · Photographer + Art Director, collaborator · link TBD
9. Andrea Cenon · Creative Director, Day One Agency · link TBD
10. Tess · Project Manager, Monuments (internal - back on the roster per DJ 2026-07-11)
When a quote lands: paste into `q` for that person in Testimonials.astro (serif can
return to the quote face then - sans is the interim per DJ).

## 🚀 SESSION 2026-07-12 (part 3 · MSI/Xperia/header/centering batch) SHIPPED
Commits 0164e54 → 008ba5a. Verified, motioncheck-adjacent, pushed live.
- **Stat-band centering MISS fixed:** last sweep only globbed work/*. The Kit's
  ELEMENT 02 band + dead home/about statrow CSS were missed. Swept ALL pages now.
  (MSI + 17 work bands were already centered live in 063fad4 — DJ was viewing a
  STALE dev server / cached tab; confirmed center in the deployed HTML.)
- **Switcher visibility fixed:** DJ had dismissed the type/accent pill once and
  its ✕ persisted 'off' in localStorage forever. On /template it now ALWAYS shows
  (clears the flag on load; ✕ is session-only). Added a '\ The controls' callout
  under the Kit intro pointing to the pill (click = pulse) + motion lab (Element 13).
- **MSI cutdowns** built from DJ's share link: ultra-wide 1928x558 Times Square
  boards (the 'weird sizing') + standard 16:9 cuts, self-hosted, tap for sound.
- **Kit header 01B upgraded:** real client logo, annotation DRAWS ON + carries a
  service COLOR; A=with blurb+oval, B=no blurb+double-underline; ELEMENT 01C =
  proposed service→color legend (11 swatches). Rolls to work pages once DJ picks.
- **Xperia → one account page:** /work/sony-xperia (old slug 301s). 'Sony Xperia',
  3-year account, Summer is a chapter, 3 films kept.

## 🚀 SESSION 2026-07-12 (part 4 · Blue Cross + Sony credits + blend + centering) SHIPPED
Commits bf9f98e → 32f021b. All verified, pushed live.
- **Blue Cross overhaul:** firefighter (BC-02) = hero; contact-sheet KILLED → clean
  masonry (27 of 28 real images); popouts bigger (BC-13 checkers, BC-24 grandpa,
  BC-06 welder = the 'garbage photo' replacement); exact brief copy verbatim; the
  4-YEARS-OF-USAGE story highlighted in a real stat band (2020→2024, licensing
  extended, 'cast, not stock'); role corrected (CD + talent direction + casting +
  image selection + edit support); MC-2020-04.
- **Sony This Moment credits:** DJ directed the photoshoot (briefs, on-set), Claire
  shot the stills; Daniel Malikyar removed from body + caption, CREDITS-ONLY as
  'Film Director'.
- **06 BLEND motion** (drift + lock) = DJ's pick, now the motion-lab default ✦.
- **Centering miss fixed** (Kit ELEMENT 02 + dead home/about) — sweep now hits all pages.
- **Switcher restored** on the Kit (was stuck 'off' in localStorage) + controls callout.
- Dropped the colliding trailing-slash Xperia redirect (no-slash still works).

## 🔴 NEEDS YOU — DECISIONS (don't let these get buried)
1. ✅ RESOLVED 2026-07-12: firefighter stays BLUE CROSS ONLY. Home lockup + Work reel
   header untouched (DJ chose 'Blue Cross only' via decision prompt).
2. **Kit header 01B:** pick A (with blurb) vs B (no blurb) · oval vs double-underline ·
   approve/remap ELEMENT 01C service colors → then I roll 01B to every work page.
3. Type pick / B-W confirm / testimonial quotes still open.

## 🟡 DECIDE (Kit, 2026-07-12, earlier)
- Header 01B: pick A (with blurb) or B (no blurb) · pick oval vs double-underline ·
  approve/remap the ELEMENT 01C service colors → then I roll 01B to every work page.
- Type pick / B-W / testimonial treatment / motion language 01-05 still open (see below).

## 🚀 SESSION 2026-07-12 (part 2 · Turnstile + Flow State batch) SHIPPED
Commits 063fad4 (Flow State) + c0e1996 (Turnstile/Kit). All verified 1440+390, motioncheck ALL PASS.
- **Flow State fixed hard:** BTS un-squished (root cause = missing width/height attrs
  starved the masonry packer; injected real dims on all 24 tags). Added the MISSED intro
  copy verbatim ("Sony partnered with AOV...trusting the process...moments of pause").
  IG social proof bumped to the TOP: 3 real @sonyelectronics posts (fs-20/13/19) w/ real
  likes (31,767/39,061/61,372) as receipt cards on ink → breaks the "one big white section."
  Credit paragraph = DJ's EXACT wording ("...showcased in their best light"), CENTERED.
  Added to home reel ("Built to find your flow").
- **Stat bands CENTERED across all 17 work pages** + hire page Emmy/Rockys/4x band.
- **Turnstile:** Concept/Design/Deliver is now an auto-cycling word switcher with the
  brand-deck copy VERBATIM (was paraphrased + missing Design/Deliver + Neumann/Shure).
  Product gallery rebuilt to the clean white 3-wide reference look (contact-sheet chrome +
  "Check check" stamp gone); vertical "MIC CHECK · ONE TWO" in the left gutter.
  Kit gains ELEMENT 22 · WORD SWITCHER (reusable pattern).

## ⛔ NEEDS DJ / VERIFY (2026-07-12)
- **VERIFY the Flow State credit copy** is right (DJ asked to confirm): it's on the page
  verbatim + centered now. His exact text is live.
- **MIC CHECK text:** built as VERTICAL gutter text (matches what's visible in the ref).
  DJ said "spinning" — confirm if he wants it literally rotating/animated vs. vertical.
- **Turnstile deck copy:** answer to "did you get all this info on there?" was NO before
  (paraphrased, no Design/Deliver, no Neumann/Shure); now YES, verbatim in the switcher.

## ⛔ BLOCKED ON DJ (2026-07-12 drop)
- MSI cutdowns: the link was dropbox.com/home/... (DJ's private view, not shareable).
  Need an /scl/fo/ SHARE link to: Art Of Visuals/MSI/Creative By Design/FINALS/Cutdowns
  → then the 60s hero + the weird Times Square sizings get their formats section on
  /work/msi-creative-by-design (slot reserved, see page comment).
- AOV merch: DJ asked for a merch slideshow ("rename them to AOV merch") but NO merch
  files/link arrived in the message. Not in the capabilities PDF, not in the Xperia zip.
  Need the folder link.
- MSI page: which THREE creative careers were highlighted? (band holds problem/solve/
  multiplier until then - careers deliberately not invented)
- Xperia: DECISION - one "Sony Xperia" account page (3 yrs of launches, Summer becomes
  a chapter) vs a second page. Recommendation on file: ONE page. On DJ's word the route
  renames + copy recuts.
- Podcast listeners: DJ's card says 30K monthly, the outbound capabilities doc says 100K.
  Site uses 30K (his own card). Upgrade on his word.

## 🏗️ NEW CASE WORK TO ADD (DJ 2026-07-11)
- [ ] Boise Public Schools project (with Stoltz Marketing Group) - needs CASE-INTAKE.md sheet
- [ ] Lumira Healthcare - needs CASE-INTAKE.md sheet
- [ ] Refine /work/art-of-visuals further (rework pass 1 = book of business; pass 2
      2026-07-12 = DJ's content drop LANDED: header loop (:04-:20 of QZEZIVB5AOE,
      self-hosted + parallax), AOV: To the Point trio (3 of 10 verticals, reelbox),
      MSI LA BTS sheet (13 of 47 selects - rest in the Dropbox if more wanted),
      /snips/art-of-visuals.mp4 on home card + /work row + grid card)
      STILL OPEN: the other 7 To the Point episodes if DJ wants the full season;
      remaining 34 MSI frames on his word

## 🚀 THIS SESSION part 3 (2026-07-11 night · DJ's 7-item batch, all pushed + live)
Commits da6df23→3382fb2, each verified individually (build + resting-offset shots):
- **OG share card + social meta.** public/og/card.jpg (lockup on ink, NFO line);
  tools/add-og.mjs stamps description/canonical/og/twitter into all 30 own-head pages
  (idempotent markers; RE-RUN WITH NEW SITE AFTER THE DOMAIN SWAP); Base.astro covers
  lab. 6 pages' older hand-written og meta deduped, their richer copy adopted.
- **Lazy-load pass:** 66 below-fold imgs → loading=lazy (tools/lazy-pass.mjs; heroes/
  fetchpriority stay eager); NEW tools/restshots.mjs = resting-offset verifier.
- **World map v2 (About):** grey land on PAPER, Antarctica dropped + viewBox cropped
  ~73N..56S (twisted polar shapes gone), Paris+Berlin pins, hover tip = best-guess
  photo(s) per pin from the archive. Fixed: ring pulse now scales around its pin
  (transform-box), injected tip imgs needed :global (Astro scoping), .wm-tip[hidden]
  (author display beat the UA rule → stray black blob). tools/mapcheck.mjs verifies.
- **Capability proof cards play their snips** (5 film crafts, same pvid recipe; B/W at
  rest, color on hover); motioncheck now takes a base URL + covers /capabilities: ALL PASS.
- **MOTION LAB = ELEMENT 13 on /template.** Homepage elements (thesis title, stats, duo,
  CTA) under FIVE selectable languages: 01 Settle · 02 Rise · 03 Drift · 04 Lock (pins
  240svh, scroll assembles) · 05 Snap. Sticky picker + replay, persists (mnmt-mlab).
  THE TITLE ENTRANCES DJ HATES ARE THE CENTERPIECE - his pick becomes the sitewide
  grammar (bake = separate pass). ⚠️ Found+fixed on Kit: html{overflow-x:clip} silently
  kills position:sticky (see CSS-MAP gotcha); 25 pages still carry the dormant combo -
  normalize when the language bakes.
- **GRAIN v2 (PageFooter, sitewide):** old fixed .grain overlay RETIRED (painted over
  type). Light bands = moving multiply grain BELOW text (isolation + ::before z:-1);
  media frames = stronger overlay film grain under captions. Tune --grain-paper (.10) /
  --grain-media (.13) only - DJ's "grain louder?" decision is now those two numbers.
- **Media tags:** content/media-tags.json = all 100 archive + 16 giving frames tagged
  from a real vision pass (location guesses marked '?'); tools/tag-media.mjs (mdls-based,
  zero-dep) adds shoot-date/camera meta + clusters shoots by day + lists untagged.
  Run it on every new image drop. Web copies kept DATE+CAMERA, GPS is stripped.
NEEDS DJ'S REAL BROWSER (the standing rule): motion lab all 5 languages (esp. 04 Lock
scrub feel + sticky bar), map hover tips, grain visibility at his screen brightness,
proof-card snips autoplay.
DECISION ADDED TO THE STACK: motion language pick 01-05 on /template (then I bake it
sitewide + normalize the overflow combo + retire the lab picker).

## 🚀 Session part 2 (2026-07-11 afternoon/evening · the live-feedback marathon)
SHIPPED after the 13-item morning batch (each verified + pushed individually; prod = monuments-2-0.vercel.app):
- **Credits truth pass, CLOSED.** DJ corrected all 18 projects' roles once; every surface
  now agrees (case pages, /work tags, home cards, hire links). `tools/credits-audit.mjs`
  generates CREDITS-AUDIT.md and auto-flags mismatches - currently ZERO. New discipline
  in the vocabulary: `edit` (Editing + animation) - donut-zumiez wears it alone.
- **Capabilities page rebuilt hard:** hero sub = page summary ("Scrappy by nature, nothing
  behind the curtain...") + "Never · gear talk or jargon"; refusals recut 9→7 in hiring
  order (scrappy opens); three doors → flat "What I do" → then re-thought as a 3-col
  PROOF-CARD GRID (case image always visible, whole card links to the case); kit list
  has per-tool context notes + Figma/Photoshop + Capture One/Lightroom/Darkroom row;
  NEW ROLODEX section ("I've got a guy for that.", 27 flipping index cards incl. DJ's
  real ones: pilot, pet wrangler, cinema lens architect, gang consultant, 3D bling,
  grill maker, big game tracker, fire dancers, goat shepherd Dubai, sandboarding Jordan,
  motorcycle builder Portugal); Tess production note dead.
- **Home:** Built-to-X reel flipped to PAPER; hero = DJ's REAL PNG lockup off monuments.cc
  at measured geometry (x305 y213 w848 @1440, pixel-identical; the old headline was never
  live type); hero 100svh; PLAY reel = original scrub with retimed wake-ups (zoom starts on
  arrival, words are arrival-only flourish, lock = 55vw muted AUTOPLAYING self-hosted reel,
  ride ends ~90vw+ filling the space, words at 3.5vw, "Showreel" caption); reel MODAL fixed
  (YT-boots-hidden tiny-video bug + #reelMount collapse); first-paint hero cover fixed
  (hero-media img had no sizing); card snips AUTOPLAY on scroll (no hover gate).
- **About:** receipts rewritten per DJ + 2 new rows (Leading with passion / Cause based);
  room rows 02+03 (giving-a-shit / span-decades); rabbits band centered+darker+half-height;
  hardcoded pink #b96a77 killed sitewide (4 spots); "silent" tag dead; THE LONG VERSION
  (DJ's locked piece) added after receipts; WORLD MAP component (Natural Earth 110m land,
  exact equirectangular pin math, 20 pins, hover labels; generator: tools/make-worldmap.mjs;
  photo-per-pin slot ready); crew img overscan 124→108 (ONLY copy is 1400px - original owed).
- **Sitewide:** spinning rays emblems KILLED on every CTA + capabilities sun watermark
  (DJ wants the simple kicker/headline/talk grammar); TYPE-GUARD fix - headlines only
  declared weight and inherited body family, so display fonts NEVER landed (why the
  switcher looked dead); switcher now lives ONLY on /template (The Kit) - picks persist
  sitewide via localStorage; testimonials = 4 live treatments behind a section picker
  (wall/theater/roster/crawl); menu numbering 01 Home → 08 Contact.
- **Docs/infra:** CASE-INTAKE.md (one sheet per campaign feeds every surface);
  MOTION.md (the parallax language: drift · window reveal · pin+scrub + the dwell rule);
  CLAUDE.md gained the ⛔ repeat-corrections block (test at resting offsets · fix the
  class not the instance · his words = the scope).
- **Grain investigated on DJ's challenge:** never touched, on all 9 pages since the swap,
  verified painting via pixel-diff. Reads quieter because surfaces changed under it.
  Offer open: bump 0.11→0.16 ink / 0.09→0.13 paper on his word.

WAITING ON DJ (the decision stack):
1. TYPE pick 01-08 on /template (the switcher actually switches now - GRIT=Anton is the
   loud test) - or call for the paid-font round (PP Neue Montreal / Söhne / Suisse).
2. B/W confirm → bake tokens, delete switcher + Kit menu line.
3. ✅ DECIDED 2026-07-11: THEATER. Baked; picker + wall/roster/crawl deleted. Quotes
   render SANS until copy locks (serif returns then). Lorem KILLED sitewide - see the
   ⛔ block rule 4: zero placeholder copy, ever.
4. Real quotes for the NINE names → see "DJ'S OUTREACH LIST" block at the top.
5. Crew photo ORIGINAL → drop into ~/Monuments-Social/bts-library/ (web copy is 1400px, soft).
6. Photography OS9 page: re-skin to the cut / leave as wildcard / retire (analysis given).
7. Grain: louder or leave.
8. Standing verify list: 3.6M+ impressions stat · AOV real reel · photo categorization ·
   red kickers · IG links (ac-boise, xm5) · Est. MMXXII vs opened-2016 · rolodex geography
   copy (Jordan/Dubai exceed the stated map) · map pin photos.

NEXT (Claude, no DJ input needed): OG share image (1200x630) · Lighthouse pass (71 imgs
still eager) · photo-bucket proposal (vision pass over the 100 frames) · optional: snips
on the capability proof cards.

## Session part 1 (2026-07-11 morning · DJ's feedback batch, 13 items)
SHIPPED (all verified 1440+390, bw-sweep/motioncheck/packcheck clean, builds):
- **Home hero = the old-site grammar.** Staggered SIGHT/SOUND/AND/EMOTION on their own axes
  (AND one step smaller, per the reference), descriptor tucked beside EMOTION, bottom-left
  kicker + thesis copy + "Let's talk ↗", bottom-right "See the work ↗", play/sound pills
  center. NFO block retired from the hero (data lives in ticker + About). Tilt + parallax kept.
- **Home order per DJ:** culture-is-talking line → the Built-to-X reel → contact sheet.
  Tile marquee grew to 19 tiles: +4 verified stat tiles (Emmy · 18K+ · 2→30+ · Sony ×4/Adorama ×3)
  +4 photos.
- **PLAY reel.: window-reveal experiment tried, then REVERTED same day per DJ** ("u lost
  the original vibe") - the original 300svh pin+scrub is back byte-identical and is now
  marked locked in the code. The parallax language lives in **MOTION.md** (3 moves: drift ·
  window reveal · pin+scrub); window reveal stays in the kit, currently used nowhere.
- **Work hero actually centered** (the wrap was hugging content inside the flex hero and
  re-centering as the typewriter grew - now width:100% + one text-align axis) and the
  typewriter **cycles 4 of DJ's own lines** (problem-solving · problem-defined · tools/taste ·
  culture-is-talking).
- **Photography hero cut 78→62svh** (desk stage 500→430-500px); archive arrives sooner.
- **Menu = hiring order + Home link:** 01 Home · 02 Work · 03 About · 04 Capabilities · 05 AI ·
  06 Photography · 07 Giving · 08 Contact; overlay now fits 8 rows (svh-capped word size,
  overflow-y backstop) - the kit/email pill collision is gone.
- **Capabilities:** hero clamp 9.4vw/138 → 6.2vw/92 ("so fucking huge" fixed); refusals
  redesigned from scattered mono to a numbered 01-09 manifesto ledger (rule-separated rows).
- **Contact:** h1 down to 5.8vw/84; address corrected to **6180 Aldama Street, LA 90042**;
  the wireframe M does a continuous 360 rotateY (11s, reduced-motion off).
- **About crew rewritten verbatim to DJ's copy** ("Less agency, more rock and roll." + the
  two paragraphs: decade crew/Tess/2-to-30 + Sony×4/Adorama×3/encore line).
- **ai.astro:** "Money still can't buy taste." → **"Tools don't buy taste."**
- **Switcher pill unblocked:** raised to bottom 86px (DJ's dock was covering it) + drag grip
  (⠿, position persists per session). **Type round 2 added: 06 GRIT (Anton condensed poster
  caps - the old-site hero DNA) · 07 CLSH (Clash Display/General Sans/Sentient) · 08 SPCE
  (Space Grotesk/Inter)** - DJ called 01-05 "still bullshit," so these are three new lanes.

WAITING ON DJ: type pick from 01-08 (or kill list) · B/W confirm → bake + delete switcher +
Kit menu line · real testimonial quotes · red kickers stay/go · real-browser motion pass
(hero stagger, window reveal, contact M spin, quote cycle) · 3.6M+ ticker stat still unverified.

## Previous session (2026-07-10 · snip pass + LAUNCH A leftovers)
SHIPPED:
- **Snip pass COMPLETE.** The six remaining static posters loop their own footage (adorama
  Beat Machine, CWI Engineering/AI/Nursing, donut Croy + The cut) **plus the CWI main spot**
  (missed by the earlier passes). Recipe: yt-dlp (current standalone, old pip build hit
  YouTube's PO-token wall) + ffmpeg-static, 960x540 crf26 muted, 0.4-0.9MB, preload=none.
  Windows picked frame-by-frame off contact sheets: text-free, no endcards, no shop-now
  supers; Engineering deliberately ends on the complete "Let's Get Started" lockup.
  motioncheck: ALL PASS (every poster on every case page plays itself, pauses off-screen).
- **Home cards: proof survives touch.** Persistent `.rc-proof` line (role · headline stat)
  on every reel card face; hover panel unchanged as desktop bonus. Verified 1440 + 390.
- **Photography CTA.** Kit ELEMENT 11 band closes the archive (locked copy, → /contact).
- **On Camera /work row** aligned to its own page: 2026 + 12 tapes (was 2023 + 11).
- **Tess clause** confirmed already shipped 07-07 (4b3d182); LAUNCH checkbox closed.
- Checks run: motioncheck + bw-sweep + packcheck all clean (bw-sweep pink:1/page = the TEMP
  switcher pill's own rose swatch; home text:N = hover-panel children behind the detector's
  parent-opacity blind spot, pre-existing).
STILL DJ'S (unchanged): font pairing pick · B/W confirm (bake + delete switcher + Kit menu
line) · testimonial quotes + roles · red kickers stay/go · real-browser motion pass · 3 API-
walled xperia reels exist? · real AOV reel.

## 🚀 PREVIOUS SESSION (2026-07-08)
SHIPPED + PUSHED:
- **Killed the wrong 160M+ Adorama figure (8b81e0a)** - DJ flagged it; purged sitewide
  (stat band, statbeat break, home reel, /work row, meta, /lab). Statbeat is now a single
  #CreateNoMatterWhat beat; top band 3.4M+/113K+/50K+.
- **Full-site launch-readiness AUDIT (26 pages, 154 findings)** → `AUDIT-2026-07-08.md` +
  folded into LAUNCH.md (sections A/B/H). Fixed same-day: clothing-merch parallax CRASH
  (hero `<video>` but script queried `.hero>img`, threw on scroll → froze all motion),
  CWI "stills to follow" placeholder, Contact phantom-form line, Rockies→Rockys,
  sony-xm5 title case, on-camera grammar. **NEW must-verify: "3.6M+ impressions on a single
  launch"** (home ticker + About receipt + Xperia) - same class as the wrong 160M+.
  Big open buckets from the audit: I-voice slips (Flashpoint/Know Vape 3rd-person, etc.),
  per-page date/file-code + role-title inconsistencies, duplicated pull-quotes = body copy
  (donut/dw-drums/sony-this-moment), AOV flagship stand-in reel, photography fake taxonomy.
- **Descender clip fixed SITE-WIDE (4ea50bd).** The `.ln` hero reveal + `.sl` scroll-CTA
  reveal both mask each line in `overflow:hidden`; at the tight display line-height (.9-.94)
  that sheared off the last line's italic-serif descenders (g/y/p, the italic Q tail) and the
  low accent dot. All-caps lines hid it; the serif signature line ("you'll go.", "people.",
  "remembering.") exposed it. Fix = `padding-bottom:.18em;margin-bottom:-.18em` on every
  `.ln`/`.sl` mask (reveals descenders, spacing unchanged) + reveal offset `112%→125%` (hidden
  line clears the taller mask, no pre-animation peek). Applied to all 26 hero headers + 5
  CTAs; verified visually on every one (see tools/snaps/verify/MONTAGE-*.png). **This is now a
  standing rule - see CSS-MAP.md "Reveal-mask descenders" before adding any new masked header.**
- **Adorama AOV pass:** all 38 gallery images visible, distributed into 3 contact-sheet runs
  broken by a pull-quote + stat beat; captions are now sequential FR-01…FR-29 frame numbers
  (the old Studio/Garage/Stage labels were assigned by run position and mislabeled the photos);
  "behind the film" reframed to "The cutdowns" (product cutdowns by brand, not BTS - only the
  Beat Machine spot i_hGj3rKH7k is wired). Sony This Moment / Flow State stats confirmed present
  from v3; NEW SocialWall.astro "beyond the numbers" audience-comment wall on sony-flow-state.
- **Accent = pink, themeable.** Killed the cobalt accent → rose site-wide; `--struct` +
  `--on-rgb` drive band bg + on-band text. TEMP accent switcher lives in PageFooter.astro
  (fixed bottom-center pill, rose/cobalt/red/ink, localStorage `mnmt-accent`). ⚠️ **DJ still
  owes an accent pick - then bake the winner into `:root` and DELETE the switcher** (flagged in
  LAUNCH.md).
- **Footer → PageFooter.astro** shared component (per-page sign-off text via `tag` prop) - stops
  the inline-footer drift noted last session. Rides on every page.
- Home reel: EMPTY lead-in slot so the first project starts already in the hovered/active
  position; formatting resynced; flush ends.
- About: NEW creed (4 beliefs); "The receipts" rebuilt numbers-first (the printed-slip gimmick
  was scrapped - DJ: "not it"); "In the room" → ledger rows.
- Services → **Capabilities** (collapsed + renamed; `/services`→`/capabilities` redirect in
  astro.config); refusals opener + 9 refusal lines.
- **/ai** page built around DJ's "AI is a tool, not a solution… won't buy you taste; I directed
  people before I directed AI." (copy is my draft of his concept - may want his pass.)
- Dual-mandate grade (wf, 13 agents) → LAUNCH.md checklist + PHILOSOPHY.md.

AWAITING DJ (unblocks queued work):
- **Accent pick** from the switcher → bake in + remove switcher.
- **AOV reel link** (unlocks the flagship reel + confirms 4 homepage IG swaps).
- Other **Adorama brand-cutdown video IDs** (only Beat Machine wired).
- Green-light details for **/hire** page (APPROVED, not built yet).

QUEUE (approved / requested, not built):
- /hire page · OG homepage "sight, sound and emotion" header · move ReelReveal play-button
  reveal onto homepage · /work thumbnail redesign + blurbs + "case study" label · photo
  categorization (DJ giving folders) · Home hover-proof mobile fix · recruiter route on
  Home/Contact · optional: apply the gallery→quote→gallery→stat template to Buck the Quo /
  Know Vape.
- Minor spotted-in-passing: /capabilities hero copy "In to serve the work," reads slightly
  oddly - confirm intended vs "Here to serve the work,".

## 🚀 COPY HANDOFF v3 APPLIED SITE-WIDE (2026-07-07, wf_d632cf34)
DJ edited copy in a Google Doc (tools/copy-new.md is the saved handoff; tools/copy-export.md
is the pre-edit baseline; tools/copy-parts/ per-page). ALL APPLIED + PUSHED:
- HOME: taste-thesis hero ("The tools are / everywhere. / Taste isn't.✳"), title/NFO =
  Creative Director · Integrated campaigns · film · stills · experiential · Est. MMXXII,
  118.24° W fix, What I Do rewrite ("Culture is talking."), "Built to be remembered.",
  reel cards resynced (Buck the Quo = ROCKYS not Emmy; Adorama = "Inside a 160M+ campaign"),
  CTA "worth remembering."
- ABOUT: hero sub CUT, Short Version rewritten (h2 cut, lead para), career timeline
  RELOCATED to /lab/career-timeline (Era 02 = "Best of Show at the Rockys ✳"), NEW
  "The receipts" cobalt ledger (8 stats) + "In the room" 2x2. CTA stays "Tell me what
  you're building."
- SERVICES: "In to serve the work, not steal the show." hero; offers 5→8 (Integrated
  Campaigns rename + NEW Brand Building/Experiential/Photography/AI Systems; End-to-End
  Production folded into closing line "Production comes standard... Tess keeps it on the
  rails."); CWI in marquee.
- WORK: "The work." hero, 30-commercials sub (⚠️ TODO confirm count), 18 projects,
  CWI archive row.
- NEW /work/cwi-lets-get-started (typographic spark hero, film/stills PLACEHOLDERS),
  chained Buck the Quo → CWI → Xperia Summer.
- Ticker: "Emmy-winning Know Vape campaign" + "3.6M+ impressions on a single launch".
LOCKED (from doc): I-voice; Emmy=Know Vape only, BTQ=Rockys; Est. MMXXII; CTA "worth
remembering." site-wide (About/Contact keep theirs); stat rule "only what DJ would say in
an interview"; AI = service 08 + own page (copy PENDING, DO NOT BUILD YET).
AWAITING DJ (his PENDING list): AI page copy; Photography/Giving/Contact pass; 17-case-study
stat audit (On Camera podcast 300K → 16-30K monthly at peak; Know Vape + Flashpoint
third-person→I); CWI assets (role confirm, hero film, stills, 5-yr contract mention).

## ALSO THIS SESSION (2026-07-05/06)
- PHOTOGRAPHY: early-Mac OS9 desktop hero. Self-hosted ChicagoFLF (public/fonts/), Chicago
  headline (pixel/serif splice killed), classic Mac menu bar (Apple logo + nav + LA clock,
  ≥681px), pinstripe title bars, draggable windows (BTS movie = MOV10150 trimmed :09 muted,
  Gear list, Stickies note typing CYCLING quotes: Cartier-Bresson then Ansel Adams), Mac
  colons path, "DJ's Photos". Visual-first pass; DJ liked it. MORE QUOTES WELCOME (add to
  QUOTES array in photography.astro).
- HOME reel enhanced: cards 48vw/44svh, hover achievements panel (data-role/data-stats),
  snippet plays on hover; ticker "2 to 30+ creatives led per team"; tiles "rock & roll" +
  "every great story is a human story".
- ABOUT "Directing is the job" photo → muted cycling viewer of DJ leading
  (/about/lead/ld-01..03, confirmed DJ in 01+02; 03 = his set, wide - DJ may swap).
- FOOTER normalized site-wide (contact/photography/dw-drums Pirata → small mono; about +
  index space-between → centered baseline; photography descriptor shortened). ⚠️ Footer is
  still inline-per-page; consider a shared component to stop the drift.
- IG EMBEDS ROOT-CAUSED: bars = OLD /tv/ IGTV permalinks (bar out even bare) + my demo grid
  squeezed to 326px. sony-this-moment has 2 dead-format /tv/ links; clothing-merch has 2
  /reel/ links (Cl9hIJ-vS-b looks DEAD). AWAITING DJ: fresh post/reel links for both pages.
  /lab/ig-embed = diagnostic page (its "unfixable" note is now WRONG - retire or fix).
- Copy pipeline: Google Doc export via Drive MCP works. Original export doc:
  docs.google.com/document/d/1Z8y4Wb3RDCkY_CJuCcA7MP4u7ktErGDWikwKvHk7-6A

## 🚀 THE BIG MIGRATION IS DONE (2026-07-04, wf_52a51129)
ALL 17 case pages are cut-design full-document pages at /work/*: six NEW routes poured from
lab pages (buck-the-quo, adorama-music, know-vape, donut-zumiez, ac-boise, dw-drums), six
legacy pages REBUILT in place (turnstile, flashpoint, waffle-me-up, clothing-merch,
sony-flow-state, sony-xperia-summer), five already-cut pages wired. NEW: NextFile.astro =
DJ's v1 bottom-of-page auto-advance (gated overscroll fills a rail then navigates; click
works; skips when a lightbox is open) chained across all 17 in /work index order, looping.
/work grid + home reel cards re-pointed to the new routes. Fixed a latent .statrow .in
reveal-observer collision on every cut page (child-combinator scope). All 17 verified: 200,
call sheet w/ red star, correct chain hrefs, zero page errors. Lab pages left as-is
(museum; retire or redirect later). COPY PASS IS NEXT per DJ. Placeholders intentionally
ship (DJ: "throw all placeholders in").

## 🚀 THE SWAP IS DONE + POST-SWAP FEATURES (state as of 2026-07-03 late)
Post-swap adds, all LIVE: about career TIMELINE (pinned scrub, Drake Cooper→Buck the Quo→
AOV→Monuments, "DJ, the ___" rewriting line - ⚠️ YEARS + exact DC/BTQ titles TK from DJ);
/work grid view (Index/Grid toggle, Newest/A-Z/Discipline FLIP sort, lens filters grid);
reel cards: client LOGOS on strips + A/B HOVER images (defaults mine; DJ picks via
/redesign/reel-picker.html → paste string back); /photography: DJ's original 5 categories
(Brand/Editorial/Food/Motion/Non-Profit - ⚠️ placeholder 20-per-category chunking until DJ
sorts real photos) + Roll/Shuffle/Category sort + filtered lightbox; home brands ticker
moved up (after stat band); "Built to be ___" reel line; eye tile tracks cursor; sound
toggle on hero reel; giving folded into /about ("Some stories are not for sale.").
✅ CREDITS DECIDED 2026-07-03: DJ picked C "The Call Sheet" from /redesign/credits-mockup.html
("absolutely love this"). CallSheet.astro built (exact port: tape, red rule, ruled rows, red ✳
select, ARCHIVE stamp) + rolled to ALL 11 /work pages 1:1 (old .crow/.bc-meta/.cs2 ledgers
replaced; on-camera got its first slip; cobalt ✳ convention now RED site-wide). Real data only;
DJ still owes the extended crew names ("With" lists) to fatten the slips. Lab pages still on
old credits (roll later if wanted).
AWAITING DJ: timeline years/titles + A/B/C pick (/redesign/timeline-{a,b,c}.html), discipline
tags review, photo-to-category sorting (real photos), face pick, cover picks
(/redesign/cover-picker.html), crew names per project, ORIGINAL PHOTOS at 2500px+ for the quality re-cut (gallery fulls
are 1600px, soft on retina in the lightbox; no clean WP mapping, 60 imgs there vs 100 here).
✅ SONY SPOT CLOSED 2026-07-03: KIi8cBOlU50 confirmed via oEmbed = the real XM4 This Moment
spot; wired. Flow State (CS5UXhe17O4) + Xperia (PRO-I _RGvpwyYLTI) also wired w/ AOV impact
numbers + real campaign copy (64304cd). NEW PAGES: /work/sony-xm5 (influencer activation,
1.3M/118K/9%, self-hosted stills, NO artofvisuals links per DJ) + /work/on-camera (11 hosting
tapes, cue-timestamped click-to-play, one-at-a-time). /work index now 17 projects.
✅ DJ CONFIRMED 2026-07-03: MGX = production company, DJ was CD on ALL Sony work (XM5 role
upgraded to Creative Director; This Moment credits already correct). Mr B Baby = Michelle
(captions right). ⚠️ STILL CONFIRM: This Moment YEAR (campaign 2020/XM4 vs page chrome 2023);
on-camera cue times trusted from DJ's links; ng6yrFTrcnU has no HD poster (frame grab would
fix); MC-2022-05 + MC-2026-07 case codes invented to fit convention. AOV has more excavatable writeups
(XM4 gear highlight, XM5 blog, Xperia 1 IV launch, /case-studies hub) for future pages.
✅ 2026-07-03 (late): /work REBUILT per DJ: all 15 projects wired to real pages (12 dead hrefs
fixed), GRID = default view, natural-aspect 3-col masonry cards w/ client logos + discipline +
year, rose LOGO slider replaces photo strip + top black ticker, covers seeded from DJ's reel
picks (flow-state→fs-05, turnstile wordmark logo). /photography REBUILT as the MANILA FOLDER
DRAWER (DJ: "digging through archives"): 6 folders in an ink drawer, active folder lifts open
w/ red dot, index-card sheet header, per-folder masonry re-deal, hero words swap ("Twenty
frames of food"), old filmstrip lightbox (auto-drift + grab momentum) ported + retinted +
DPR bug fixed, hash routing. Cover-picker tool built + hub Tools section added (reel-picker
now linked too). ⚠️ flashpoint fp-08.jpg is a saved HTML page, not an image (unreferenced;
replace or delete).
✅ DONE 2026-07-03: Q badge = "Booking Q3 + Q4" on /contact (055b85d). Social links wired
from old WordPress site: IG/TikTok @djthecd + LinkedIn in/djthecd (5df59cd). /photography
REBUILT as 5 category rolls (sticky jump nav + scrollspy, natural-height masonry, lightbox
scoped per roll) per DJ's "split by type" call; mapping still placeholder 20-per-chunk.
Timeline "line you travel" A/B/C variants building at /redesign/timeline-{a,b,c}.html.
✅ REEL A/B PICKS WIRED 2026-07-03: DJ's picker string applied to all 7 reel cards on /
(blue-cross + turnstile weren't in the picker, keep defaults). All 14 images verified 200.

## (older) THE SWAP IS DONE: the converged cut IS the real site now
DJ said "lets swap it" → /, /work, /about, /services, /contact, /photography + case routes
(sony-this-moment, art-of-visuals NEW, blue-cross) are cut pages as full-document .astro
(scripts is:inline, styles is:global, links rewritten). All 9 routes verified + live.
Old pages in git history. Still old-style: /lab hub, lab/* cases, /giving (folded into
/about). Open: DJ's discipline tags, Q3 badge confirm, Sony spot link, real social handles,
face pick (Bricolage default), self-host reel, djthecd.com alt
skin (memory: djthecd-personal-site). ✅ EM-DASH SWEEP DONE 2026-07-03 (5c7c876): 227 dashes
cleared site-wide (lab/*, legacy work/*, main pages, titles, alt text, work.ts title builder,
Base aria-label); only CSS-comment dashes remain (never rendered); /redesign/*.html mockups
intentionally NOT swept (museum pieces). Domain monuments.cc still WordPress - swap is a
separate deliberate step.

## ════ SESSION 2026-07-02/03 :: THE CONVERGED CUT - NEARLY LOCKED, MIGRATION NEXT ════
The redesign converged. Everything lives at `public/redesign/` (hub: /redesign/), system docs
in `redesign/01..06.md`. DJ: "designwise this cut is feeling pretty close."
- ✅ THE CUT (m-home / m-about / m-services / m-work / m-work-sony): Bricolage + Fragment Mono
  + Instrument Serif splices, rose/cobalt accents, color blocking, grain, type-in-photo heroes.
- ✅ MOTION (measured from DJ's 4 reference sites via motion.mjs, doc: redesign/06):
  pinned scroll-scrubbed work reel ("Built to be bigger/felt/human/fast/heard/played/worn/
  loud/remembered." - 9 best projects, Emmy closer), scroll-lit rows, scramble hovers, footer
  under-reveal, spark companion, velocity marquees (with decay), split-line CTAs, parallax layers.
- ✅ VIDEO: reel (YT VMubUUZ2tdU) as m-home hero bg + sound-on lightbox; Sony case has a film
  block with `data-video` slot (currently plays reel as LABELED STAND-IN).
- ✅ WORK: m-work = taxonomy archive + DISCIPLINE LENS (6 disciplines highlight/dim, live
  counts - ⚠️ discipline tags per project are MY GUESSES, DJ must review data-disc attrs).
  m-work-sony = case TEMPLATE built from content/work/sony-this-moment.json.
- ✅ Brands ticker (lab BrandTicker ported to public/redesign/ticker.js) on m-work + m-home.
- ✅ Tiles strip: brand-book EYE (blink + spark pupil), "4x revenue growth", "Less agency.
  More band.", blackletter m - DJ loves these.
- ✅ PROMOTED TO REAL SITE already: converged tokens in global.css + fonts in Base.astro,
  /about fully converted, /lab display face swapped, nav wordmark = M✳NUMENTS (32px).
- ✅ Playground + switcher.js on every cut page (9 faces incl. Adobe kit use.typekit.net/aos2vlu).
- 43-agent review workflow hardened the work pages (11 real bugs fixed).
NEXT (in order):
1. DJ reactions: face pick still DEFAULT BRICOLAGE (no combo string ever sent); discipline
   tags review; Sony spot video link for the film block; reel words tune.
2. Say "locked" → MIGRATE real site pages into the cut: home hero (worst offender, still
   old Inter hero), /work + case studies (pour into m-work-sony template), /contact, /services.
3. Site-wide em-dash sweep (lab pages still violate); self-host reel MP4 (kills YT chrome).
4. Known accepted tradeoffs: corner-spark monochrome on paper pages; YT branding on hero video;
   preview MCP throttles rAF (verify motion via Playwright/motion.mjs, NOT preview_eval).

## ════ SESSION 2026-07-01 (later) :: REDESIGN KIT - AWAITING DJ'S A/B/C PICK ════
DJ asked for a design overhaul: more references, harder-hitting design, career arc shown
digitally. Delivered (commit 8ec1a9b, LIVE):
- ✅ `redesign/01-references.md` (16 refs), `02-diagnosis.md` (measured audit of the deploy:
  Inter-only w/ 29 size/weight combos, 5+ surface colors, dead space, two M marks),
  `03-direction.md` (shared system + 3 direction briefs).
- ✅ 3 viewable mockup directions at **/redesign/** (hub): A=Monument (cinematic editorial),
  B=Ledger (typographic index), C=Signal (kinetic bold). Home + about each; same copy in all
  three so the comparison isolates design. Career timeline = chapters 01-04 (NO years; ask DJ).
- ⏭ NEXT: DJ picks (or Frankensteins) → fold winner into global.css tokens/Base.astro →
  rebuild real home + about → work index → em-dash sweep + retire blackletter M.
- NOTE: fullPage snap.mjs does NOT fire IntersectionObserver (reveal sections capture blank);
  use tools/motion.mjs filmstrips as ground truth for reveal-on-scroll pages.

## ════ SESSION 2026-07-01 :: PORTFOLIO SCAFFOLD PASS (autonomous) ════
DJ said "move on all of them, scaffold the site first, rework design as pages are created,
message me with roadblocks." Built + PUSHED (commit 7d1bc8c → Vercel preview):
- ✅ `/lab/art-of-visuals` - FLAGSHIP, results-first, leads with "I grew the agency 4x."
  Real assets (Sony/Xperia/XM/Stansport/Creator Clubhouse). Cloned the adorama pattern.
- ✅ `/lab/donut-zumiez` + `/lab/ac-boise` - lighter Selected Work case pages (real assets;
  film/reel posters are NON-linking pending real video URLs).
- ✅ Lab hub: added the AOV flagship tile + a new **Selected Work** section (Donut, AC Boise,
  Sony This Moment, Sony Flow State).
- ✅ Home: hero copy → locked positioning ("Brand Experience & Experiential CD"; AI-floods-
  the-feed thesis; first-person) + a **3-number band** under the hero (4x / 160M+ / Emmy,
  each links to its case study). Verified legible on the dark body via snap.mjs.
- ✅ Contact: **hire-me kit** band ("Open to senior creative roles" + Email/LinkedIn/one-pager).
Build clean (~30 routes), all verified at 1440px with tools/snap.mjs.
- ✅ RECUT Adorama + Buck the Quo RESULTS-FIRST: moved each stat band directly under the hero so
  the NUMBER leads (Adorama 160M+/3.4M+/113K+/50K+; BTQ 18,000+/1-in-2/88%), shifted hero+role
  copy to first-person "I". Pushed.
- ⚠️ VOICE: know-vape.astro is still third-person ("DJ directed...") while every other case study
  is now first-person "I" - flip for consistency (quick; offered to DJ).
- ✅ THIN CREDITS STRIP: new reusable CaseCredits.astro added under the hero of all 6 case studies
  (role at a glance, accent-emphasized, auto light/dark). Bottom credits <dl> removed (promoted).
- ✅ LAUNCHED / PROMOTED INTO MAIN SITE (DJ: "promote into main site" + "launch now, fill in live",
  NO domain swap): Work page now pins the 6 case studies to the front (Case-study badge + headline
  result, /lab/* links) + new Experiential filter + featured-pinned shuffle; home Recent-Work slider
  leads with the 6 case studies. Live monuments.cc WordPress UNTOUCHED. Placeholders still flagged
  in-file and to fill live: AOV stat numbers, Donut/AC Boise video URLs, LinkedIn URL + one-pager PDF.
- ✅ WAFFLE ME UP header video: DJ's "WEB HEADER" YouTube loop (LI496YXDIRE) now runs as the muted
  autoplay hero background (poster holds until PLAYING, then fades in - no black load flash). Caught +
  fixed a PROD-ONLY black flash (blind reveal timer) by revealing only on the real PLAYING state;
  verified on the live Vercel deploy in a real browser. Reusable pattern for header loops elsewhere.
- ✅ DONUT × ZUMIEZ films wired: DJ gave 3 cuts - launch film (2eUYg_P5rfc) is the main linked
  player; Croy collab (HEx3bUYCwdk) + the cut (UwM3_jGjz6Q) as a 2-up row. All 200. In-file TODO
  to confirm which poster/caption maps to which cut.
- ⏳ CREDITS BAR - iterated per DJ. First 3-variant version was "hideous"; replaced with ONE
  full-bleed bar, then (per DJ) rebuilt as CreditsBar with tone ('dark'|'light') + variant
  ('simple'|'standard'|'full'). Compare all 6 at /lab/credits (light-page band + dark-page band).
  Removed the old CreditsVariants. AWAITING DJ: (a) pick complexity + confirm tone handling,
  (b) the per-project CREATORS (the "With"/Team names+roles) for each case study - the one thing
  I don't have. Then wire the winner onto every /work + /lab page, prop-driven, tone per page.
- ✅ DONUT merch: pulled 4 real product shots from donut.media (work shirt/jort/tee/stickers),
  web-optimized, added a "The product I made films for" section linking to the product pages.
- 🏗️ "FEARLESS" page SCAFFOLDED at /lab/fearless (DJ: "build the page, I'll give content soon").
  Full case-study structure w/ PLACEHOLDER copy + dashed image slots + Draft badge + in-file TODO.
  NEED FROM DJ: what Fearless is + premise, role/collaborators, headline number(s), assets (hero +
  stills + any video), year/credits. Then swap placeholders, add images, promote to Work/home.
- ✅ FILE PIPELINE PROVEN: Dropbox folder links work - flip dl=0→dl=1 (I do it automatically),
  curl the zip, unzip, sips-optimize. DJ can just paste Dropbox links as-is going forward. Also:
  local paths on his Mac (I read directly) and direct file URLs both work; Drive "view" / dl=0
  preview links do NOT (they return HTML).
- 🏗️ DW DRUMS (DWe) case study BUILT at /lab/dw-drums from Dropbox assets: split-screen "torn
  paper" campaign (Engineer Approved/Drummer Tested, Plug In/Rock Out). 11 finished spreads
  optimized (48M→3.8M), masonry gallery (uncropped), concept copy from the real spreads, teal
  accent. Added to the /lab hub v2 grid. ⚠️ NEED FROM DJ before promoting to Work/home: his exact
  ROLE + agency/collaborators, whether it SHIPPED or was a pitch/spec (layouts still lorem-ipsum),
  and any RESULTS. Also: ~9 Midjourney concept comps were held OUT of the gallery (AI-as-tool
  positioning) - available if DJ wants an "exploration" section.
  ✅ STORY CONFIRMED + PROMOTED (2026-07-01): Client DW Drums, Agency Art of Visuals, DJ = Creative
  Director + Designer. Brief = show one hybrid kit (acoustic + electronic) living in two worlds;
  split-screen is his strategic solution. Real hero/role/credits copy in; promoted to Work grid
  (tagline "One kit, two worlds") + home slider. Still optional/open: shipped-vs-spec + any results.
- 🧭 DECISION (2026-07-01): VIDEO stays on YouTube for now - all of it (Waffle/home header loops
  AND case-study films). DJ declined self-hosting (revisit later if the YouTube branding grates).
  Do NOT re-pitch self-hosting / a video CDN unprompted. Waffle keeps its YT-embed + fade-on-play.

**⛔ ROADBLOCKS / needs DJ (all flagged as in-file `⚠️ TODO` comments):**
1. AOV: only "4x" is real - the other 3 stat values (5+, 100M+, 3yrs) + role title + year span
   + client roster are PLACEHOLDER. Give me the real numbers/titles.
2. Video URLs: Donut launch films (2 cuts) + AC Boise IG reel (id DR04D0ZDOjV) render as
   non-linking posters - need clean watch/embed URLs to make them play.
3. Contact hire-kit: real **LinkedIn URL** (placeholder points to linkedin.com), and a hosted
   **resume/one-pager PDF** (currently a mailto) → drop a PDF at /public and I'll wire it.
4. Know Vape: DONE except reach numbers. DJ directed all 6 Myth vs Fact spots (IdahoPTV 2023),
   linked episode grid uses DJ's video.wkno.org URLs (verified). Emmy = 2024 NW Regional
   (NATAS NW), Community Outreach/Small Market, CAMPAIGN-level - framed honestly ("part of an
   Emmy-winning campaign"; DJ not on the public Emmy credit list, so no personal-Emmy claim).
   ✅ DJ DECIDED (2026-07-01): keep the "part of the Emmy-winning campaign" framing (he can't
   confirm his spots were in the submission, and isn't on the credit list, but they're Know
   Vape-branded so "part of" is defensible). Do NOT escalate to a personal/craft Emmy claim.
   ⚠️ ONLY LEFT: reach/impression numbers for the Award section (optional).
5. ⚙️ `caffeinate` + the dev server (localhost:4321) are still running - kill when fully done.


## ════ SESSION 2026-06-30 :: CAREER PIVOT + case studies + portfolio strategy ════
**THE BIG SHIFT (memory `site-goal-agency-job` + `monuments-copy` are SOURCE OF TRUTH):** the site's
real job is now a **PORTFOLIO TO GET DJ HIRED** at an agency/brand. Audience = hiring managers, not
brand clients. POSITIONING LOCKED: lead as a **Brand Experience / Experiential Creative Director**
(campaigns + experiential), agency-native, targeting culturally-relevant brands. AI = a TOOL, NOT the
headline. Lead with the NUMBER, not the idea. Thesis: "As AI floods feeds with cheap content, brands
win in the real world. That's the work I lead." Voice = first-person "I" + "my friends" (the crew),
Tess = PM; DO NOT lead with "make brands cool" (fuzzy, rejected).

**Research (2 cited multi-agent workflows, in memory):** experiential + campaign CD is durable/
AI-resistant through 2030 (Forrester: ~7.5% agency jobs to AI by 2030; creative spared). Holdcos
contracting (~-15% projected 2026); money moved in-house + to experiential specialists. Ride the LA
mega-event window (World Cup 2026 / Super Bowl 2027 / LA28). Lean audio/sports/music/gaming/DTC, NOT
legacy film/TV (contracting). Founder "flight-risk" bias is REAL (Rutgers 2024, successful founders
penalized MORE) - beat it with REFERRALS + "joining to build" framing, not cold apps. Comp anchors:
exp CD ~$94-160K, LA CD ~$133-213K, VP/ECD ~$193-350K+; awards = ~$50K premium.

**Case studies built this session (all `/lab`, in the hub `v2` grid):**
- ✅ PUSHED earlier: `/lab/buck-the-quo` (experiential flagship: More in Store, 18k conversations,
  enrollment lift) + `/lab/adorama-music` (160M+ impressions, Shorty finalist, a "Behind the film"
  2nd video). Real assets, real roles.
- `/lab/know-vape` (Emmy-winning IdahoPTV anti-vaping film series DJ DIRECTED; dark + green; poster
  gallery + video). ⚠️ TODO (comment in file): which/how many videos, incl. Nic Sick? Emmy
  category+year, reach numbers, full role breakdown.
- ⚠️ AWARD FIX: BTQ was wrongly "3 Rocky Mountain Emmys" → corrected to **Rocky Advertising Awards**
  (per DJ's resume; the Emmy is Know Vape). Confirm exact award name + that the badge images fit.

**PORTFOLIO STRATEGY (agreed):** a few FLAGSHIP deep case studies told as RESULTS (problem→strategy→
build→execution→NUMBER) + a lighter **"Selected Work" grid** for range (don't reel-dump). Flagships:
Buck the Quo, Adorama, Know Vape, and **Art of Visuals - NOT BUILT YET, build it** (4x agency revenue
is DJ's single most marketable number). Selected Work: Donut x Zumiez (2023 launch films DJ directed),
AC Boise kit-reveal (IG reel DR04D0ZDOjV = "This kit is Boise", USL League One, Hummel + Against), the
Sony launches, etc.

**Assets on disk (all web-sized, in `public/case-studies/<slug>/gallery/`):** buck-the-quo (19),
adorama-music (38), know-vape (10). NEW - SOURCED + DOWNLOADED 2026-06-30 (a sourcing workflow found
these, verified downloadable): donut-zumiez (9: dz-01..04 car-meet, product-shirt, film-01, merch,
yt-launch, yt-ptcruiser), ac-boise (9: home-01/02, away-01/02, keeper-01, crest, logo.png, yt-away,
yt-keeper), art-of-visuals (9: xm5-01, xm4-01, xm3-bts, xperia-01/02, stansport-01, podcast-cover,
yt-thismoment, yt-flowstate). The `yt-*.jpg` are YouTube poster stills for the videos below.
**VIDEO LINKS to wire (posters already downloaded):**
- Donut x Zumiez (DJ = launch films): YouTube `4UidSBSTo8o` (launch party) + `W4gT_4BWf5c` (PT Cruiser).
- AC Boise: the reveal DJ DIRECTED is the IG reel `instagram.com/reel/DR04D0ZDOjV` ("This Kit Is Boise",
  HOME kit, IG-only, no stable poster → use home-01 as poster). Also YT `eOnejUtqpKY` (away) + `2QqHz5Gz3qA`
  (keeper) IF DJ directed those. Context: USL League One, Hummel + Against, Egyptian Theatre reveal 12/3/25.
- Art of Visuals: YT `KIi8cBOlU50` (This Moment/XM4) + `CS5UXhe17O4` (Flow State/XM3) + `l1RBdpQ8vi8`
  (Adorama, already used elsewhere) + `sdFbORd-6wE` / `wZCPlSlN9Oo` (Xperia) + Vimeo `809843534` (agency reel).
  ⚠️ Sourcing could NOT confirm Intel / MSI / Sonos / DW Drums assets, and can't confirm WHICH cuts DJ
  directed on Donut or AC Boise-away/keeper - verify all attribution with DJ before publishing.

**Also shipped earlier this session (PUSHED):** homepage mobile overflow fix (`.trusted` grid +
menu fit on phones); the homepage **RECENT WORK slider** (`RecentProjects.astro`, promoted from
`/lab/project-detail`: white, compact, minimal scrubber; mobile = autoplay scroll-snap carousel,
hardened by an adversarial-review workflow - 6 real bugs fixed); added **Lab** to the main menu;
`astro.config` `server: { host: true }` for phone testing; AGAINST logo is intentional (not upside-down).

**NEXT (in order):**
1. Finish **Know Vape** once DJ confirms the specifics (films / Nic Sick / Emmy category+year / reach).
2. Build the **Art of Visuals** flagship (source assets first) - the 4x-revenue business-impact story.
3. Build a **Selected Work** grid; add Donut x Zumiez + AC Boise + the Sony launches as entries.
4. **Recut the flagships results-first** (lead with the number) per the hiring-portfolio research;
   shift copy to first-person "I" per `monuments-copy`.
5. Add the **hire-me kit**: an "open to [roles]" line + prominent contact/LinkedIn + a resume/one-pager.
6. Rework the **HOME hero** to the locked positioning + a 3-number band above the fold.
7. ⚙️ `caffeinate` is running (keeps the Mac awake) - kill it when done. New chat can turn it off.

**Quick start:** `cd monuments-site && npm run dev` → http://localhost:4321 · `npm run build`
(builds clean, ~30 routes). Read `CLAUDE.md` first (shorthand + the VISUAL-TRUTH workflow),
then `REFERENCES.md` (locked design refs + measured motion laws), `DESIGN-SPEC.md`,
`IDEAS.md` (envelope log), and `COLOR-SYSTEM.md` (color-tool decision). Brand voice =
memory `monuments-copy.md` (SOURCE OF TRUTH).

## ════ SESSION 2026-06-13 (cont.) :: GSAP scroll motion + exoape pass + color tool ════
**Shipped this session (all on `/lab`, committed + deployed):**
- **Color system DONE:** 8 contrast-verified LabFx presets (monument, noir, electric, press,
  slate, forest, sand, mono), generated by `tools/gen-palettes.mjs` (Adobe Leonardo + culori,
  every value WCAG-checked). Do NOT hand-edit LabFx hex; edit PRESETS in that script and re-run.
  See `COLOR-SYSTEM.md`.
- **Pattern library is INLINE on the `/lab` hub** (`src/components/PatternLibrary.astro`, rendered
  in `lab/index.astro`, no separate page). Elements so far: next-page scroller (with live dials)
  and the reel reveal. Sections alternate light/dark.
- **Reel reveal = the exoape "Play Reel" scroll moment via GSAP ScrollTrigger:** pin the stage,
  scroll-scrub so a small film + "Play"/"Reel" slide in from the sides, then the film scales to
  take over the full viewport, click to play. It is a POSTER STILL right now (YouTube embeds got
  ad-blocked / black-boxed). NEXT: self-host DJ's reel as an MP4 for real click-to-play + crispness.
- **Contextual cursor** (LabFx): destination-aware labels (View work, Contact us, Our story,
  Swipe, Play, etc.); the menu button has no label.
- **Exoape light-forward pass on the `/lab` HUB** (white, clean, floating photos). The playbook for
  the REST of the lab pages is `EXOAPE-PASS.md` (light = --paper/--ink, dark = --bg/--fg as
  deliberate beats; soft tinted shadows; the shared `.lab-float`; the "+" kicker; 640px heads).
- **About (`/lab/about`): "How I work / Five things I refuse to fake" is now a PINNED HORIZONTAL
  SCROLL** (GSAP), the section pins and the card row translates sideways. Reduced-motion falls
  back to a vertical stack.

**GSAP is now the scroll-animation stack.** Added `gsap` 3.15. Pinned/scrubbed effects import
`src/scripts/gsap-lenis.js` (registers ScrollTrigger and BRIDGES it to the existing Lenis: waits
for `window.lenis`, then drives Lenis from `gsap.ticker`, ONE rAF loop). `Base.astro`'s standalone
Lenis loop self-stops via `window.__lenisGsapBridged`. GSAP loads only on pages whose components
import it. The bug that ate the reel saga: the bridge ran before Lenis existed in the PROD bundle
(dev ran Base first), so it worked locally but froze on deploy. Fixed by waiting for Lenis.

**⚠️ WORKFLOW LESSON (memory `verify-in-djs-real-browser`):** verify scroll/motion/embeds in DJ's
ACTUAL browser (Claude-in-Chrome, it connects) AND the LIVE deploy, NOT the local sandbox. Prod vs
dev script order, ad-blockers (YouTube to a black box), macOS Reduce Motion, and Vercel serving
mixed old/new builds for ~30 to 60s after a push all bite and are invisible locally. Poll the live
URL across requests until the new build is consistent before judging.

**⏳ OPEN / NEXT:**
1. **Reel:** wire a self-hosted MP4 into `.rr-panel` for real click-to-play + crisp takeover (DJ
   to send the reel file, or pull from the YouTube showreel `VMubUUZ2tdU`).
2. **About horizontal scroll - VERIFIED on the LIVE deploy (2026-06-13, DJ's real browser via
   Claude-in-Chrome + real-Chromium snap).** ScrollTrigger pin-spacer present (padding-bottom =
   computed amount, 730px @1920px); section stays pinned (sectionTop=0) the whole range; track
   translates frame-accurate 0 to -730 @1920 (every 25% step within 1px of expected); no console
   errors; renders clean (photos loaded). Snap: `tools/snaps/about-howiwork-mid/`. ⚠️ PERF NOT yet
   numbered - the rAF/FPS probe got throttled because the tab was backgrounded (rAF pauses when
   hidden). Behavior is frame-accurate (good sign); a true smoothness read needs the tab FOREGROUND
   (DJ scrolls it) or a real-Chromium FPS script. Watch perf on that heavy page (credo + parallax + pin).
3. **Roll the exoape light-forward pass onto the other lab pages** (hub done; follow `EXOAPE-PASS.md`).
4. **Pattern library - Element 03 NEXT-PROJECT HANDOFF SHIPPED + verified (2026-06-13, commit
   34c0219).** Exoape grow→handoff: current project hero grows, next project's card rises from
   beneath and takes over with its title (DJ's starred next-project ask, IDEAS.md). Scroll-scrubbed
   + a Scrub dial to freeze any frame; 3 takeover styles (rise/grow/curtain) + rise-distance and
   handoff-point dials; Counter/Label toggles. Light beat after the dark reel. Real-Chromium verified:
   render math exact across all 3 styles, scroll driver maps 100→0 clean, prod build clean. Caught +
   fixed a path bug (flashpoint hero is in `/gallery/`). Cards: Sony This Moment (tm-02) → Flashpoint.
   **Element 04 PHOTO GALLERIES SHIPPED + verified (2026-06-14).** Dark inline element on the hub:
   one curated 16-frame set (8 land / 8 port from `/gallery/thumb`) laid out three ways via the dial,
   Justified (flex rows sized by aspect) / Masonry (CSS multicol, natural heights) / Grid (uniform
   4:3) + Columns (2-6, also drives justified row height) + Gap + "Mono until hover" toggle. Click any
   frame to open the shared `Lightbox.astro` (full-size from `/gallery/full`). Real-Chromium verified:
   all 3 layouts render, dial drives every prop, lightbox opens correct full src, no console errors.
   **The inline pattern library is now COMPLETE (01 next-page · 02 reel · 03 next-project · 04 galleries).**
5. **Project-detail slider PAGE SHIPPED + verified (2026-06-14).** New dedicated page
   `/lab/project-detail` (linked from the hub "Also on the bench" row). Lusion `of_the_oak`-style
   project-detail slider: a section that PINS while a horizontal track of 6 framed "chapter" panels
   (Sony This Moment, tm-01→tm-09) scrubs sideways on scroll (GSAP ScrollTrigger via `gsap-lenis.js`).
   Each panel = a device-framed still + chapter title/description; HUD = counter + bottom progress
   hairline + prev/next arrows (arrows lenis.scrollTo the next slice). Consistent frame-left layout
   so a frame stays on screen at every handoff (alternating left a void at the midpoint - fixed).
   Reference capture: `tools/snaps/ref-lusion-of_the_oak/` (snap.mjs `--steps`, 21 frames). Dark/
   cinematic (--bg/--fg), reduced-motion + ≤820px fall back to a vertical stack. Real-Chromium
   verified: pin holds, track 0→-7200 frame-accurate, counter 01→06, no console errors, images load.
6. **`NextProject.astro` - the standard work-page project-nav component (2026-06-14, DJ loves it).**
   Reusable next-project hand-off: the clean scroller (caption + big next name + tag + filling rail,
   `is-full` lights the cue) PLUS a MEDIA CLUSTER (a video-preview frame + 2 peeking photos) that
   starts small and GROWS as you scroll (`--np-g` scale 0.34→1 near-linear, `--np-mo` opacity).
   Scroll-to-end carries to the next project via a SHORT gated overscroll (`threshold` prop, default
   100px, was 320 - much snappier) or click. Props: href/name/tag/accent/poster/video?/photos/threshold.
   `video` optional (mp4); without it the poster frame is the video slot (awaiting real reels). LIVE on
   `/lab/sony-this-moment` (→Turnstile, red, turnstile bts/products media) and `/lab/flashpoint`
   (→This Moment, teal, sony tm media). Inline tmx-np/fp-np removed. Real-Chromium verified on both:
   media grows 0.54→0.74→1, pull-to-next fires in ~120px, no console errors. ⚠️ STILL OPEN: the GLOBAL
   footer renders AFTER the component (gate stops pull-to-next firing at the footer). Decide whether to
   suppress the footer on case studies (component = true closer) or fold next-project into the footer.
   TODO: self-host project reel MP4s and pass `video=` to make the preview frames actually play.
7. **`/lab/flashpoint` TEST PAGE shipped + verified (2026-06-14, DJ's ask).** New light-forward lab
   case study for the Flashpoint rebrand (Adorama's photo-gear label), linked from the hub "Also on
   the bench" row. Brand-literal teal (#16a3ab) + orange (#f0612a) on --paper; assets float as cards.
   Beats: FLASHPOINT hero (floating mockups, drift), the brief (services + real lead copy), the
   IMAGINE/ILLUMINATE/CREATE concept triad (staggered light-in, brand colours), the system gallery
   (6-col editorial grid → shared Lightbox), the work spanned, credits, then the DARK next-project
   scroller into /lab/sony-this-moment (teal fill). Copy = the real /work/flashpoint text, de-em-dashed.
   Real-Chromium verified: all sections render, concept lights, scroller fills→100% + pull-to-next, no
   console errors. NOTE: built purpose-fit (not a sony clone) since Flashpoint is a rebrand, not a film.
8. **🚀 FIRST PROMOTION TO PRODUCTION HOME (2026-06-14, DJ's call).** Promoted the Play/Reel showreel
   reveal from the lab onto the REAL homepage `/` (`src/pages/index.astro`), as `ReelReveal.astro`.
   Replaced the old scroll-zoom YouTube showreel (its markup is gone; the old guarded JS self-disables;
   dead `.showreel/.reel-*` CSS in global.css + the dead showreel/reel-control JS in index.astro can be
   cleaned up later). Component is self-contained: hard-coded dark colours (home has no --bg/--fg
   tokens), GSAP ScrollTrigger pin/scrub bridged to Lenis via `src/scripts/gsap-lenis.js` (the bridge
   waits for window.lenis, so the prod script order is safe - the reel-saga fix holds). POSTER STILL
   for now (DJ chose "replace, poster for now"); pass `video=` / a self-hosted MP4 later for real play.
   Real-Chromium verified LOCAL: reveal pins (stageTop=0), panel scales 0.26→1, Play/Reel words slide
   in then fade, the EXISTING rwork reel still scrubs (track -53→-1096), no console errors. ⚠️ Domain
   monuments.cc still WordPress/untouched - this only changes the Vercel `/` build. NOT yet componentized
   with the lab's inline reel (PatternLibrary still has its own copy; dedupe later).
9. **Loader REDESIGNED (2026-06-14, DJ's ask).** Replaced the old MONUMENTS-word + raster-M + bar loader
   with: black field, a SPINNING METALLIC M (the "#2 conic metal sweep" - DJ A/B-picked it from 6 variants
   a metallic-m-loader workflow generated), flanked by CREATIVE / PRODUCTION / AI. `Loader.astro` (SVG +
   chrome/conic/spec gradients) + the loader CSS in `global.css` (`.ldr-*` + `#ldrConicRot`/`#ldrSpecMove`
   + keyframes). Progress + curtain dismiss UNCHANGED (Base.astro drives `#loader-bar`/`#loader-pct` then
   `.done`). Real-Chromium verified: shows, words animate, progress fills, curtain dismisses + reveals hero,
   no console errors; reduced-motion holds a still frame. Shows on `/` only (index.astro `loader={true}`).
   ⚠️ THE M IS A PLACEHOLDER geometric mark - DJ is vectorizing the real one; swap is one line: replace
   `<path id="ldrMPath" d="…">` in Loader.astro (same 0 0 120 100 viewBox), then update/delete `.edge`.
10. **BRAND BOOK INTEGRATED into the lab (2026-06-14, overnight).** DJ sent the brand book v0.8
   (`~/Downloads/monuments-brand-book.html`; see memory `monuments-brand-book`). Built `BrandWorld.astro`,
   a dark "Brand World" band on `/lab` (id `#brand`, after the session index): living M-eye-NUMENTS
   wordmark (eye blinks, spark spins), the ink/paper/denim/rose palette, the auto-cycling symbol family,
   a soft eye-sun, voice + Space Mono colophon. Added Archivo + Space Mono (Base font link) and
   `--denim`/`--rose`/`--brand-ink`/`--brand-paper` tokens. Picked from 4 generated concepts; the other 3
   (**sun-playground** - interactive generative soft-sun + symbol grid, very lab-native; **block-noise**;
   **wordmark-hero**) are PARKED at `public/brand-lab/*.html` (local only, not deployed - view at
   `localhost:4321/brand-lab/<name>.html`). DJ may want one added. Real-Chromium verified: generators fire,
   symbol cycle runs, no console errors, reads as a clean dark beat in the lab.
11. **CODE TIGHTENED (2026-06-14, overnight).** Removed the dead scroll-zoom showreel CSS (`.showreel`/
   `.reel-*` in global.css) + JS (the scroll-zoom IIFE + the `reelVideo` YouTube block in index.astro) left
   over when the home moved to ReelReveal; kept the hero YouTube control. Verified the home is intact (hero,
   tilt, testimonials, reel reveal, rwork, loader all present, no console errors). NOT deduped: the lab's
   inline reel vs ReelReveal are intentionally different (the lab one reskins with LabFx, the home one is
   fixed-dark) - leave them.
12. **BRAND color PRESET + dark `/lab` hero (2026-06-14).** Added the 9th LabFx preset **`brand`**
   (ink/denim/rose) to the picker - generate via `tools/gen-palettes.mjs` (denim #3E6E94 was
   Leonardo-lifted to #527da0 for AA on ink), wired through `LabFx.astro` (`THEMES` array + a `.fx-sw`
   swatch + `:root.theme-brand`). Made the `/lab` HERO a darker version that reads off `--bg`/`--fg`
   tokens, so it retints with whatever preset is active. Real-Chromium verified across presets, brand
   preset applies ink/denim/rose with no errors.
13. **BrandWorld tagline CLIP FIXED (2026-06-14, commit ca2ad54).** The `M●NUMENTS` wordmark (Archivo
   ~1230px at the old 164px) overflowed the brand band's 1180px inner and dragged `.taglinerow` left
   under `overflow:hidden`, clipping "Built to be remembered." Fix in `BrandWorld.astro`: widened
   `.bw .inner` to `var(--wrap,1300px)`, added `min-width:0` to `.bw .hero > div` (so the wordmark
   can't force the track/tagline wider), capped the wordmark at `clamp(36px,10vw,150px)`. Verified
   flush + clip-free with Archivo loaded at 375 / 768 / 1024 / 1440 / 1920 / 2200px.
14. **CODE TIGHTENED - verified dead-code sweep (2026-06-14, commit 2a5ba64).** Multi-agent adversarial
   audit over this session's files (each removal grep-proven unreferenced across src/public/tools).
   Removed 13 dead items: legacy `.work-grid`/`.work-card`/`.work` home rules (home is `.rwork-*` now)
   + the `.work-card` reduced-motion entry; 7 orphan `cs-` label comments + the TEMP movement-toggle
   comment; the no-op `function build()` in index.astro (no callers; superseded by `drawWave`);
   `.fx-ring` (cursor renamed `.fx-cur`) + the mousedown handler writing the never-read `--press`;
   the `.tmx-next*` reduced-motion rules orphaned when the next-project block moved into
   `NextProject.astro`; corrected a stale "eight swatches" comment (picker has 9). 1 candidate KEPT:
   the `.bw` full-bleed gutter is a live design choice (CLAUDE.md full-bleed exception), not dead.
   Build clean; `/` + `/lab` + `/lab/sony-this-moment` render with 0 console errors.

**New tools:** `tools/gen-palettes.mjs` (color), `tools/snap-el.mjs` (capture one element at a
scroll offset in real Chromium), `tools/snap-themes.mjs`. The headless Claude-preview pauses rAF
and cannot composite a Lenis scroll, so use these (real Chromium) to capture motion.

## ════ SESSION 2026-06-13 - the /lab v2 redesign is the live work ════
**Everything new lives at `/lab/*` (the originals at `/`, `/work`, `/about`, etc. are UNTOUCHED
until DJ promotes a page). Hub: `/lab` (a public "Laboratory" showcase). Each change is its own
commit = clean rollback. Deployed: https://monuments-2-0.vercel.app/lab**

**The v2 pages (all on the shipped design system):** `/lab/home` (SIGHT SOUND AND EMOTION
mouse-tilt hero + red floating hand + brand-world scenes), `/lab/work` (exoape-style vertical
project cards + the actual showreel video + "View" cursor), `/lab/about` (DJ likes it; real
photo montage, "Billions" stat that ticks up in a 4-up row, pinned credo, light/dark balance),
`/lab/services` (real capabilities + AI block + attention hourglass + black logo ticker),
`/lab/ai` (audit/automate/deploy, ambient reel hero, WILD intro, cards fold into a paper
airplane on scroll, "Can your AI do this?" demo), `/lab/blue-cross` + `/lab/sony-this-moment`
+ `/lab/turnstile` (editorial case studies; insight scene = a ~56vh band, not full screen),
`/lab/giving`, `/lab/contact`.

**Shipped components (src/components/):** LabFx (theme tokens + grain + contextual cursor +
4-preset color selector), FloatingHand (tiny red hand, flies diagonally on scroll behind text),
BrandTicker (scroll-velocity logo marquee; `tone="white"|"black"`, live `data-speed`),
WeavingLine (REMOVED from pages, DJ hated it - file still exists), ShapePile (physics shapes),
AttentionHourglass (8s drain + flip), AIWorkflowDemo (cycling capability demo). Tools:
`tools/snap.mjs` (full-page capture + measured geometry) and `tools/motion.mjs` (frame-by-frame
scroll filmstrips) - ALWAYS use these to judge motion before/after; DJ has twice called out work
done without actually looking.

**The system:** tokenized colors via LabFx on `:root` (lab-only). Default theme "monument" =
warm dark + RED accent (the floating-hand red). Type-clip fix on all word masks
(overflow-clip-margin). Motion laws = pinned scenes, scrubbed+reversible, sheet-over handoffs,
media slower than type (REFERENCES.md). Voice: studio "we", no em dashes, CD-first, never
"photo studio"/"small". Black/WHITE section balance matters (DJ: too much black).

**⏳ OPEN / NEXT:**
- COLOR: stop hand-picking theme hexes. Use **Adobe Leonardo** (generate accessible scales from
  the red) and/or **Radix Colors**; **culori** for math. See COLOR-SYSTEM.md. Regenerate the 4
  LabFx presets from a tool.
- DJ to send a specific photo album for the about-credo background (currently random from
  /gallery/full; swap the POOL in about.astro's montage script).
- Donut Media + DW Drums ticker logos are agent-crafted approximations - swap real marks.
- DJ rewrites the AI-page copy himself (going-wild voice). Showreel = self-host the MP4 later.
- Promote chosen /lab pages onto the real routes when DJ signs off.

## ──────── older sessions below (historical) ────────

**DJ's style:** precise designer feedback, fast iteration. Replicate-first (match the real
monuments.cc, THEN optimize - don't redesign unprompted). Can't watch video. Estimate effort
before big tasks. Verify in-browser via Claude Preview MCP (name `monuments`, port 4321) - the
headless preview renders narrow (~755px) and pauses rAF when hidden, so read the DOM/computed
styles and trust DJ's real screen for fine spacing.

## SESSION 2026-06-08/09 - what changed (read this first)
**Strategic context (NEW - memory `site-builder-vision`):** monuments is DJ's *learning vehicle + template #1* for a **category-based website-builder / site-factory** (client fills a form + uploads images → point a domain → auto-build a site by business category). So **build components + data model GENERIC / multi-site-ready, not monuments-specific**; theme by category via `--` tokens; per-client editing = a git-based CMS (Keystatic-style); reuse, don't reinvent.

**Shipped this session:**
- Real bug fixed: `--pad` was `--pad: var(--pad)` (circular) → killed padding on EVERY work section. Now `clamp(24px,5vw,40px)`. (This was the "spacing" complaint.)
- `CSS-MAP.md` (repo root): audited line-map of all of global.css + a confirmed **dead-code list** to delete (old `.work` grid, old `.ab-*`, orphan `.cs-*` scaffold, `.menu-close`, `.pg-modes`, unused `--warm`/`--gray-bg`). CSS is otherwise structurally clean.
- Sony This Moment gallery: **continuous auto-scroll filmstrip** carousel (CSS-only marquee, hover-pause) + a **masonry** with a dark text-block cell that **randomizes its slot each page load**.
- `/lab/find-your-flow`: FIND YOUR FLOW credits ring built as **3 motion options A/B/C** to compare live - A scroll-dial, B draw-in seal, C counter-rotor.
- `/lab/work-kit`: first reusable, SELF-CONTAINED (scoped-style) work components - **WorkScope** ("what I did for them": heading+body+services list), **WorkCredits**, **WorkQuote** - + generic `src/data/work/types.ts` (Section/Project model with BOTH `scope` and `credits` as section types). Additive; no live page touched.

- **Keystatic CMS - GitHub-mode browser login WORKING (2026-06-10).** `/keystatic` admin, collections **Work projects** + **Testimonials** + singleton **Site settings** (`keystatic.config.ts`; content under `content/`). React + `@keystatic/astro` + `@astrojs/vercel@8` adapter are added in `astro.config.mjs` but the integrations are **dev-gated** (`!process.argv.includes('build')`) so the production build stays **pure-static** (verified). Storage auto-switches local-in-dev / GitHub-on-deploy via `import.meta.env.DEV`. GitHub App "Monuments CC CMS" created + installed on the repo (Contents+PR read/write); 3 Vercel env vars set (KEYSTATIC_GITHUB_CLIENT_ID/SECRET + KEYSTATIC_SECRET, Sensitive/Production). Fixed an OAuth `redirect_uri=localhost` bug via `security.allowedDomains:[{hostname:'monuments-2-0.vercel.app'}]` in astro.config (Astro 5 host-injection guard). DJ logged in OK. Login from anywhere: monuments-2-0.vercel.app/keystatic.

**⏳ Decisions waiting on DJ:**
1. FIND YOUR FLOW: pick A / B / C (or a mix) at `/lab/find-your-flow`.
2. ✅ RESOLVED - CMS = Keystatic GitHub mode (built + login working, see above).

## SESSION 2026-06-10 (cont.) - CMS→pages pipeline WIRED
**The reader/adapter/WorkLayout pipeline is built + proven end-to-end.**
- `src/lib/work.ts` - `createReader(@keystatic/core/reader)` over `content/work/*`; `toProject()` ADAPTS the flat Keystatic record → the generic `Project` (header + ordered `sections[]`, `src/data/work/types.ts`). This is the only seam that knows Keystatic field names. Exports `listWorkSlugs` / `getProject` / `getAllProjects`.
- `src/components/work/WorkLayout.astro` - dispatches `project.sections` by `type`, reusing the **global** `.wh / .wk-intro / .wk-carousel / .wk-masonry / .bc-quote / .bc-meta / .cs-next` classes so a CMS page matches the locked Sony ref pixel-for-pixel (verified: same grid cols, 42s `wkScroll`, 3-col masonry, accent emphasis, `#e0322d` circle). Masonry images are Lightbox triggers.
- `src/components/Lightbox.astro` - the photography `.pg-*` filmstrip lightbox LIFTED into a shared component (auto-drift + grab-momentum + keyboard). Binds to any `[data-lb-full]` trigger, grouped by `[data-lb-group]`. (Photography still has its own inline copy - entangled w/ lane drag-guard; migrate it onto this later.)
- Added `quote{}` object to `keystatic.config.ts` (the `bc-quote` was the only non-CMS field) + a new `IntroSection` (`wk-intro` grid) to `types.ts`, distinct from `ScopeSection` (services-list/Flashpoint).
- **Seed:** `content/work/sony-this-moment.json` (real Sony content). NOTE on-disk path: data-only collection → **flat `content/work/<slug>.json`**, NOT a `<slug>/index.json` dir.
- **Comparison route:** `/work-preview/[slug]` renders the CMS page via WorkLayout. Locked `/work/sony-this-moment` is UNTOUCHED - A/B them at 1440 before flipping real routes.
- ✅ Build clean (18 pages). `/work-preview/sony-this-moment` prerenders to **pure-static** `index.html` (CMS content baked in, 0 react islands) - static posture preserved.
- ⚠️ **DOC FIX:** `astro.config.mjs` is NO LONGER dev-gated (that approach is gone). Current: Vercel adapter always on, **public pages prerendered/static, only `/keystatic` + auth API are serverless.** HANDOFF.md's "dev-gated pure-static build" text is stale.

**NEXT (in order):**
- [ ] **DJ A/B check** `/work-preview/sony-this-moment` vs locked `/work/sony-this-moment` at 1440 → if it matches, flip real `/work/[slug]` onto WorkLayout (sony LAST, it's the ref).
- [ ] Roll real projects into the CMS (clothing-merch = proof, then bc family, cs2 family). Each work page becomes a `content/work/<slug>.json`.
- [ ] Reuse `Lightbox.astro` on the photography page too (retire its inline copy) once the work flow is locked.
- [ ] Finish the kit (WorkScope is wired into WorkLayout for the services/Flashpoint variant; WorkQuote/WorkCredits superseded by the global `.bc-quote/.bc-meta` for the Sony family - decide whether to keep them).
- [x] ✅ DONE 2026-06-12 - dead CSS swept (all CSS-MAP candidates re-grepped + removed, ~110 lines; build verified clean).

## SESSION 2026-06-12 - Blue Cross clone + full QC pass
- **`/work/blue-cross` REBUILT as a faithful clone of monuments.cc/portfolio/blue-cross-2** (verified against the live page in-browser): `.wh` header (firefighter hero = bci-02, BCBS logo `/logos/blue-cross.png`, red `--wh-circle`, real intro copy) → page-scoped `.bx-scope` copy band (services list left / two paragraphs right, like live) → `.wk-carousel` (live swiper order: bci-22/24/02/28) → full 23-image `.wk-masonry` in live order → **new `WorkNext.astro`** (giant-ghost-text next-project teaser cloned from the live template; reusable, scoped styles). NOTE: local bci-NN numbering == live Blue-Cross-Of-IdahoNN numbering.
- **QC pass (all clean):** `npm run build` 18 pages no errors; all 19 routes 200 + 404 works; zero console errors/warnings on every page (home, work, photography, about, contact, giving, both labs, all case studies); zero failed network requests; zero broken internal links/assets (only flag: `/about/dj.jpg` inside an intentional HTML comment placeholder); no console.log/TODO/debugger anywhere in src.
- ⏳ DJ to A/B `/work/blue-cross` vs the live page, then approve cloning the remaining work pages.

## DONE (do not redo)
- Live + deployed: GitHub `monuments-dj/monuments.2.0` → Vercel auto-deploy →
  https://monuments-2-0.vercel.app  (`gh` authed; `git push` works hands-off).
- All 15 pages build; all 8 case studies exist (no 404s). Home, Work, Photography,
  Contact, About, Services all built.
- Menu patches: vintage set (Idaho [straight], LA, AI handshake, No Risk No Story, race,
  film). Camera patch emojis sized down.
- **Layout system:** every section uses `--wrap` (1300px) + `--pad` (clamp 24-40px),
  centered. Sections fit the column UNLESS deliberately full-width (hero img, dark quote band).

## IN PROGRESS - work-page refinement (this is the active task)
Refining the work/case-study pages to match the real monuments.cc, one at a time.
**Sony "This Moment" is the reference build** - pattern to roll to the others:
- `.wh-*` work header: full-bleed campaign image, big uppercase title (top), client logo
  + italic role with a hand-drawn **marker circle** that draws in / holds / fades / redraws
  (~5s loop). Circle colour is per-page via inline `style="--wh-circle:#xxx"`.
- `.wk-intro`: 2×2 photo grid (left) + heading & 2 paragraphs (right).
- Then bc-* image/quote sections, `.bc-meta` credits, `.cs-next`.

**NEXT:** roll the `.wh-*` header + `.wk-intro` pattern to the other work pages, each with
its own `--wh-circle` colour + client logo:
- [ ] sony-flow-state, sony-xperia-summer, flashpoint, waffle-me-up, clothing-merch, blue-cross, turnstile
- [x] **FIND YOUR FLOW** credits ring - BUILT as 3 motion options at `/lab/find-your-flow`
  (A scroll-dial / B draw-in seal / C counter-rotor). ⏳ DJ to pick - see SESSION block above.

## Open / lower priority
- About + Services: DJ is matching these to the real site via **Cowork** (separate tool).
  Coordinate - pull before editing if Cowork has been active (pre-push hook blocks stale pushes).
- Brand-doc conflicts still unresolved: photo-vs-film positioning, Tess section, featured-work list.
- Self-host showreel MP4 when DJ provides it. (NOTE: `against.png` renders inverted
  by design - that's the actual AGAINST mark, confirmed by DJ. Do NOT "fix"/flip it.)
- Real DJ/Tess headshots → swap into About placeholder tiles (`/public/about/`).

## SESSION 2026-06-12 (cont.) - V2 LAB PAGES BUILT (autonomous run, DJ to review)
All new versions live at /lab/* (originals untouched; every page = its own commit
for rollback). Built on the measured motion system (REFERENCES.md): pinned scenes,
scrubbed reversible motion, sheet-over handoffs, marker accents.
- /lab/ai - pinned ERA + QUESTIONS scenes, WILD stamp cascade, tilt cards
- /lab/home - line-by-line hero build + marker circle over video, showreel kept,
  brand-world work bands, services rows (incl. AI), trusted grid
- /lab/work - exoape-style portals (grow → handoff), index list w/ hover thumbs
- /lab/blue-cross - editorial chapters, pinned insight scene, collage, stats,
  frame wall, portal-grow next-project ending
- /lab/about - pinned credo scene, drifting galaxy media, team tiles
- /lab/services - CD-first rows w/ marker underlines, cream AI block, process strip
- /lab/contact - giant marker-underlined email, expect cards, draggable patches
⏳ DJ: review each, punch-list or promote to real routes.
