# Work Pages — Running Copy Doc

Log-as-we-go doc. Each page gets written here as it closes. Hand this (or a partial version) to Claude Code anytime.

## Project brief

- Purpose: DJ's portfolio site is a hiring tool — audience is agencies, marketing managers, and creatives.
- Process: DJ dictates strategy and talks through campaigns; Claude extracts what's working/not working in the current copy and rewrites at creative-director level.
- Voice: insight-led, third person for the studio ("we"), honest about pitched-vs-shipped. Show thinking, not just deliverables.
- Every page should carry a thesis (the insight), the craft decision (the mark/system), and proof it landed (outcome/asset).

## LOCKED FACTS — never re-ask, never re-litigate

- NO EM DASHES anywhere in site copy (Addendum 02 rule). All copy in this doc is em-dash free; Code must grep for them after applying.

- Creator Clubhouse podcast: **30K monthly listeners**. Not 300K, not 16-30K. 30K. Every instance sitewide gets this number.
- Flashpoint categories: three, color-coded. Blue = Lighting, Yellow = Studio Gear, Red = Accessories.
- Xperia: five launches over four years; content exists for three (PRO-I, 1 III, 5 IV summer). Only PRO-I has metrics (3.6M / 569K / 15.54%). Never blend or invent numbers.
- Blue Cross: cast professional talent (not customers). Four-year stills campaign. OMEK never sized.
- Know Vape: April Frame (person) wrote + shot the spots; Frame by Frame is her company; she is credited by name. DJ directed the six spots and shot the campaign stills — that is the entire role claim. Ran in movie theaters, TV, and social. Emmy stated exactly twice on the page.
- On Camera audiences: AOV Instagram = 1.7M followers. Featured on Sony Electronics' page — say "featured on their page," NO follower number for Sony (8M is dead per DJ). Never claim audiences as DJ's own following — always attributed. The blended "2 million+ followers" claim is dead.

---

## Flashpoint (Adorama) — /work/flashpoint

**Status:** Copy closed. All sections recovered below.

