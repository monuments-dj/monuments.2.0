# COPY GOVERNANCE SYSTEM · researched plan · 2026-07-29

STATUS: RESEARCHED + PLANNED, awaiting DJ's go. Nothing below is built.
Provenance: DJ asked "research what the best method would be" (2026-07-28).
6-agent research sweep (38 findings: Vale/textlint tooling, GitLab/Datadog/
Corelight practice, terminology systems, LLM-QA reliability data, approval
mechanics). This doc = the verdict + the build steps, ready to execute.

## THE VERDICT (what we adopt, not invent)
Vale (the docs-industry standard linter, one Go binary, free) runs against
the BUILT dist/ HTML as one more gate in the existing pre-deploy battery.
On top: a block-keyed hash ledger (the visual-regression "approved
baseline" pattern, applied to text), a facts/terms registry that GENERATES
Vale rules, and a diff-scoped LLM judgment pass for what regex can't reach
(tense drift, We/DJ/I dialect) - advisory only, every flag must cite a
verbatim quote that string-matches the source or it's dropped (the
G-Research pattern: cut false positives from ~30% to >85% precision).
DJ's surface stays what already works: before/after cards, batched.

Why not bespoke: rule taxonomies, severity tiers, baseline promotion, and
FP containment are solved problems with documented failure modes (GitLab,
Datadog, Corelight, a decade of snapshot-testing postmortems). Hand-rolling
rediscovers those failures one incident at a time.

Bespoke traps the research killed:
- Linting .astro source: frontmatter/JSX lints as prose = garbage flags.
  Lint the rendered truth in dist/.
- One LLM doing everything: unvalidated LLM review runs 25-37% FPs and
  self-review softens findings. Deterministic floor + quote-verified
  advisory top.
- Whole-page snapshots: one CTA tweak dirties 26 baselines and trains
  bulk-accept blindness. Block-keyed hashes only.
- An accept-all flag the AI can run: approval promotion happens ONLY on
  DJ's explicit word, recorded (per docs/../memory decision-provenance).

## THE STACK
| Layer | What |
|---|---|
| Mechanical | Vale on dist HTML: em-dash ban, banned agency-speak, kill-list facts as reject rules. Severity error blocks deploy |
| Judgment | Diff-only LLM pass: tense + dialect + tone, rubric from MONUMENTS-VOICE.md, quote-verified, advisory tier |
| Facts/terms | facts.yml + terms.yaml registry (applies_to: monuments/djthecd/both) -> generates Vale rules; extends the work.js single-source precedent |
| Approval memory | copy-ledger.json: block ID -> normalized text hash + approved flag + date + DJ's word. Unapproved drift fails the battery |
| DJ's surface | Changed/flagged blocks rendered as before/after cards, max ~5 per session, one-word approvals |

## BUILD STEPS (est. ~2-3 focused sessions total)
0. DJ go/no-go on this plan (one word). Then:
1. Vale + "Monuments" style v1: ONLY near-zero-FP rules first (em dashes,
   kill-list, placeholders, banned words) wired into the battery. ~half day.
2. dist-text block extractor + copy-ledger.json baseline + ledger check
   script (battery gate). Normalize whitespace/entities BEFORE first use -
   noise in week one kills approval systems. ~half day.
3. facts.yml + terms.yaml seeded from the CLAUDE.md locked-facts block +
   work.js; generator emits Vale rules. ~2h.
4. LLM judge (diff-scoped, rubric, quote-verification) + card renderer.
   ~1 day.
5. First card session: burn the overnight copy-flag inventory (already
   swept 2026-07-29, see morning report) in approved batches; ledger
   baseline seeded from DJ's approvals. Every rejection adds a do/don't
   pair to MONUMENTS-VOICE.md so corrections compound.
6. Tense/dialect heuristics turn on ONLY after week one proves quiet
   (trust is earned before judgment rules ship).

Two-site: ledger + registry carry applies_to; shared case bodies keep the
portable "DJ directed" dialect; djthecd derives I-voice from the same
entries (DJTHECD-HOLDINGS.md logic). Approving once approves both.

