# LAUNCH.md · the road to pointing monuments.cc at this site

Graded 2026-07-07 against the dual mandate (DJ's words, locked):
**1) get me hired inside of agencies. 2) help sell clients on my work, taste and thinking.**
Every item below traces to one or both. The domain swap is the finish line and happens only on DJ's explicit go.

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
| Art of Visuals | C | C | ⚠️ THE FLAGSHIP IS THE WEAKEST CASE — see blockers |
| Buck the Quo | B | A- | sharp arc; award naming + role framing must be reconciled |
| Know Vape | B | B+ | solid; verify asset inventory |
| CWI | C | B | now has real films; verify the two researched claims |
| On Camera | B | B | 11 vs 12 tapes contradiction |

## A · Launch blockers — build fixes (Claude)
- [ ] **Home: proof is hover-only.** Role + achievements on reel cards never render on touch; surface role + one stat persistently on every card (mobile especially).
- [ ] **AOV flagship: placeholder film.** "Play film" plays a hardcoded stand-in reel; caption literally says "stand-in: studio reel"; "the reel that sold the room" appears twice. Needs the real AOV reel (DJ owes the link/file) + copy dedupe.
- [x] Work hero · RESOLVED: now "30 campaigns"
- [ ] **Work index: On Camera row ID "MC-2026-07" dated 2023.** Align the catalog ID.
- [x] On Camera tape count · FIXED: 12 everywhere
- [ ] **Contact: "Not ready to fill out a form? Cool."** No form exists. Cut or rewrite the line.
- [ ] **Services: "Tess keeps it on the rails"** is an unexplained name to strangers. Give Tess one identifying clause or move her to About (she's introduced there).
- [x] BTQ award art · CLEARED: files are misnamed emmy-*.png but the artwork IS Rockies art; awards line now "every category won · Best of Show" per DJ
- [ ] **Buck the Quo: role framing** ("directed the experiential build" vs "Shooter + editor" vs "on the ground") must reconcile to one story.
- [ ] **Photography: fake taxonomy.** Tabs claim Brand/Editorial/Food/Motion/Non-Profit but frames are bucketed by ID number. Blocked on DJ's real categorization (see C) — then wire real buckets.
- [ ] **Photography: no CTA.** Add a next step at the end of the archive.
- [ ] Sweep all 18 /work rows: every data-img, data-snip, poster, and film asset resolves (Know Vape's full inventory included).

## B · Claims to verify or soften (DJ — the stat rule is yours)
- [x] "4x agency revenue" · RESOLVED: Art of Visuals, over four years · applied on receipt, home reel, AOV case.
- [x] "2-4x engagement" · SOFTENED per DJ: now "above benchmark across Sony campaigns" (industry-high/verified cut).
- [x] "2M+" · RESOLVED: the brand's audience, engaged by DJ · now "brand audience engaged" in ticker + receipt.
- [x] "Inside a 160M+ campaign" · kept as campaign context (DJ ok)
- [x] "18,000+ conversations" · RESOLVED: Drake Cooper campaign research, now attributed on the BTQ stat.
- [x] On Camera audience · RESOLVED: AOV 1.9M IG+YT, 200K second channel, 30K podcast peak · applied; 300K podcast claim corrected
- [x] CWI researched claims · DJ KEEPS both ("find more if you can" — extra sourced facts queued: fall 2024→2025 +6.8% enrollment, grad rate 36% vs 27%, transfer +7.6%).
- [ ] "Est. MMXXII" vs "a decade / Roll 2016-2026" — one clarifying word so the studio's age and your career don't read as the same claim.
- [x] Rockys · RESOLVED per DJ: won every category entered + Best of Show, cited on Drake Cooper's site · applied.

## C · Assets DJ owes
- [ ] **AOV reel** (the real one) — unblocks the flagship.
- [ ] **Fresh IG links** — Sony This Moment ×2, Clothing/Merch ×2 (old /tv/ format = the black bars).
- [ ] **Photo categorization** — Claude will propose buckets for all 100 frames (vision pass); DJ corrects. Then real tabs.
- [ ] **Buck the Quo: more/better images** (DJ's ask 2026-07-07).
- [ ] **CWI**: role confirm (Director + Editor?), his own stills if wanted over film frames.
- [ ] **/ai: name 2-3 real systems you built** (the page's credibility hinges on concrete).
- [ ] Original photos at 2500px+ for the retina re-cut (long-standing).
- [ ] Crew names ("With" lists) for the call sheets.

## D · Build queue (Claude, DJ-directed 2026-07-07)
- [x] **About creed — APPROVED + SHIPPED 2026-07-07.** The Short Version is now The Creed: four locked beliefs stacked, supports in DJ's own words. (Proposal doc: PHILOSOPHY.md.)
- [x] **Services collapse — APPROVED + SHIPPED 2026-07-07 as /capabilities** (renamed per DJ): refusals opener ("Less agency, more rock & roll." + 2 confirmed refusals, more candidates awaiting his pick), three belief-led doors, offers demoted to rows, /services redirects. Nav swept site-wide.
- [ ] **X > Y ladder (decision 3, AWAITING DJ):** adopt as site device? Which lines?
- [ ] **Work page: redesign thumbnails** + write a small blurb per case study + the words "case study" must appear on the page.
- [ ] **Home: bring back OG homepage elements** — DJ to point at which (old WordPress home? /lab/home? the pre-v3 hero?). List candidates for him.
- [ ] **Bring back the reel scroller from the last design** (ReelReveal.astro exists in components; confirm this is the one).
- [ ] **Recruiter route on Home + Contact** (from grades): a distinct "for agencies" line/link so goal 1 has a visible door. Ties into philosophy work.
- [ ] **Password-protected work area** — decision below (E).

## E · New pages (proposed, DJ decides)
1. **/hire (or /cv)** — the single biggest goal-1 gap: a one-pager a recruiter can skim/download. Role target, three headline numbers, selected work, availability. PRIORITY.
2. **/vault — password-protected work.** Recommendation: ONE gated page listing NDA/unreleased work as mini-cases (thumb + blurb + role + numbers), not full case pages per project. One password, serverless-cookie gate (real protection, not hide-the-div). Full case pages later only for pieces that earn it.
3. **404 page** — on-brand, one hour, prevents a dead end.
4. Not recommended now: blog/journal (goes stale), separate reel page (home owns it), press page (awards live in the cases).

## D2 · Color system (DJ 2026-07-07)
- [x] **Blue killed site-wide.** Accent repointed cobalt → rose; all 11 bands + the ticker now pink with dark text (themeable via `--struct` + `--on-rgb`). Default accent = rose.
- [x] **Homepage reel fixed:** cards reformatted to a consistent logo/title/code stack (was baseline-float wrap mess); scrub now starts flush on card 1 and ends flush on the last (removed the 6vw over-scroll "extra slot").
- [ ] **REMOVE the accent switcher before launch** — the temp pill lives in `src/components/PageFooter.astro` (marked with a TEMP comment). It's DJ's tool to land the 2-color system. When he picks: set that accent as the permanent default in each page's `:root` and delete the switcher markup/style/script from PageFooter. (Case-page per-brand tints like dw-drums teal are untouched.)

## F · Pre-flight QA (Claude, before swap)
- [ ] Full-site click pass at 1440 + 390 (every page, every CTA, NextFile chain loop).
- [ ] All snips/videos play muted + lazy; no 404s in network log.
- [ ] Lighthouse pass on Home/Work/About/one case (perf + a11y).
- [ ] Meta titles/descriptions on all pages; OG image; favicon everywhere.
- [ ] Verify in DJ's real browser + live deploy (prod differs from sandbox — standing rule).

## G · Domain swap (ONLY on DJ's explicit go)
1. Full WordPress backup (export + DB) confirmed downloadable.
2. Add monuments.cc to the Vercel project; keep monuments-2-0.vercel.app as fallback.
3. DNS cutover; verify SSL + www redirect.
4. Post-swap smoke test (all routes, both widths).
5. Keep WordPress hosting alive 30 days as rollback.