**Card title:** Adorama: From the box to the billboard
**Hero:** Currently "Imagine. Illuminate. Create." (Flashpoint's tagline, written by DJ). Open choice: keep tagline vs. replace with page thesis. Not a blocker.

### The insight — FINAL

Stop selling flashes. Start owning the studio.

Flashpoint was a flash brand. Good gear, better than its price suggested, but the brand was pointed at one shelf. Adorama's own sales data told a bigger story: people were buying Flashpoint for everything. Stands. Sandbags. Modifiers. The pieces nobody photographs but everybody owns.

So the rebrand's job wasn't a fresh coat of paint. It was permission to expand. Build an identity that could live on a flash, a light stand, and a shipping box, and Flashpoint stops being a product line and starts being the brand your whole studio is made of.

### The mark — FINAL

Type-first, because it has to survive the factory.

We pitched a mark where the O swapped by category, a Phillips head here, a set screw there. The client liked it, but the system that shipped is more durable: the wordmark stays fixed and color does the sorting.

Blue is lighting. Yellow is studio gear. Red is accessories. Every product sits on a colored disc, so a shelf of Flashpoint reads as one brand from across the room and still tells you what you're holding when you pick it up.

The wordmark is typographic on purpose. Simple enough that a manufacturer can stamp it, mold it, or print it at any size without the system breaking. The O never becomes a gimmick. It just becomes the circle everything else lives inside.

### The system — FINAL

From the box on the shelf to the billboard on the street.

Identity, packaging, product, messaging, web, OOH. Six disciplines, one voice. We built the brand book and the standards, then designed hundreds of packages against them, enough to seed the system and prove it held.

Then we handed it over. Templates, standards, and a line Adorama could run themselves. The point was never to design every box forever. It was to build something that kept working after we left.

### The outcome — FINAL

Adorama read the sales data, saw what Flashpoint could become, and kept building. The private label became a powerhouse in the studio world.

### Quote — FINAL

"A brand for the whole studio, not just a logo on a flash."
The shift the rebrand was built on

### Category color system (reference)

Three categories: Blue = Lighting, Yellow = Studio Gear, Red = Accessories. Color sits behind the product as a disc; the O promoted from letter to brand shape (discs, FP circle mark, tiled site-hero pattern are all the same move).

### Handoff notes for Claude Code

- Do NOT attempt to fetch the Dropbox link — it requires auth and returns HTML, not files. DJ downloads/exports the assets manually into the project.
- DJ exports the needed brand-book and packaging pages as PNGs and drops them in `src/assets/work/flashpoint/`. This doc specifies which image goes where.
- Dropbox source (reference only): https://www.dropbox.com/scl/fo/xochmvxqnwpan63uqdbmi/AHlvkHx_YCriW_wDnVDBsNE?rlkey=31t6jfif85b5yv1e0estavuj0&dl=0

### Asset placement plan

Folder structure: `src/assets/work/flashpoint/`
Filenames: flashpoint-brandbook-01.png … -16.png (brand book spreads, 3840x2160), plus packaging PDF spreads and Flashpoint site screenshot (filenames TBD once placed).

Placement on /work/flashpoint:

- flashpoint-brandbook-09.png ("Flashpoint is an everyman brand") → under The insight
- flashpoint-brandbook-05.png (color palette) → The mark
- flashpoint-brandbook-02.png and -03.png (wordmark, mark usage) → supporting The mark
- flashpoint-brandbook-12.png (billboard) → The system
- flashpoint-brandbook-11.png (print one-sheet) → with the packaging claim
- Site screenshot (STUDIO GEAR hero) → under The insight, caption along the lines of "Flashpoint's own site, after: not a flash brand anymore." It's the argument landing, not asserted. Also the best single image of the system working — belongs in The mark section too
- Brand book color spread + packaging grid → DJ exports as PNGs; packaging spreads support The system's "hundreds of packages" claim
- Existing gallery keeps its 16 product frames. Additions, not replacements.

### Notes / open items

- Pitched-vs-shipped story in the mark section is an asset, not a caveat — shows optimizing for the system working, not the idea surviving. Keep.
- The O as standalone graphic device: tiles into pattern (site hero), disc behind product, FP circle mark — all the same move. Captured in the final mark section's closing line.
- Sub-headline on Flashpoint's site: "TOOLS THAT WORK AS HARD AS YOU" — the messaging half of the rebrand, currently mentioned nowhere on the page. Open: work it into The system or the outcome, or leave off.
- [ ] Hero decision: keep "Imagine. Illuminate. Create." (client tagline, DJ's line) vs. replace with page thesis. Card title stays "Adorama: From the box to the billboard" either way.
- [ ] Third-person cleanup notes (if any beyond what's applied — likely already applied in final copy above)

---

## Sony Xperia — /work/sony-xperia-summer

**Status:** CLOSED. Stat row, PRO-I paragraph, and The strategy all FINAL (strategy approved by DJ). Partnership edit + early-bird dedup specified below.

### Existing page (verified against Drive export "Monuments · Site Copy (proofreading)", 2026-07-06)

Four body sections: The partnership, The strategy, The direction, The early bird. Stat row: 3.6M / 569K / 15.54% with footnote "Measured on the Xperia PRO-I launch, the same partnership · industry calls 3.5 to 6% high · AOV channels + amplification."

Current copy worth keeping (mostly fine): The partnership section already tells the launch run (PRO-I: A Cinematographer's Dream first look + 6 months of content; 1 III: first look, doc shot on the phone, Sedona takeover, 24 hrs in NYC; then Summer with the 5 IV) and attributes the numbers.

What's weak: "The ultimate adventure companion" / "a phone that could keep up with any journey" — a claim any phone brand could make. The early-access story appears TWICE (in The strategy and The early bird) — consolidate. Quote section ("We transformed the Xperia 5 IV...") is self-attributed puffery, attributed to "The campaign impact."

### Stat row — FINAL

The run · Five launches, four years
PRO-I · 3.6M impressions · 569K actions · 15.54% engagement
Scope · Films, stills, gear reviews, travel, a summer
Upstream · Focus groups with Sony's product team

Footnote: Industry calls 3.5 to 6% high.

Rule: launch-by-launch, no blended numbers. Only the PRO-I has receipts; the rest of the row carries scope, not faked metrics. Quietly proves retention: Sony came back because the last one worked.

### PRO-I paragraph (body) — FINAL

The PRO-I launch is the one with numbers attached: 3.6 million impressions, 569 thousand actions, and a 15.54% engagement rate against an industry benchmark of 3.5 to 6.

(Stated once, in context, tied to the campaign that earned it. No blending, no footnote apology.)

### Strategy raw material — DJ's dictation

- Problem: creators are attached to iPhones. Sony was innovating hard — phones creators could actually use, with cameras genuinely better than any other phone camera.
- The interesting shift: Xperia as companion device for creators. Match a color profile from the Xperia to a Sony a7S / a7S III / Venice, so the phone works as a B-cam for a high-end cinema camera.
- Pro features: live streaming, RAW and log shooting formats, removable SD cards — pros on the go could do professional work.
- Screens punching way above their weight class; strong battery life.
- Upstream involvement: focus groups with Sony's product/technical team.

### Launch count — SETTLED

Five launches over four years. Content exists for three: PRO-I, 1 III, Summer with the 5 IV. Stat row says "Five launches, four years"; the body shows the three with content. The partnership section must be updated — it currently reads as if the run was only three.

### The strategy — FINAL (approved)

Not a better iPhone. A second camera.

Creators are welded to their iPhones, and Sony didn't pretend otherwise. The play was smarter: stop competing for the pocket and start competing for the camera bag. The Xperia matches its color profile to a Sony a7S III or a Venice, so the phone stops being a phone and becomes a B-cam for a cinema rig. RAW and log shooting. Live streaming. A removable SD card. A screen and battery punching above their class. Tools for pros doing professional work on the move.

That's the story we built the run around: not "this phone has a great camera," but "this phone earns a spot in a working pro's kit." And it started upstream, in focus groups with Sony's product team, before there was anything to shoot.

(Replaces "The ultimate adventure companion" section. The early-access paragraph moves out — it lives in The early bird, killing the current duplication.)

### The partnership — EDIT NEEDED

Current first line names three launches. Change to own the full run, e.g.: "Sony kept coming back to Art of Visuals for its Xperia launches, five of them over four years, and I creative directed the run. Three live on this page: the PRO-I, the 1 III, and a summer with the 5 IV." Rest of section (PRO-I detail, 1 III detail) stays.

### Remaining notes for Code

- The direction + The early bird: light tighten only, no rewrite needed
- [ ] Quote section: "We transformed the Xperia 5 IV..." is self-attributed puffery ("The campaign impact") — replace or reattribute
- [ ] Numbers for 1 III and 5 IV don't exist — confirmed; never invent or blend

---

## Art of Visuals — /work/art-of-visuals (FLAGSHIP)

**Status:** Copy assembled, em dashes purged. Awaiting DJ sign-off on the full assembled read.

### DJ's dictation (source material)

AOV when DJ joined: community with massive audience, pushing 2M. Mostly influencer-based work — distribution on own channels, sometimes creating, sometimes reposting + giveaways. DJ turned the channel into an agency: work brands could post, run as ads, share on their channels. Community side still ran and grew; DJ's charge was all creative on the agency side — interfacing with brands, pitching, making sales, managing the team, day-to-day. Team: five creatives core, plus crew/designers brought on per production. Weekly content for brands — some on AOV channels, some on brands', some as ads. Clients in China, Japan, New York, LA, San Diego. Roster: Lexar, MSI, WANDRD (confirmed — the bag co.), Peak Design, Adorama, Sony. Narbox KILLED (likely out of business — never name).

### The thesis shift

Old story: "I grew the agency 4x" (a number with no mechanism). New story: "I turned a 2M-follower community into an agency" — the 4x is the receipt, not the headline. Honest correction: DJ did NOT build the 2M audience (meta description currently claims he did); he built the business on top of it.

### Meta description — FIX

"I grew the agency 4x as creative director, building the brand, the content, and a 2M+ creator community" → "Art of Visuals: how a 2M-strong creator community became a working agency. I led creative as we grew revenue 4x. A Monuments case study by DJ Ramirez."

### Hero — FINAL (picked by DJ)

From community / to agency.

Sub stays: "Not one campaign. A book of business."

(RULE: "I grew the agency 4x" never ships anywhere. The team grew it; DJ led creative.)

### The number — REWRITTEN (v2, from full dictation)

Not one campaign. A book of business. *(heading kept)*

When I joined Art of Visuals, it was a community page with a massive audience, pushing two million, sharing inspiration, reposting, and running giveaways. Every piece of work lived on AOV's own channels.

Four years later it was a working agency: commercials with budgets north of $200K, influencer campaigns with the biggest voices in tech, an MSI campaign that launched in Times Square, and a global client roster. Revenue was 4x.

The audience was mostly there before me. Some of the brands were too. What changed was how we engaged them: bigger pitches, more multi-platform work. The agency is what we built, and the creative was my lane.

### The insight — NEW SECTION (the flagship thesis)

Brands don't know how to be cool. That's not an insult. It's a market.

Sony and MSI would show up with a product built for creators and the same questions every time: how do we talk to them, what reads as real, which voices actually matter? AOV had the audience, the data, and years of making the content, so we weren't guessing. We were a voice of authority, and we knew the others. We sold strategy and consulting on culture, made the introductions, and managed the influencers.

That's why the work compounded. We weren't a vendor renting out a camera crew. We were the translator between brands and the creator world.

### How it happened — REWRITTEN (v2)

A community, turned into a creative business. *(heading kept)*

The offer: everything culture touches. Retainers, campaigns, one-off ads, distribution on AOV's channels, strategy and consulting. Weekly content that lived on brands' channels and in their ad accounts, not just a post on ours, focused on the outdoor space and consumer electronics.

The wins: Sony, Adorama, MSI, Intel, Lexar, Peak Design, WANDRD. Clients from LA, San Diego, and New York to Japan and China. By the end: $200K+ commercials, and an MSI campaign launching in Times Square.

The team: my direct reports ran through the video team. Two editors on staff, or a shooter and an editor, scaled with crew and designers for every production. I ran all creative on the agency side, sat in every design and strategy decision, and carried the pitches, the sales, and the client relationships. And I stayed on camera: gear reviews, hosting, training, mentoring the team.

The community: it didn't stop being a community. Workshops, meetups, a weekly podcast at 30K monthly listeners. AOV went from a page that shared inspiration to an educational staple in the creator world, which is exactly what made the agency credible.

The smart money: when Sony's XM4 headphones lined up with the a7S III, we shot the headphone commercial on the a7S III, then turned the behind-the-scenes into a second film selling the camera. One shoot, two products, and one of them filmed the other.

The multiplier: for the XM5 launch we cast influencers as the talent. The client walked away with the commercial; the cast walked away with their own content from set, posted to their own audiences. Between AOV's 1.7 million and theirs, one shoot went further than an ad buy ever could: 1.3 million impressions, 118 thousand actions, a 9 percent engagement rate.

The proof: repeat clients. Sony, Adorama, MSI, and Intel came back campaign after campaign and kept us as their AOR because the work performed. That's what multiplied the revenue. Not one hit, clients who came back.

### Stat row — REVISED (v2)

4x · agency revenue growth
2M+ · the community behind the agency
$200K+ · commercial budgets by the end
Roster · Sony · Adorama · MSI · Intel · Lexar · Peak Design · WANDRD

*(Kills "audience scaled." Team detail lives in the body. Times Square lives in the body as a story beat, not a stat cell.)*

### Quote — kept, attribution fixed

"Growth like that is not a lucky project. It is an offer brands keep buying, and creative good enough that the first job turns into the next one."
The agency era, in one sentence
*(fixes "story under the number" duplication with the body)*

### Call sheet — UPDATED

Strategy: Shaped what the agency sold, then packaged it into an offer brands actually bought
Creative direction: Owned all creative on the agency side, first pitch to final delivery
Team: Ran a core crew of five, scaling with crew and designers per production
New business: Turned the community and the reel into a pipeline, the growth engine behind the 4x
Client lead: The point of contact brands trusted, and the reason they kept us as their AOR

### Cross-page notes

- Win #1 corrected to XM4 per DJ's own site (On Camera tape: "Sony Alpha a7SIII Reviewed after shooting Sony XM4 Headphones Commercial").
- Win #2 numbers pulled from /work/sony-xm5 (1.3M / 118K / 9%, 2x+ branded-social benchmark; artists: Gawx Art, Rudy Willingham, Mr B Baby). Full story lives on that page; AOV keeps the short version.
- Per DJ: anything for Sony, Adorama, or MSI was an AOV-era project, and the On Camera tapes + Creator Clubhouse podcast were also AOV. Code may pull stats and content from those case pages onto the AOV page where receipts help, keeping the attribution rules (numbers always tied to the campaign that earned them).

### Sitewide alignment note for Code

Home reel card hover says "4x agency revenue|2M+ audience scaled|Sony · Xperia roster" — change "2M+ audience scaled" to "2M+ community" (same honesty fix), and the roster fragment can stay short.

### Structure note for Code

Page section order becomes: The number → The insight (NEW section, needs a slot) → How it happened → galleries/quote/call sheet. The insight is the flagship thesis; give it the same section treatment as The number.

### Call sheet — UPDATED (v2, replaces earlier call sheet block)

Strategy: Shaped what the agency sold (retainers, campaigns, consulting on culture) and packaged it into an offer brands actually bought
Creative direction: Owned all creative on the agency side, first pitch to final delivery
Team: Direct reports across the video team; scaled with crew and designers per production; mentored on and off camera
New business: Turned the community and the reel into a pipeline, the growth engine behind the 4x
Client lead: The point of contact brands trusted, and the reason they kept us as their AOR

### Resolved (from DJ's second dictation)

- Audience was mostly pre-existing; DJ's focus was building the agency, not the audience. Copy states it flat out: "The audience was mostly there before me. Some of the brands were too. What changed was how we engaged them: bigger pitches, more multi-platform work. The agency is what we built, and the creative was my lane."
- Podcast = same Creator Clubhouse 30K locked fact — numbers consistent across AOV page and On Camera page.
- Verticals: outdoor + consumer electronics. Highlights: $200K+ commercials, MSI campaign launched in Times Square (per DJ — "takeover" killed as verbiage), biggest influencers in tech.
- Direct reports: video team (two editors, or shooter + editor); DJ in every design/strategy decision.

### Resolved (final)

- WANDRD confirmed — the bag co.
- Times Square: it was a big campaign for MSI that launched in Times Square. "Takeover" killed. Copy reads "an MSI campaign that launched in Times Square." 

---

## Turnstile Audio — /work/turnstile

**Status:** CLOSED. Approved by DJ — ship as written.

### DJ's dictation (source material)

DJ helped Adorama land on the name (hedged as "I believe" — copy says "helped land on," never "I named it"). Fix "When Turnstile Audio came to me" → Adorama came to me; Turnstile didn't exist yet. Adorama had a couple of rough names, needed a design direction, had very specific competitors in mind, didn't want to be overly complex or launch product without a strong brand backing it. Since launch, Adorama has added hundreds of products under the Turnstile name — [interpreted:] to glowing reviews.

### Diagnosis of current copy

Element 22 (Word Switcher) tabs shipped with PLACEHOLDER meta-copy ("The setup. What the client came for, in their words…") — describes the content instead of being it. Brief credits the brand DJ invented ("Turnstile Audio came to me"). Phrase repetition: "understated but undeniably cool, a nod to the classics" 2x, "built to last just like the gear" 2x, "quietly amplifies" 2x. Stat row, quote, and galleries are good — keep.

### The brief — FINAL

Crafting a brand that hits all the right notes. *(heading kept)*

When Adorama came to me, Turnstile didn't exist yet. They had a mic line ready, a few rough names, and a clear read on who they were up against. What they didn't want: complexity, or launching gear without a brand strong enough to back it. The ask was balance: clean, simple, inspired by the legendary audio brands of the past, but fresh enough to stand out. Not flashy. Timeless.

I helped them land on the name, then built the identity to earn it. Two weeks to design, iterate, and launch.

*(Scope list: ADD "Naming" to Brand Identity / Logo Design / Brand Positioning / Consulting.)*

### ELEMENT 22 · WORD SWITCHER — replace ALL THREE tab bodies (currently placeholder meta-copy)

Tab 1 — CONCEPT
- Col 1: Adorama came in with a mic line, a few rough names, and a short list of brands they wanted to beat. No identity, no direction, and two weeks on the clock.
- Col 2: **Objectives.** Precision, quality, affordability. Understated, a nod to the classics. The gear is the star; the brand amplifies quietly.

Tab 2 — DESIGN
- Col 1: A deep dive into vintage audio brands, what made them iconic and enduring, then something modern with the right amount of nostalgia, built without trying too hard.
- Col 2: **The build.** One wordmark, three weights. A sound mark that reads across a loud room. A palette of modernized precision.

Tab 3 — DELIVER
- Col 1: Name, identity, content, and campaign, shipped in two weeks. Product photography shot so the metal and the message hit at the same time.
- Col 2: **Since launch.** Adorama has put hundreds of products under the Turnstile name, to glowing reviews.

*(The work section's two paragraphs and Objectives list are ABSORBED by these tabs — delete them from the section body so the content isn't stated twice. "\ The work · Concept. Design. Deliver." heading stays as the element's frame.)*

### Repetition fixes

- Kit intro: "The gear, shot like it sounds. Clean, confident, understated but undeniably cool, a nod to the classics." → "The gear, shot like it sounds: clean, confident, zero fuss." (kills duplicate #1)
- "built to last just like the gear" survives ONCE, in The identity section (The work copy absorbing kills duplicate #2)
- "quietly amplifies" survives ONCE, in CONCEPT Col 2 (duplicate #3 dies with The work paragraphs)

### Quote — unchanged

"A band's gear isn't a product line. It's the sound it makes before anyone plays a note." — The insight behind the identity

### CTA fix for Code

"Let's build something great together" → default CTA band per Addendum 02: ✳ Being forgettable is expensive / Let's build something worth remembering. / Let's talk ↗ (Addendum 02's grep list already kills "great, together" sitewide.)

### Resolved

- It was literally two glowing reviews. DJ approved the "to glowing reviews" line as written anyway — ship. (If those two reviews are ever worth naming — a publication, a big channel — that's an upgrade for later, not a blocker.)

---

## Know Vape — /work/know-vape

**Status:** CLOSED. Surgical pass, not a rebuild.

### DJ's dictation (source material)

Ran in movie theaters, on social, and on TV. Kill some Emmy repetition (currently claimed 4x). Fix voice to "I" throughout (per Addendum 01, never executed). Setup is good: myths Big Tobacco wants people to believe; we were doing truth-telling. DJ was brought on for his experience directing teams and making culturally relevant content for young people. April Frame (her company is Frame by Frame) wrote and shot the spots; DJ directed all six and shot the campaign stills. That is the full role claim: direct + stills photography. Nothing else.

### Rules for this page

- Emmy appears exactly TWICE: stat row + Recognition section. Cut from The challenge and The role.
- "I" voice everywhere in body copy. Meta description may stay third person (SEO).
- Never overclaim: April Frame wrote and shot the spots. DJ directed the six spots and shot the campaign stills. Period.

### The challenge — FINAL (opener paragraph killed; starts at Big Tobacco)

The truth, not a lecture. *(heading kept)*

Idaho's youth vaping crisis was built by Big Tobacco: addictive, easy to hide, fruity-flavored devices aimed straight at kids. And a set of myths the industry needs teenagers to believe. Lectures don't move teenagers.

So Know Vape did the opposite. The series exposed the chemicals, named the way the industry preys on young people, and separated myth from fact, in a voice teens would actually watch. "Be Smart. Don't Start." Real information, on their level, not adults talking down.

*(Killed: the old summary opener "A statewide anti-vaping campaign... DJ directed... won a 2024 Emmy" — redundant, third person, and one of the four Emmy claims.)*

### The episodes — voice fix only

"Each one takes a myth teens actually believe and puts the fact next to it, fast enough to survive a feed. I directed all six." *(already correct — keep)*

### The role — REWRITTEN

Behind the camera. *(heading kept)*

I was brought onto Know Vape for the thing I do on every campaign: directing teams and making work that's culturally native to young people. In this case, teenagers with a two-second scroll reflex. April Frame wrote and shot the spots. I directed all six. Each one had to make a public-health point land in seconds, in a voice a teenager would not scroll past.

*(Emmy claim removed from this section. Honest role split: April Frame wrote and shot; DJ directed.)*

### Distribution — NEW (one line, lives in The episodes section or as a stat)

The spots ran statewide: movie theaters, broadcast TV, and social.

Stat row: replace the 4th cell context line OR add "Ran · Theaters · TV · Social" — Code's call on layout, but the theaters/TV/social fact must appear in the stat row or immediately near it.

### The stills — voice already correct, KEEP including final line

"I photographed them like they mattered, because they do." — KEEP per review (earned by subject).

### Recognition — voice fix

"Know Vape won the 2024 Northwest Regional Emmy for Community Outreach (Small Market), from the NATAS Northwest chapter. The Myth vs Fact spots I directed were part of that campaign, public-media storytelling that met teens where they are and earned its reach."

### Credits — UPDATE

Writer + camera (spots) / April Frame
Production / Frame by Frame (April Frame's company)
Director + Photography (stills) / DJ Ramirez
Brand design + motion GFX / Isabel Sarhad
April Frame MUST be credited by name — non-negotiable.

### Resolved

- April Frame (name), Frame by Frame (her company). Credited by name. DJ's role: directed the six spots + shot the campaign stills, nothing more.

---

## AC Boise — /work/ac-boise

**Status:** REWRITTEN as narrative prose per DJ (first draft was too clipped/fragmented; case studies read as story, not tile copy). Awaiting DJ approval. Verify two crew spellings.

### Style note (applies to remaining pages too)

DJ's feedback: case study body copy should be flowing narrative prose in complete sentences, telling the story plainly. Save the clipped fragment style for heroes, stat rows, and tiles. No jargon, no labeled beat lists in body sections.

### Facts and honesty rules

- No experiential on this project. DJ directed + edited, in partnership with Against (agency). Home reel card retag: "Kit reveal · Film + social" (replaces "Kit reveal activation · Experiential").
- The concept was Against's, brought to DJ. Never claim the idea. Old heading "Directed the reveal, owned the idea" is dead.
- No claims touching kit/jersey design (Hummel's and the club's). Basque story is not DJ's to tell; copy stays out. Gallery frame labels may keep Basque captions (imagery, not claims).
- Crew: Nathan Zanders (DP), Dawson Gutierrez (gaffer) [verify spellings]. ~40 talent. Mayor of Boise appears in the video.

### The idea — FINAL

A jersey drop that belonged to the city.

Boise had never had a soccer team of its own. When AC Boise got ready to reveal its first kits, Against brought me a concept I loved: make the kit Boise. Instead of a product reveal, we would shoot the jersey in the places locals know on sight, so the film would feel like the city looking at itself. Against came to the table with about twenty locations. Together we narrowed them down and dressed each one for the shoot.

### The shoot — FINAL (new section)

Forty talent. One nimble crew.

We kept the crew light and made up for it in preparation. Nathan Zanders was on camera, Dawson Gutierrez ran the lighting, and I directed while also handling props and set design, down to a custom 3D-printed AC Boise chain for one of our talent. We outfitted a tattoo shop, took over a restaurant, and joined a girls' soccer practice. When we couldn't rent the shot we wanted, we built it: a car-mounted camera, GoPros tucked into corners, and an underwater rig I put together myself. At one point we took a ball straight to the lens and kept rolling.

The mayor of Boise appears in the video too. It was my first time directing a mayor, and I had to Google the proper way to address one. For the record, it's Madam Mayor.

### The result — FINAL (new section)

The reveal premiered to a packed theater on launch night, and the client was thrilled with the film. But the result I care about is what happened after. I'm back in Boise now, and the jerseys are everywhere: on errands, at restaurants, out at night. The whole job was making the city want to wear this kit. Walk around town and you can see it worked.

### Structure and cleanup for Code

- Sections: The idea → reel embed → The shoot → gallery → The result → pull quote → credits.
- Brief board Concept cell: "Concept · 'This kit is Boise,' brought to me by Against: the kit as a piece of the city."
- "With Hummel on the kits and Against on the brand" survives ONLY in hero sub + brief board (currently appears 4x).
- Credits add: DP · Nathan Zanders / Gaffer · Dawson Gutierrez / Props + set design · DJ Ramirez.
- Pull quote stays: "Don't reveal a jersey, reveal a piece of the city." Attribution: The idea behind the reveal.

### Assets — TO DO (DJ handles in Claude Code)

- Photos for the page (DJ to gather).
- IG reaction screenshots (DJ to upload) → under The result as a social-proof strip, captioned "The city, replying."

### Open

- [ ] Verify spellings: Nathan Zanders, Dawson Gutierrez.

---

## Buck the Quo — /work/buck-the-quo

**Status:** CLOSED. Best page on the site; surgical pass only. Everything not listed here stays exactly as is.

### Fixes

1. DELETE the first body paragraph of The problem section ("A statewide campaign to lift Idaho's college-going rate... 18,000+ teens chose to have."). It's the meta description pasted into the body, and it claims "I directed the experiential build," which contradicts the NFO ("Shooter + editor"), the credits, and the ledger ("Worked the More In Store retail experience on the ground"). The section now opens at "The usual fix is an adult telling a teen what they should do." Stronger opening anyway.

2. Meta description — REPLACE with: "A statewide campaign to lift Idaho's college-going rate by talking with teens instead of at them. Four years, seven jobs, 18,000+ conversations. A Monuments case study by DJ Ramirez."

3. Site-level repetition resolved: Buck the Quo OWNS "Stop wagging the finger" (structural: They Sayers). Know Vape's line changed from "Finger-wagging does not move a teenager" to "Lectures don't move teenagers" (updated in the Know Vape section above).

### Kept as-is (do not touch)

Hero, triad (I am / I can / I will), stat row (18,000+ / 1 in 2 / 88% / Rockys), the 46% story stat, They Sayers copy, all three activation scenes, My part, the seven-job ledger, gallery, awards, credits. Emmy correctly absent (Rockys only, per locked decision).

### Resolved

- DJ did NOT direct the build. The killed opener's claim was wrong; ledger/credits are the truth (shot it, worked the floor, directed the YouTube show). "Directed the experiential build" never ships. Grep the build for it after applying.

---

## Blue Cross of Idaho — /work/blue-cross

**Status:** CLOSED. All sections final below.

### DJ's dictation (source material)

Friend owns OMEK, hadn't sold work this big before, called DJ to (1) structure the pitch and win the deal; after winning, (2) cast and concept, (3) on set creative directing and directing talent, (4) helped edit down to selects. (5) Worked out a licensing deal with the client — usage was a big part of the campaign. (6) Client re-upped; became a four-year sales campaign.

### Diagnosis of current copy

"I helped with creative direction and assisted in execution" reads junior — helped/assisted language kills ownership. No insight story in the body despite the quote claiming one. No outcome section at all. The real story (pitch-to-selects involvement + licensing + four-year run) is nowhere.

### The brief — DRAFT

Make a health brand feel like the people it serves. *(heading kept)*

When OMEK went after Blue Cross of Idaho, they brought me in to help structure the pitch. We won it. The ask: a campaign that looked like Blue Cross's actual customers. Real people, everyday moments, in the places Idahoans actually live.

*(Reframed per DJ: no sizing of OMEK — "biggest business he'd chased" is killed. The story is DJ gets called in, OMEK made a smart move.)*

### The job — DRAFT

From the pitch on, I stayed in it. *(new heading line — replaces "A week on location, person by person," or keep the old line, DJ's call)*

I helped cast and concept the campaign with OMEK, then spent a week on location creative directing and directing talent: local shops, homes, and the outdoors, person by person. The whole job was keeping it from looking like a health-insurance ad: cast professional talent who felt like Idaho, then direct them out of performance and into the unposed moments the campaign was built on. When the shoot wrapped, I worked the edit with them down to final selects.

### The deal — DRAFT (new section)

The part nobody photographs: usage.

We negotiated the licensing deal alongside the creative, because a campaign built on real people only works if the client can keep using it. Blue Cross kept re-upping. A week of stills became a four-year campaign.

### Role row edit

"Role · Creative direction" → "My part · Pitch · casting + concept · creative direction · edit." Add "Run · Four years" to the cobalt band.

### Quote — unchanged

"Health insurance isn't just about coverage. It's about knowing and caring for people as individuals." — The insight the campaign hinged on

### Resolved

- Subjects were cast professional talent (not actual customers) — copy now owns the craft: casting for authenticity, directing out of performance. Page must NOT claim the people are BCI customers. Note for Code: page meta says "real people, real Idaho" — fine as a look descriptor, but audit any line implying the subjects ARE customers.
- OMEK founder stays anonymous; no sizing of OMEK ("biggest business he'd chased" killed).

### Resolved (cont.)

- "Four-year stills campaign" — confirmed by DJ. Body line reads "A week of stills became a four-year campaign." Cobalt band: "Run · Four years."

---

## On Camera — /work/on-camera

**Status:** CLOSED. Hero, stat row, Element 22 instance, podcast fix, and global fixes all final. Full Code-ready block delivered to DJ in chat; contents below match.

### Current page (verified, export 2026-07-06)

Hero: long run-on paragraph ("Aside from directing, I spend some time in front of the camera as well... 2 million+ followers... 300K+ monthly podcast audience... being brand safe comes natural to me"). Reel wall 12 tapes (stat row says 11 — count mismatch). Creator Clubhouse section claims 300K+ twice more. Call sheet: co-hosts Prince McClinton, Viera Reid.

### Diagnosis

Best hiring argument on the site, buried. The thesis: a CD who can carry the red light — directs talent better because he's been talent, and is the zero-cost brand voice when there's no talent budget. Hero hedges with "some time" and reads as a run-on résumé. Grammar: "comes natural" → "comes naturally."

### MANDATORY FIXES for Code

- Replace EVERY instance of "300K+" with **30K** (hero, podcast header, podcast body). LOCKED FACT.
- Fix tape count: stat row says 11, reel wall says 12 — make consistent (12 per the wall).
- "comes natural to me" → "comes naturally to me" (or line gets rewritten anyway).

### Resolved

- "2M+ followers" is dead. Attributed instead: AOV IG 1.7M; featured on Sony Electronics' page at 8M. The Sony feature IS the brand-safety proof — stated as "featured on their page," no follower number per DJ.

### Hero — DRAFT (awaiting DJ approval)

Most creative directors stay behind the monitor. I'm also the one they hand the mic.

Hosting, presenting, interviewing: gear breakdowns for Sony, campaign films, panels, workshops, and a weekly podcast. Art of Visuals ran my work to 1.7 million followers, and Sony Electronics featured me on their own page. When a brand that size hands you the mic, brand-safe isn't a claim, it's a track record.

### Pull quote — CUT

No quote band on this page. The hero ends on "track record" and the reel wall carries the argument. (Original line and all candidates killed per DJ.)

### Stat row — DRAFT

On camera · DJ Ramirez
Audience · AOV 1.7M · featured by Sony Electronics
Podcast · Creator Clubhouse · 30K monthly
Tapes · 12

### Element 22 (Word Switcher) on On Camera — PROPOSED

Reuse the Turnstile Concept/Design/Deliver word switcher with page-native words: HOST / PRESENT / INTERVIEW (echoes the hero's "hosting, presenting, interviewing"). Placement: REPLACES the intro copy of The wall section (don't stack both — redundant).

Tab copy (two columns per tab, per the element's format):

HOST
- Col 1: The formats: gear breakdowns for Sony, event recaps, workshops, live activations. Somebody has to carry the show and keep the brand safe while doing it.
- Col 2: **The proof.** Twelve tapes below. Press play on any of them.

PRESENT
- Col 1: Campaign films and panels. Presenting work I directed, which is the trick: the pitch voice and the camera voice are the same voice.
- Col 2: **The range.** From a scripted spot to an unscripted stage.

INTERVIEW
- Col 1: Creator Clubhouse, weekly. CMOs and working creatives on the parts that never make the highlight reel: mental health, consistency, relationships.
- Col 2: **The show.** 30K monthly listeners, co-hosted.

If adopted, The wall keeps its heading ("Press play. I show up right on cue.") and loses its two intro paragraphs; the switcher carries that content.

### Podcast section fix

"300K+ monthly listeners · co-hosted" → "30K monthly listeners · co-hosted." Body: "We grew it past 300,000 monthly listeners" → "We grew it to 30,000 monthly listeners." Rest of Creator Clubhouse copy (CMOs, mental health, "minimal gear talk, maximum humanity") is good — keep.
