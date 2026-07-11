# LAUNCH.md · the road to pointing monuments.cc at this site

Graded 2026-07-07 against the dual mandate (DJ's words, locked):
**1) get me hired inside of agencies. 2) help sell clients on my work, taste and thinking.**
Every item below traces to one or both. The domain swap is the finish line and happens only on DJ's explicit go.

> **2026-07-08 full-site audit** (26 live pages, one reviewer each, 154 findings). The complete
> per-page punch list lives in **[AUDIT-2026-07-08.md](AUDIT-2026-07-08.md)** - blockers, every claim to
> verify, copy/voice nits, polish. Fixed this pass: **160M+ killed sitewide**, clothing-merch parallax
> crash, CWI "stills to follow" placeholder, Contact phantom-form line, Rockies→Rockys, sony-xm5 title
> case, on-camera grammar. **New must-verify:** "3.6M+ impressions on a single launch" (home ticker +
> About receipt + Xperia) - same class of number as the 160M+ that turned out wrong.

> **2026-07-09 mega-session.** Shipped: Flashpoint IA rebuild (Adorama project, website + socials
> chapters, live-site proof); statrow/rolerow fixed on all 20 band pages at every accent; **B/W is
> the working default, pink killed** (accent switcher keeps rose/cobalt/red for compare); **type
> switcher = five full pairings** (01 CUT · 02 TINY Inter×Fraunces · 03 HAUS Instrument×Instrument ·
> 04 WIDE Archivo×Spectral · 05 MDRN Satoshi×Gambetta), all three type roles tokenized sitewide;
> **/template "The Kit" element library** (in the menu, temp); menu takeover full-width; /hire built
> out (DJ photos, 8-scene marquee, Emmy/Rockys/4x/2-30+ band, brand slider, Adorama·Flashpoint row,
> reel link); work-page typewriter line; video previews for ACB/Turnstile/Clothing + XM5 recut clean;
> homepage Photography + Clothing cards, AoV "built to scale", reel words land at 16%; photo page
> macbar killed + hero capped + mobile extras hidden; This Moment bridge copy + 19-frame sheet; XM5
> cutdowns section (3 creators, 18 delivered) + BTS tile; Flow State 22 selects + comment wall +
> 24-tile BTS wall + banner rebalance; about strip 18 clips; testimonials hold lorem stand-ins;
> BTS library archived at ~/Monuments-Social/bts-library/.
> **Late 07-09/07-10 additions:** locked CTA system applied verbatim sitewide (closed kicker set,
> button always "Let's talk ↗", contact page = four mailto doors, no form); B/W scoreboard inverts
> to paper on case pages; B/W failure sweep (tools/bw-sweep.mjs) killed 5 real bug classes; heroes
> meet-in-the-middle at 78svh + air before the work grid; EVERY film poster on every case page now
> carries a muted preview loop (tools/motioncheck.mjs verifies; new snips cut for buck-the-quo +
> know-vape, all six KV episode thumbs loop their own footage); IG reels self-hosted where IG allows
> (xm5 launch reel cropped to content; xperia = 3 live tiles + 3 official embeds); play-when-visible
> is the sitewide default for all autoplay video (observer in PageFooter, reduced-motion = no
> decorative autoplay); Flow State = deepest case (22 selects, 24-tile BTS wall, comment wall);
> XM5 = cutdowns section + BTS tile + reel; hire = photos/marquee/brand slider/4-stat band.
> **Final 07-10 additions:** global masonry packer in PageFooter (every .frames sheet = balanced
> shortest-column grid, thin sheets drop a column, single-item containers skipped; verify with
> tools/packcheck.mjs - all 27 routes clean); XM5 launch reel lives IN the contact sheet (FR-11,
> cropped to content, sound on tap); video weight pass (work hero reel 11->5.5MB, clothing hero
> 11->1.5MB, KV episode thumbs loop 5s cuts not full episodes, every .pvid preload=none - initial
> page payload has zero below-fold video bytes; buck films left alone, re-encoding inflated them);
> xperia grid = all six reels (3 self-hosted + 3 official embeds per DJ, IG blocks the file API
> but not the embed iframe). Break-image rule: portrait comps need explicit object-position;
> flat-lays/wides are the natural break citizens.
> **STILL STATIC (need footage or a snip pass):** adorama Beat Machine cutdown, CWI program spots
> x3 (Engineering/AI/Nursing), donut Croy + The cut.
> **NEW DJ DECISIONS OWED:** font pairing pick (01-05) · confirm B/W (then bake tokens, delete
> switcher + Kit menu line) · real quotes for the 7 testimonial names + roles for Chris House/Kish/
> Alex Stevens/Jennie Meyers · red kickers stay or go in B/W · real-browser motion pass (reel scrub,
> typewriter, marquees, cutdown players, IG embeds on xperia) · confirm the three API-walled xperia
> reels still exist on IG.

