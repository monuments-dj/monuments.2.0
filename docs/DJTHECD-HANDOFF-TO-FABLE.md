# djthecd.com · handoff to Claude Fable 5
Written by Claude Opus 5, 2026-08-12. Read this, then `docs/DJTHECD-PLAN.md`.

## The situation
DJ is sending this site to a hiring party **tomorrow**. They are hiring a
creative director, not an agency, which is why this fork exists at all and why
the I-voice is the whole point rather than a polish item. He needs one shot. He
has been through a site with hundreds of reworks and will not do it again.

## What "done and good" looks like
A hiring manager opens the link on a laptop and on a phone, reads work that is
plainly DJ's, and never once sees a sentence that sounds like a studio brochure
or a sentence that is factually wrong about who did what. Nothing on the page
claims credit that belongs to someone else, and nothing hides credit that is
his. The design is quiet and confident and does not call attention to itself.

That is the outcome. How you get there is yours, EXCEPT the homepage structure,
where DJ gave a direct instruction on 2026-08-12:

> "I still want the homepage to feel somewhat similar. think of this like
> taking the structure from the site and reskinning it to make it for DJ
> the CD."

## The homepage: reskin, don't redesign
The current `src/dj/` homepage (hero-left/photo-right, switcher on top) is
Opus's layout, NOT what DJ asked for. Treat it as scaffolding to replace.

The structure to preserve is the monuments homepage. Measured from the built
page (not from memory), its skeleton in order, with grounds:

| # | band | ground | what it is |
|---|------|--------|------------|
| 1 | `.hero` | ink | Full-frame hero, DJ's real PNG lockup "SIGHT SOUND AND EMOTION · the creative portfolio of DJ Ramirez", intro para lower-left, "Let's talk" + "See the work" at the feet |
| 2 | `.trusted` | paper | "Trusted by the best." + brand logo grid |
| 3 | `.rr` | ink | The PLAY reel reveal (ReelReveal.astro), pinned scroll |
| 4 | `.paper > .reel` | paper | "Built to scale." + the case-study reel/cards (RecentProjects) |
| 5 | `.paper > .caps` | paper | capabilities strip |
| 6 | `.paper > .tiles` | paper | tile row |
| 7 | `.tst` | ink | testimonials theater |
| 8 | `.clc-ink` | ink | ClosingCTA: "Being forgettable is expensive" kicker |

Note the hero already says "the creative portfolio of DJ Ramirez". The
monuments homepage is closer to a personal site than the fork assumed. The
reskin is: same bands, same order, same motion systems (the reveal, the reel,
the pinned scroll all live in shared components and PageFooter and come along
for free), with studio identity swapped for DJ's and We-copy swapped for I.

Reskin decisions per band (chrome comes from `src/data/site.js`):
- 1: keep the hero structure and the lockup discussion is DJ's call. The intro
  para under it is We-voice studio copy and needs the I rewrite.
- 2: keep. "Trusted by the best." works unchanged for a person.
- 3: keep the reel as-is. It is DJ's reel.
- 4: keep the case reel; it reads from work.js which both sites share.
- 5: capabilities strip is studio-scoped ("what we do"). Either reframe as
  "what I bring" (the approved /hire list exists in `src/data/dj-variants.js`)
  or drop the band; keep the page's light/dark rhythm either way (no two
  adjacent light bands, DJ's flow rule, checked by tools/flowcheck.mjs).
- 6-8: keep; ClosingCTA kicker set is LOCKED (one of the 3 approved pairs).
- The audience switcher (/production /direction /strategy) is DJ's own idea
  and stays, but as a quiet element inside the existing structure, not a
  band of its own.

Salvage from `src/dj/_blocks/`: the Refs (three letters), Stats, Archive, and
Contact blocks contain verified copy and can slot into this structure where
they fit; the variant routes should re-lead the same monuments-shaped page,
not a different layout.

Verify against the real thing side by side: monuments serves at :4326
(`monuments-built` in launch.json), the dj build at :4325 (`djthecd`).
Screenshot both at 1440 and 390 and compare band by band.

## Non-negotiable invariants
1. **Other people's words are never altered.** Seven recommendation letters and
   client quotes. `node tools/djcheck.mjs dist` proves this per build and is
   currently green. If you change how copy is processed, run it again.
2. **No We-voice on djthecd, and no djthecd identity on monuments.** Both
   directions are checked.
3. No em dashes. No placeholder copy. Both checked.
4. **monuments.cc must stay byte-identical in identity.** It is DJ's live-ready
   studio site and is not in scope. Verified unaffected as of this commit:
   94 pages, wordmark/email/cut-pages all intact.

## State, with evidence rather than assertion
Run these; do not take my word for any of it.

