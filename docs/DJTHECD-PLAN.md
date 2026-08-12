# DJTHECD.COM · researched one-shot plan · 2026-08-02
Provenance: DJ asked "what would this take... lets do some research on
building this as lean and fast as possible" (2026-08-02). 5-agent
research workflow (35 findings: Astro multi-site practice, Vercel
two-project mechanics, solo-CD portfolio research, full repo inventory)
+ synthesis. Status: PLANNED, awaiting DJ's go + his rulings (section 5).

# djthecd.com Build Plan

## 1. THE ARCHITECTURE CALL
**One repo, two Vercel projects, env-flag single Astro app.** Vercel supports multiple projects on one repo natively (25 allowed on Hobby, dashboard-only setup, no repo restructure), and the SITE env-var pattern is the documented standard for static multi-brand Astro. This keeps the 19 case studies as one source of truth: a work.js edit ships to both domains from one push.

What the research says breaks: sprinkling `if (SITE === 'dj')` through components is the number-one documented white-label failure (conditional sprawl, brand leakage). Mitigation is structural: one `src/data/site.js` config module holds every per-site value, djthecd gets its own small page tree for chrome, and a dist-audit script fails the build if a We-voice or Monuments wordmark leaks into the dj output. SSR hostname detection is rejected outright (kills the static build), and a full workspace monorepo is over-engineered for two sites that share nearly every commit.

## 2. THE PAGE SET
- **Port as-is (9):** ac-boise, blue-cross, buck-the-quo, donut-zumiez, dw-drums, know-vape, on-camera, sony-flow-state, sony-xm5. Already dialect-clean; the deterministic "DJ directed" to "I directed" transform handles them mechanically.
- **Port with targeted We-fixes (10):** turnstile (6 sentences, needs rewrite not swap), flashpoint (4), clothing-merch (3), waffle-me-up (2), plus 1-each stragglers. art-of-visuals, sony-xperia, and cwi may need zero edits if DJ rules their collaborative-We stays (his call).
- **Shared data:** 7 We-voiced loglines in work.js (lines 36, 37, 42, 43, 45, 49, 51) need per-line rulings.
- **Chrome flip:** hire.astro is promoted to the djthecd homepage (already I-voice, already the pitch); about.astro flips ~6 sentences; contact flips 2 lines; work and photography hubs swap kickers. Components parameterized once: PageFooter (Person-first JSON-LD), MenuTakeover (links array, drop the Kit link), CallSheet stamp, FooterWordmark word prop.
- **Cut:** capabilities, giving, ai, lab/, work-preview/, Kit pages. Not ported, not rewritten.
- **Net-new:** nothing. The featured-tier curation (5-6 hero cases, rest as compact archive list, per hiring-manager research) is a work.js field plus index layout, not new pages.

## 3. THE ONE-SHOT SCOPE
One focused pass delivers to a preview URL: the site config module, parameterized components, the dj homepage (from hire.astro), flipped about/contact/work/photography, all 19 case pages with the transform applied, standardized credit lines from the engagement tags, per-site canonical/sitemap/og wiring, and the leak-audit script wired into pagecheck.

Deliberately left for DJ's eye (decision surfaces, per his provenance rule):
1. The 7 work.js logline rulings (I vs collaborative-We)
2. Collaborative-We keep/rewrite on art-of-visuals, sony-xperia, cwi
3. The djthecd wordmark (DJTHECD vs DJ✳RAMIREZ)
4. The hire-card copy still flagged as draft
5. Featured-5 selection for the homepage
6. Contact email for djthecd
7. Giving: rewrite as personal values page later, or stay cut

## 4. RESOURCE ESTIMATE
- **One-shot build:** 2 to 3 focused sessions, roughly 6 to 10 hours assistant runtime. Session 1: config module, component parameterization, chrome pages. Session 2: case-page sweep, transform, leak audit, preview deploy. Optional session 3: post-review fixes after DJ's rulings.
- **Ongoing:** near-zero marginal cost. One push updates both sites (2 to 4 min serial build, well inside Hobby limits). New case studies cost the same as today plus one voice check. The tax: every shared-file change now requires verifying two live URLs.

## 5. WHAT THE OWNER OWES
Only DJ can do these:
1. **Buy/confirm djthecd.com** and provide registrar access, or add the A and CNAME records the Vercel dashboard displays (values are per-project now, not the old IPs)
2. **Create the second Vercel project** in the dashboard (import same repo, set SITE=dj, attach domain), or grant access to do it
3. **Rule on the 7 loglines and 3 collaborative-We pages** (quoted words, per the provenance rule)
4. **Pick the wordmark** and approve the hire-card copy
5. **Choose the featured 5 to 6 cases** and the djthecd contact email

## 6. RISKS
1. **We-voice leak on djthecd** in front of a hiring manager. Mitigation: build-failing dist grep for We-markers, Monuments wordmark, and wrong-domain strings on every deploy.
2. **Conditional sprawl degrading the codebase** (documented CSS-leak history). Mitigation: hard rule that SITE is read only in the config module and page-tree selection; fallback is the subfolder second-project variant if it starts fighting.
3. **Transform false positives**: "DJ" in credits, testimonials, and taglines must not become "I" (client quotes, "We got you" billboards, the factual CWI production credit). Mitigation: allowlist/denylist in the transform plus DJ reviewing the full diff once before launch.

## 7. AUDIENCE VARIANTS (DJ's idea 2026-08-02, his words: "depending on
## whos hiring Id love to show variants of the site / homepage leading
## with whats important to them... production, creative director, strategy")
THE MECHANISM: link-addressable variants, not JS personalization.
- The homepage is built from RE-STACKABLE BLOCKS from day one (hero /
  proof reel / featured cases / references / stats / contact). That is a
  session-1 architecture directive, not a later retrofit.
- Three variant routes re-lead the same blocks: /production /direction
  /strategy (plus the neutral /). Static, fast, shareable.
- THE KILLER FEATURE: DJ controls which story each recipient sees by
  which LINK he sends - the RPA application gets /direction, a brand
  gets /production, a pitch gets /strategy. No cookies, no sniffing,
  no cloaking; every variant is honest and public.
- The data already exists: engagement tags pick the featured cases per
  audience (production = crew/AOV film runs + CWI program; direction =
  campaign arcs + Emmy + Tommy's directed-photographer quote; strategy =
  turnstile/waffle brand systems + insight-led sections). Testimonial
  cuts map the same way (Jakke/Tess = production leadership, Tommy =
  direction, Mike = strategy/design outcome).
- A small on-page switcher ("I'm looking for: production · creative
  direction · strategy") lets organic visitors self-select; the sent
  link just pre-answers it.
- Scope: +~half session on top of the base one-shot IF blocks are
  composable from the start.
DJ ADDITIONAL CALLS 2026-08-02: IA + content = the monuments framework
as built; design flexes toward SIMPLE (Katie Hunter whitespace; /ai +
/giving are the seed).