## Page grades (hiring / client)

| Page | Hiring | Client | One-line verdict |
|---|---|---|---|
| Home | B | A- | taste argument lands; proof hidden on hover; reads studio-for-hire, not hireable CD |
| Work index | B+ | B+ | real body of work; two credibility nicks (30 vs 18, MC-2026-07 typo) |
| About | B | A | strongest page; studio framing still muddies "would join a team" |
| Services | C | B | weakest for hiring: reads as a client menu, zero recruiter signal |
| /ai | B | B | POV lands; needs the 2-3 named real systems to be believable |
| Photography | B | C | the OS9 flex impresses; fake categories + no CTA = dead end |
| Contact | B- | B+ | "no deck required" is great for clients; thin for recruiters |
| Giving | B | B | fine; supporting role |
| Art of Visuals | C | C | ⚠️ THE FLAGSHIP IS THE WEAKEST CASE - see blockers |
| Buck the Quo | B | A- | sharp arc; award naming + role framing must be reconciled |
| Know Vape | B | B+ | solid; verify asset inventory |
| CWI | C | B | now has real films; verify the two researched claims |
| On Camera | B | B | 11 vs 12 tapes contradiction |

## A · Launch blockers - build fixes (Claude)
- [ ] **Home: proof is hover-only.** Role + achievements on reel cards never render on touch; surface role + one stat persistently on every card (mobile especially).
- [ ] **AOV flagship: placeholder film.** "Play film" plays a hardcoded stand-in reel; caption literally says "stand-in: studio reel"; "the reel that sold the room" appears twice. Needs the real AOV reel (DJ owes the link/file) + copy dedupe.
- [x] Work hero · RESOLVED: now "30 campaigns"
- [ ] **Work index: On Camera row ID "MC-2026-07" dated 2023.** Align the catalog ID.
- [x] On Camera tape count · FIXED: 12 everywhere
- [x] Contact phantom-form line · **FIXED 2026-07-08** → "Prefer to just email? Always open."
- [ ] **Services: "Tess keeps it on the rails"** is an unexplained name to strangers. Give Tess one identifying clause or move her to About (she's introduced there).
- [x] BTQ award art · CLEARED: files are misnamed emmy-*.png but the artwork IS Rockies art; awards line now "every category won · Best of Show" per DJ
- [ ] **Buck the Quo: role framing** ("directed the experiential build" vs "Shooter + editor" vs "on the ground") must reconcile to one story.
- [ ] **Photography: fake taxonomy.** Tabs claim Brand/Editorial/Food/Motion/Non-Profit but frames are bucketed by ID number. Blocked on DJ's real categorization (see C) - then wire real buckets.
- [ ] **Photography: no CTA.** Add a next step at the end of the archive.
- [x] Asset sweep · **DONE 2026-07-08**: 145/147 referenced assets exist; the only gaps are photography's runtime placeholder thumbs (`/gallery/thumb/${id}.jpg`) = the real-photos task. All 9 video snips present.
- [x] **Clothing/Merch: parallax crash** · **FIXED 2026-07-08** - hero is a `<video>` but the script queried `.hero>img` (null) and threw on first scroll, freezing ALL scroll motion + a console error. Now targets the video + null-guarded; verified.
- [x] **CWI: "DJ's stills to follow"** visible coming-soon label · **FIXED 2026-07-08** (dropped; also fixed a third-person slip on an I-voice page).

## B · Claims to verify or soften (DJ - the stat rule is yours)
- [x] "4x agency revenue" · RESOLVED: Art of Visuals, over four years · applied on receipt, home reel, AOV case.
- [x] "2-4x engagement" · SOFTENED per DJ: now "above benchmark across Sony campaigns" (industry-high/verified cut).
- [x] "2M+" · RESOLVED: the brand's audience, engaged by DJ · now "brand audience engaged" in ticker + receipt.
- [x] "160M+ impressions" · **KILLED 2026-07-08** - DJ flagged it wrong; purged sitewide (Adorama stat band + statbeat, home reel card, /work row, meta, and the unshipped /lab copies).
- [x] "18,000+ conversations" · RESOLVED: Drake Cooper campaign research, now attributed on the BTQ stat.
- [x] On Camera audience · RESOLVED: AOV 1.9M IG+YT, 200K second channel, 30K podcast peak · applied; 300K podcast claim corrected
- [x] CWI researched claims · DJ KEEPS both ("find more if you can" - extra sourced facts queued: fall 2024→2025 +6.8% enrollment, grad rate 36% vs 27%, transfer +7.6%).
- [ ] **"3.6M+ impressions on a single launch"** - NEW (audit 07-08). Renders on the home ticker, the About "receipts", and Xperia. Unverified, same class as the killed 160M+. Confirm the number + which launch, or cut/soften.
- [ ] **Est. MMXXII (2022) vs "opened 2016" / "a decade"** - About's corner label says "opened 2016 · still active" while the hero NFO says Est. MMXXII; reconcile studio-age vs career-length so they don't read as one contradictory claim.
- [~] **Voice: I-voice slips to third-person / "we"** - FLIPPED 2026-07-08 (99ee7b8): Flashpoint (story rewritten first-person + boilerplate trimmed), Know Vape (3 blocks "DJ directed"->"I directed"), Capabilities ("our standards"->"my", "We lock"->"I lock"), Turnstile ("Our timeline"/"We took"->"My"/"I"). STILL DJ'S CALL: Giving (whole page studio "we" - may be a deliberate crew-voice exception) + Photography (impersonal third person - may be intentional archive tone). Confirm those two or say flip them.
  - Also normalized role-title casing to title case within blue-cross / sony-this-moment / adorama-music ("Creative direction"->"Creative Direction", matches each page's NFO).
- [x] Rockys · RESOLVED per DJ: won every category entered + Best of Show, cited on Drake Cooper's site · applied.

## C · Assets DJ owes
- [ ] **AOV reel** (the real one) - unblocks the flagship.
- [x] **IG links reconciled against the LIVE WordPress portfolio (2026-07-09, a5de9b4 + c21488c).** Method: curl each `monuments.cc/portfolio/*` page, extract the real embeds. Findings + fixes:
  - **Summer w/ Xperia** - was MISSING all 6 real reels (page only showed the PRO-I film). Added all 6 from the live page. **This was DJ's repeated ask.**
  - **Clothing/Merch** - the 2 reels already match the live page. No change.
  - **Sony This Moment** - the 2 `/tv/` embeds were dead phantoms NOT on the live page (live uses the YouTube spot KIi8cBOlU50, already featured). Removed the dead section.
  - **Can't cross-check** (not on the live WP portfolio): ac-boise `/reel/DR04D0ZDOjV`, sony-xm5 `/p/CjimA-tpjnc`. Current formats; DJ to confirm they resolve.
  - ⚠️ IG embeds don't fully hydrate in the headless sandbox - **DJ must confirm all render on the live Vercel deploy in his real browser.**
- [ ] **Photo categorization** - Claude will propose buckets for all 100 frames (vision pass); DJ corrects. Then real tabs.
- [ ] **Buck the Quo: more/better images** (DJ's ask 2026-07-07).
- [ ] **CWI**: role confirm (Director + Editor?), his own stills if wanted over film frames.
- [ ] **/ai: name 2-3 real systems you built** (the page's credibility hinges on concrete).
- [ ] Original photos at 2500px+ for the retina re-cut (long-standing).
- [ ] Crew names ("With" lists) for the call sheets.

## D · Build queue (Claude, DJ-directed 2026-07-07)
- [x] **About creed - APPROVED + SHIPPED 2026-07-07.** The Short Version is now The Creed: four locked beliefs stacked, supports in DJ's own words. (Proposal doc: PHILOSOPHY.md.)
- [x] **Services collapse - APPROVED + SHIPPED 2026-07-07 as /capabilities** (renamed per DJ): refusals opener ("Less agency, more rock & roll." + 2 confirmed refusals, more candidates awaiting his pick), three belief-led doors, offers demoted to rows, /services redirects. Nav swept site-wide.
- [ ] **X > Y ladder (decision 3, AWAITING DJ):** adopt as site device? Which lines?
- [ ] **Work page: redesign thumbnails** + write a small blurb per case study + the words "case study" must appear on the page.
- [ ] **Home: bring back OG homepage elements** - DJ to point at which (old WordPress home? /lab/home? the pre-v3 hero?). List candidates for him.
- [ ] **Bring back the reel scroller from the last design** (ReelReveal.astro exists in components; confirm this is the one).
- [ ] **Recruiter route on Home + Contact** (from grades): a distinct "for agencies" line/link so goal 1 has a visible door. Ties into philosophy work.
- [ ] **Password-protected work area** - decision below (E).

## E · New pages (proposed, DJ decides)
1. [x] **/hire - BUILT + SHIPPED 2026-07-09 (8f3163c).** Recruiter one-pager at `/hire`: role target (Creative Director, senior agency role), three verified headline numbers (Emmy / 4x agency revenue / 2 to 30+ creatives led), What I bring, 5 selected-work links, client roster, availability + email + LinkedIn/IG, and a "Save this page as PDF" button (print stylesheet tuned to a clean single page). **Not yet linked in nav** - the recruiter route (a "for agencies" door on Home + Contact) is the follow-up that makes it discoverable; DJ to say where it should live.
2. **/vault - password-protected work.** Recommendation: ONE gated page listing NDA/unreleased work as mini-cases (thumb + blurb + role + numbers), not full case pages per project. One password, serverless-cookie gate (real protection, not hide-the-div). Full case pages later only for pieces that earn it.
3. **404 page** - on-brand, one hour, prevents a dead end.
4. Not recommended now: blog/journal (goes stale), separate reel page (home owns it), press page (awards live in the cases).

## D2 · Color system (DJ 2026-07-07)
- [x] **Blue killed site-wide.** Accent repointed cobalt → rose; all 11 bands + the ticker now pink with dark text (themeable via `--struct` + `--on-rgb`). Default accent = rose.
- [x] **Homepage reel fixed:** cards reformatted to a consistent logo/title/code stack (was baseline-float wrap mess); scrub now starts flush on card 1 and ends flush on the last (removed the 6vw over-scroll "extra slot").
- [ ] **REMOVE the accent switcher before launch** - the temp pill lives in `src/components/PageFooter.astro` (marked with a TEMP comment). It's DJ's tool to land the 2-color system. When he picks: set that accent as the permanent default in each page's `:root` and delete the switcher markup/style/script from PageFooter. (Case-page per-brand tints like dw-drums teal are untouched.)

## F · Pre-flight QA (Claude, before swap)
- [x] **Mobile-breakpoint sweep 360/390/768 (2026-07-09, 0fbb283).** All 26 real pages had 3-22px phantom horizontal scroll (hero `.t{width:104%}` bleed + Lenis making `<html>` the scroller so `body{overflow-x:hidden}` didn't bind). Fixed with `html{overflow-x:clip}` sitewide. Re-swept: every page sits exactly at viewport, no blank images, no media 404s. Tooling: `tools/qc-mobile.mjs`.
- [x] **Header images (2026-07-09, 7a5a4f7).** Capabilities/Contact/AI were the only text-only heroes; gave each a full-bleed on-set frame (dj-film / set-haze / studio-console) matching the About/Giving pattern. Verified 1440 + 390. Images are one-line swaps if DJ wants different frames.
- [x] **Link + CTA + NextFile audit (2026-07-09, `tools/qc-links.mjs`).** Every internal link across all 26 pages resolves (200/3xx); zero empty/`#`/dead CTAs. NextFile auto-advance chain verified = one complete 18-page loop, no orphans, no broken targets, loops back to start. External hosts (idahoptv, instagram, donut.media, brand sites) still need DJ's link check (section C).
- [x] **Media attrs (2026-07-09).** All 8 `<video>` tags are muted + playsinline (no surprise audio / no mobile fullscreen hijack); 128/199 imgs lazy-load. No image/video 404s at load in the 360/390/768 sweep. (Playback-on-scroll spot-check + remaining lazy coverage = Lighthouse-tier, below.)
- [x] **Meta descriptions (2026-07-09, 8330de3).** Added to the 5 nav pages that lacked them (about, capabilities, contact, photography, work) + og:title/description/type. All pages now have title + description + favicon + viewport.
- [ ] ⚠️ **Accent switcher pill still renders on every page** (bottom-center, via PageFooter) - visible in the new hero screenshots. Must be removed before the swap (needs DJ's accent pick; see D2).
- [ ] **OG image** - no page has an `og:image` share card yet. Needs a designed 1200x630 asset + absolute URL (best wired at domain-swap time). og:title/description are in place.
- [ ] Lighthouse pass on Home/Work/About/one case (perf + a11y; incl. finishing image lazy coverage, 71 imgs still eager).
- [ ] Verify in DJ's real browser + live deploy (prod differs from sandbox - standing rule).

## H · References (everything a fresh chat / DJ needs)
**Live + repo**
- Repo: github.com/monuments-dj/monuments.2.0 (branch `main`) · `gh` authed as monuments-dj (Claude can push).
- Preview (auto-deploys on push, ~60s): https://monuments-2-0.vercel.app
- Real domain: **monuments.cc - still WordPress, DO NOT point without DJ's explicit OK** (see section G).

**Docs to read first (in this order)**
- [CLAUDE.md](CLAUDE.md) - working agreement + rules · [TODO.md](TODO.md) - running state, newest on top
- [CSS-MAP.md](CSS-MAP.md) - global.css jump-index + the reveal-mask descender gotcha
- [LAUNCH.md](LAUNCH.md) - this file · [AUDIT-2026-07-08.md](AUDIT-2026-07-08.md) - full 26-page punch list
- [PHILOSOPHY.md](PHILOSOPHY.md) - About-creed / positioning rationale · [HANDOFF.md](HANDOFF.md) - older architecture notes (partly stale)

**Copy + content sources**
- `tools/copy-new.md` = **LOCKED** copy handoff from DJ · `tools/copy-export.md` = pre-edit baseline · `tools/copy-parts/` = per-page.
- Google Doc (copy export): docs.google.com/document/d/1Z8y4Wb3RDCkY_CJuCcA7MP4u7ktErGDWikwKvHk7-6A
- Art of Visuals source pages (Sony/Adorama stats + images): artofvisuals.com/thismoment/ · /sonyxm3flowstate/ · /portfolio/adorama-music/

**Conventions / gotchas**
- Design system "the cut": Bricolage Grotesque + Fragment Mono + Instrument Serif; ink #161514 / paper #F5F3EF / accent rose #EFA1AD. Backslash `\ ` kicker prefix is an intentional sitewide motif (not a typo).
- `/lab/*` = draft graveyard, pulled from nav - **do not ship**. `/redesign/*` = old A/B/C mockups + `reel-picker.html` (throwaway). Both still build to reachable URLs.
- Verify VISUALLY, not by rects (clips are ink-overflow). Snapshot tooling: `tools/*.mjs` (snap.mjs, herocrop.mjs, verify-heads.mjs, build-montage.mjs → tools/snaps/). `tools/` is gitignored/untracked.
- Never use em/en dashes. Commit co-author: `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.
- 9 hero/feature videos are YouTube IDs (nocookie embeds); 9 hover snips in `/public/snips/*.mp4`.

## G · Domain swap (ONLY on DJ's explicit go)
1. Full WordPress backup (export + DB) confirmed downloadable.
2. Add monuments.cc to the Vercel project; keep monuments-2-0.vercel.app as fallback.
3. DNS cutover; verify SSL + www redirect.
4. Post-swap smoke test (all routes, both widths).
5. Keep WordPress hosting alive 30 days as rollback.