- `SITE=dj npx astro build` → exits 0 with `DJ_AUDIT=warn`, exits 1 otherwise
  because the We-leak gate is holding. That exit 1 is correct, not a bug.
- `node tools/djcheck.mjs dist` → 22 pass, 0 fail.
- `npx astro build` (no SITE) → monuments, 94 pages, unaffected.
- Visually confirmed at 1440 and 375 on the homepage only. Every other page is
  unlooked-at. That is a real gap, not a formality.

**Open, enumerated as data:**
- `tools/dj-report/leaks.md` — 60 We-markers in prose.
- `tools/dj-report/unhandled.md` — 203 "DJ"/"he"/"his" mentions.
- `tools/dj-report/dead-rules.md` — currently 0, and the build fails if it
  is ever non-zero.

## The copy work, which is yours to judge
Roughly 20 paragraphs need real rewriting, not substitution. The team rule I
applied is **Claude's default, not DJ's ruling**, and he explicitly left it open
("we might need to case by case it"):

- Art of Visuals era → "my team at Art of Visuals" / "my team and I". He was
  the Creative Director there; it was his team to lead.
- CWI and Monuments-era → "my team and I".
- Against, OMEK, Frame by Frame, MGX → **name the partner, never "my team"**.
  Someone else's shop. This is the claim a hiring manager can check.
- In-house pre-AOV (Buck the Quo, Drake Cooper) → "the team and I".
- Solo hires (Waffle Me Up, Donut, On Camera) → plain "I".

DJ's own words on this, 2026-08-12: *"the copy needs to say I but who I worked
with and the team can remain the same... Partners, agencies, collaborators all
need to remain from monuments, just language can change."*

**Two traps in the copy, both live:**
- Flashpoint's `"We got you"` is **billboard copy**. It is the campaign line.
  Do not convert it. Same for Turnstile's `"We mean business,"` which is the
  brand's line inside quotes.
- Of the 24 quote-styled blocks on the site, only 7 are real people. The rest
  are editorial pull-quotes in the site's own voice and DO need I-voice. The
  protection layer currently shields all 24, which means some pull-quotes are
  staying We when they should not. `tools/protected-quotes.json` has the list.

## Where Opus was weak, since DJ asked
Read this as a list of things to distrust in what I left you.

1. **I reported progress before verifying it.** I announced "202 voice changes
   applied" while those changes included sentences I had broken. Assume any
   number I quote needs re-derivation.
2. **I hand-rolled instead of checking prior art.** I built a regex voice
   transform over narrative prose. It produced hybrids like *"I led Adorama
   Music... He set the strategy."* DJ's own `docs/COPY-SYSTEM-PLAN.md` already
   warned against exactly this. That transform is now deleted; the report-only
   remnant is in `src/lib/dialect.mjs`.
3. **I shipped a silent-failure bug.** Astro escapes apostrophes to `&#39;`, so
   every replacement containing one matched nothing and reported nothing. Now
   fixed: replacements try both forms, and one that matches nowhere **fails the
   build**. If you add replacements, that gate protects you.
4. **I did not look at the site for most of the session.** I judged a website
   from HTML strings. Only the homepage has been seen.
5. **Taste.** I can make the voice defensible and factually clean. I cannot
   tell defensible from good, and this site exists to get him hired.
6. **Provenance drift.** I wrote net-new hero copy for `/production`,
   `/direction`, `/strategy` and flagged it only in a code comment. DJ's
   standing rule is that decisions get shown to him as options before they are
   baked. Those three ledes are unapproved and should go in front of him.

## Architecture notes you will want
- `src/data/site.js` is the **only** place `SITE` is read. Keep it that way.
- The dj homepage is injected at `/_djhome` and promoted to `/` in
  `astro:build:done`, deliberately: injecting at `/` collided with the
  monuments homepage and Astro warns that becomes a hard error.
- Copy that differs per site belongs in **data with a stable key**, not in a
  build-time text transform. That was the agreed architecture and it is the
  half I did not finish.
- The prose is currently inline in the 19 `.astro` case pages, which is why
  duplicating page files was rejected: design churn runs ~2.6x prose churn in
  this repo, and duplication would double every design edit forever.

## Two working instructions
Before reporting progress, audit each claim against a tool result from this
session. Only report work you can point to evidence for; if something is not
verified, say so.

Do not restate your reasoning in response text. If DJ needs to see the thinking,
show the artifact or the tool output.

## The one thing only DJ can do
Create the second Vercel project: import the same repo, set `SITE=dj`, attach
the domain (he owns djthecd.com). Without it there is no URL to send tomorrow.
This blocks the deadline and nothing else can substitute for it.