## THE ENGAGEMENT DIMENSION (DJ 2026-07-29: "some projects I was working
## in house, some I was hired as monuments and some I was hired as myself
## or on a team - we need ways to distinguish that and easily flip")
Two audiences: (1) people hiring DJ as a creative, (2) people hiring or
working with Monuments the company. Every project has ONE truthful
engagement basis, and the copy must carry it - never blend it:

  engagement: inhouse | studio | solo | crew
  - inhouse: DJ employed inside the org (e.g. Idaho education years)
  - studio:  the client hired Monuments (Monuments-era work)
  - solo:    DJ hired as himself (direct freelance/contract)
  - crew:    DJ hired onto/alongside a team (AOV-era Sony runs; the
             Against collaborations like CWI + AC Boise)

Mechanics (rides the same stack, no new machinery):
1. work.js gains an `engagement` field per project (+ optional via:
   "Art of Visuals" / "Against"). Single source, both sites read it.
2. The registry derives ALLOWED framings per type, and the linter gets
   block-level rules: a studio claim ("the client came to Monuments",
   "our client") on a non-studio project = fact violation, and the
   reverse too. The existing kill-list rules (BTQ/AC Boise never claim
   "directed the build"; CWI credit truths) are early instances of
   exactly this rule class - now generalized.
3. THE FLIP: engagement + target site drive the template-level frame
   (hero role line, intro sentence, credit slip header):
     studio  -> mon: "Client x Monuments"        / dj: "through my studio"
     crew    -> mon: "DJ, with [team], for X"     / dj: "I was on the crew
                that... alongside [named team]"
     solo    -> mon: "X brought DJ in"            / dj: "X hired me"
     inhouse -> mon: "from DJ's in-house years"   / dj: "my in-house years
                at X"
   Case BODIES stay shared + portable; only the frame flips. Hiring
   managers read an honest career; clients read an honest studio.
4. DJ's cost when we build: confirm ~19 one-word tags. Claude
   pre-classifies every project from credits/copy evidence; DJ corrects
   the wrong ones in one card pass. His words recorded per tag
   (provenance rule).
NOTE: classification will surface a handful of pages whose current
framing needs an honest tweak (most of the catalog is pre-Monuments).
Those become ordinary review cards, not silent edits.

### DRAFT CLASSIFICATION (Claude 2026-07-29, from the call-sheet credits.
### NOT DJ's words - every row awaits his confirm/correct, one word each)
| project | draft | evidence | sure? |
|---|---|---|---|
| art-of-visuals | inhouse @ AOV | "DJ led creative as the agency scaled 4x" | high |
| sony-flow-state | crew via AOV | Agency: Art of Visuals | high |
| sony-this-moment | crew via AOV | Agency: AOV · Prod: MGX | high |
| sony-xm5 | crew via AOV | Agency: AOV · Prod: MGX | high |
| sony-xperia | crew via AOV | Agency: AOV | high |
| adorama-music | crew via AOV | Agency: AOV | high |
| flashpoint | crew via AOV | Agency: AOV | high |
| turnstile | crew via AOV | Agency: AOV (Adorama white-label) | high |
| dw-drums | crew via AOV | Agency: AOV | high |
| msi-creative-by-design | crew via AOV | Agency: AOV | high |
| on-camera | solo (talent) | DJ as on-screen talent | high |
| donut-zumiez | solo | Client+Agency both Donut (direct hire) | med |
| cwi-lets-get-started | studio | DJ 2026-07-29: "I direct and run production. Against is their agency but Monuments is their production company" | CONFIRMED |
| ac-boise | crew via Against | Client: "Against · AC Boise" | med |
| buck-the-quo | inhouse | DJ'S ANSWER 2026-07-29 ("In-house") | CONFIRMED |
| blue-cross | crew via OMEK | DJ 2026-07-29: "I collaborated with OMEK" | CONFIRMED |
| know-vape | crew w/ Frame by Frame | DJ 2026-07-29: "I collaborated with April Frame at Frame by Frame" | CONFIRMED |
| waffle-me-up | solo | DJ 2026-07-29: "Waffle me up hired me directly" | CONFIRMED |
| clothing-merch | mixed | DJ 2026-07-29: "its mixed. Sony, DW, adorama, Art of visuals" | CONFIRMED |

Consequence worth naming: under this lens the "clients hiring Monuments"
audience is currently being sold mostly on work delivered under other
banners (AOV/Against/Drake Cooper) attributed via "DJ directed". The
engagement frames make that honest without shrinking it: "DJ, with the
AOV team, for Sony" is still the pitch - it just can't read as "Sony
came to Monuments".
