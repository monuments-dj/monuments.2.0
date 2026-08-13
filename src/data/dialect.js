// ============================================================================
// DIALECT DATA · every judgment call in the monuments -> djthecd voice flip.
// ----------------------------------------------------------------------------
// The mechanical "DJ directed -> I directed" work lives in src/lib/dialect.mjs.
// THIS file holds the sentences a regex must never guess at: every We.
//
// DJ'S RULING 2026-08-12, his words:
//   "the copy needs to say I but who I worked with and the team can remain the
//    same. I led as either CD or I wokrred on a team exectung the project.
//    Partners, agencies, collborators all need to remain from monumnets, just
//    language can change."
//
// THE TEAM RULE IS DEAD. DJ'S RULING 2026-08-12 (reviewing the voice cards),
// his words: "On DJ at the CD, there should be no team. It's just me."
//   · every "my team and I" / "the team and I" / "my team at X" -> plain I
//   · partners, agencies, collaborators STAY NAMED (his earlier ruling above):
//     Art of Visuals, Against, OMEK, April Frame, Tess, Claire LeJune remain
//     as facts; only the possessive team VOICE is gone
//   · crew-scale facts stay ("a crew of five to twenty", "creatives led"):
//     they are production reality and part of the approved pitch, not voice
//   · other people's words keep their "team" (letters, client quotes)
// ============================================================================

// --- chrome: applied to the whole document, attributes included --------------
export const chromeSwaps = [
  ['monuments.cc@gmail.com', 'dj@djthecd.com'],
  ['https://monuments-2-0.vercel.app', 'https://djthecd.com'],
  ['M<i>✳</i>NUMENTS', 'DJ<i>✳</i>RAMIREZ'],
  // covers og:site_name and any other content="Monuments" meta
  ['content="Monuments"', 'content="DJ Ramirez"'],
  // ── the full identity sweep (DJ 2026-08-13: "scan for any other monuments
  //    artifacts, make it all djtheCD, make the favicon a D") ────────────────
  // titles on every page (case pages, work, about, contact, 404, xm5 lowercase)
  ['· Monuments</title>', '· DJ Ramirez</title>'],
  ['· monuments</title>', '· DJ Ramirez</title>'],
  // og:title metas
  ['· Monuments">', '· DJ Ramirez">'],
  ['· monuments">', '· DJ Ramirez">'],
  // case-page meta descriptions
  ['A Monuments case study by DJ Ramirez.', 'A case study by DJ Ramirez.'],
  ['DJ Ramirez for Monuments.', 'DJ Ramirez.'],
  // page kickers ("Work · DJ Ramirez · Monuments" -> "Work · DJ Ramirez")
  [' · Monuments</span>', '</span>'],
  // the case-file archive stamp on all 19 work pages
  ['>Monuments<small', '>DJ Ramirez<small'],
  // contact: copy, aria, and the monuments wireframe M artwork comes off
  ['with Monuments:', 'with DJ Ramirez:'],
  ['On set with Monuments', 'On set with DJ Ramirez'],
  ['<img loading="lazy" decoding="async" class="mwire" src="/brand/m-wire.svg" alt="Monuments wireframe M" width="280" height="297">', ''],
  // about: meta description drops the studio name, crew alt neutralized
  ['He runs Monuments, an independent studio', 'He runs an independent studio'],
  ['alt="The Monuments crew"', 'alt="The crew"'],
  // photography OS9 path bar
  ['Monuments HD : Archive', 'DJTHECD HD : Archive'],
  // giving meta + the hidden legacy-nav links to the pruned /capabilities
  ['The giving side of Monuments.', 'The giving side of DJ Ramirez.'],
  ['href="/capabilities"', 'href="/about"'],
  // share card, favicon, apple icon: the DJ set
  ['/og/card.jpg', '/og/dj-card.jpg'],
  ['href="/favicon.svg"', 'href="/dj-favicon.svg"'],
  ['href="/apple-touch-icon.png"', 'href="/dj-apple-touch.png"'],
];

// --- loglines + prose that appears on more than one page ---------------------
export const globalCopy = [
  // adorama-music
  ['Adorama brought us in to launch a whole new category: Adorama Music.',
   'Adorama brought me in to launch a whole new category: Adorama Music.'],
  // cwi
  ['so we made starting the whole point. DJ directs and cuts the campaign, and runs the set:',
   'so I made starting the whole point. I direct and cut the campaign, and run the set:'],
  // msi
  ['MSI built a laptop for creators, and we launched it on Times Square digital boards',
   'MSI built a laptop for creators, and I launched it on Times Square digital boards'],
  // buck the quo
  ['Disguised as a retail popup, we challenged teens',
   'Disguised as a retail popup, I challenged teens'],
  // sony this moment
  ['We cast three creators who filmed their own BTS',
   'I cast three creators who filmed their own BTS'],
  // turnstile
  ['What we built took it from a group of products to a brand.',
   'What I built took it from a group of products to a brand.'],
  // ac boise (Against is someone else's shop: name it, do not absorb it)
  ['so we shot the kit across six iconic locations around town',
   'so I shot the kit with Against across six iconic locations around town'],
  // clothing + merch
  ['Most merch is a logo on a blank. We design things people still wear',
   'Most merch is a logo on a blank. I design things people still wear'],
  // on camera (third person he/his -> I)
  ["DJ directs, but he's just as comfortable on the other side of the lens.",
   "I direct, but I'm just as comfortable on the other side of the lens."],
  ["He's carried a brand's voice with the red light on",
   "I've carried a brand's voice with the red light on"],
];

// --- per-page, keyed by a substring of the route ----------------------------
// THE VOICE PASS (2026-08-12). Every entry is a full-sentence rewrite, never a
// word-swap: the regex transform is dead because pronouns downstream of a match
// stay third person and produce broken English. Voice is plain I everywhere
// (DJ's no-team ruling above); partners stay named; every pair is a review
// card for DJ - revert any pair by deleting it.
// Real people's words are never in this file. The djcheck gate proves that per
// build against the letters themselves.
export const perPage = {
  // /giving · the approved Section G cards (DJ 2026-08-13 "bake the giving
  // page"). Crew-scale stays; the pull quote splits around its serif span.
  'giving': [
    ["A few times a year, that is exactly where we point it.", "A few times a year, that is exactly where I point it."],
    ["creative for causes we believe in", "creative for causes I believe in"],
    ["We are not a foundation and we are not pretending to save the world. We are a studio that happens to be good at making people feel something", "I'm not a foundation and I'm not pretending to save the world. I'm just good at making people feel something"],
    ["So we set aside real time for work that pays nothing", "So I set aside real time for work that pays nothing"],
    ["a few times a year we hand our full toolkit to a cause", "a few times a year I hand my full toolkit to a cause"],
    ["Nobody walks onto a set knowing how it works. We did not. So we keep a door open", "Nobody walks onto a set knowing how it works. I did not. So I keep a door open"],
    ["We have carried cameras through Nepal, Uganda, and across Europe for work that was never about selling anything. Those trips taught us patience", "I have carried cameras through Nepal, Uganda, and across Europe for work that was never about selling anything. Those trips taught me patience"],
    ["We still take that work when it matters, and we bring everything that pressure taught us to it", "I still take that work when it matters, and I bring everything that pressure taught me to it"],
    ["The work that doesn't pay is usually the work we're", "The work that doesn't pay is usually the work I'm"],
    ["Most of what we give happens within driving distance of the two places we call home.", "Most of what I give happens within driving distance of the two places I call home."],
    ["When the story is bigger than us, we go to it.", "When the story is bigger than me, I go to it."],
    ["We are careful with this kind of work. We go in to listen, not to take. The footage belongs to the people in it as much as it belongs to us", "I am careful with this kind of work. I go in to listen, not to take. The footage belongs to the people in it as much as it belongs to me"],
    ["We build monuments.", "I build monuments."],
    ["home towns we show up for", "home towns I show up for"],
    ["[ Why we do it ]", "[ Why I do it ]"],
    ["three ways we put the craft to work", "three ways I put the craft to work"],
    ["We answer to both.", "I answer to both."],
  ],
  '404': [
    ["Tell us what you're building", "Tell me what you're building"],
  ],
  'contact': [
    ["Tell us what", "Tell me what"],
  ],
  'about': [
    ["People ask me what we do", "People ask me what I do"],
    ["We're all handed different tools. Mine was a camera.", "Everyone gets handed different tools. Mine was a camera."],
    ["and around us is a crew that's grown with me", "and around me is a crew that's grown with me"],
    // the three method-band pairs are GONE with the band itself: How-I-work is
    // monuments-only as of DJ's 2026-08-13 ruling, so the We-sentences never
    // reach the dj output (dead-rule gate enforces this stays true)
    ["We have carried cameras through Nepal, Uganda", "I have carried cameras through Nepal, Uganda"],
    ["Those trips taught us patience", "Those trips taught me patience"],
    ["We still take that work when it matters, and we bring everything that pressure taught us to it", "I still take that work when it matters, and I bring everything that pressure taught me to it"],
  ],
  'ac-boise': [
    ["built out with Against. DJ's part was the launch film: he directed the official jersey video", "built out with Against. My part was the launch film: I directed the official jersey video"],
  ],
  'adorama-music': [
    ["DJ led Adorama Music: The Journey as creative director. He set the strategy, directed the photo and video, shot a chunk of the stills himself, and was Adorama's main point of contact", "I led Adorama Music: The Journey as creative director. I set the strategy, directed the photo and video, shot a chunk of the stills myself, and was Adorama's main point of contact"],
    ["The hero film was built to travel. We cut it into shorter spots", "The hero film was built to travel. I cut it into shorter spots"],
  ],
  'art-of-visuals': [
    ["how do we talk to them, what reads as real", "how do you talk to them, what reads as real"],
    ["so we weren't guessing. We were a voice of authority, and we knew the others. We sold strategy and consulting on culture, made the introductions, and managed the influencers", "so I wasn't guessing. AOV was a voice of authority that knew the others. I sold strategy and consulting on culture, made the introductions, and managed the influencers"],
    ["We weren't a vendor renting out a camera crew. We were the translator between brands and the creator world", "I wasn't a vendor renting out a camera crew. I was the translator between brands and the creator world"],
    ["not just a post on ours, focused on", "not just a post on AOV's own, focused on"],
    ["lined up with the a7S III, we shot the headphone commercial on the a7S III", "lined up with the a7S III, I shot the headphone commercial on the a7S III"],
    ["for the XM5 launch we cast influencers as the talent", "for the XM5 launch I cast influencers as the talent"],
    ["came back campaign after campaign and kept us as their AOR", "came back campaign after campaign and kept AOV as their AOR"],
    ["the reason they kept us as their AOR", "the reason they kept AOV as their AOR"],
    ["The audience was mostly there before him.", "The audience was mostly there before me."],
    ["interview series DJ wrote, produced, and shot. He traveled all over", "interview series I wrote, produced, and shot. I traveled all over"],
    ["DJ ran all creative on the agency side, sat in every design and strategy decision, and carried the pitches, the sales, and the client relationships. And he stayed on camera", "I ran all creative on the agency side, sat in every design and strategy decision, and carried the pitches, the sales, and the client relationships. And I stayed on camera"],
  ],
  // boise-schools (added 2026-08-13 with the page). Only two sentences on the
  // page speak about DJ in third person; the credits are a call sheet and are
  // protected, and the logline is written neutral so it needs no pair.
  'boise-schools': [
    ["Stoltz brought DJ in to direct the flagship film for Boise School District's Good Neighbors platform.", "Stoltz brought me in to direct the flagship film for Boise School District's Good Neighbors platform."],
    ["DJ directed the film: two production days in March 2026", "I directed the film: two production days in March 2026"],
  ],
  'blue-cross': [
    ["In partnership with OMEK agency, DJ did creative direction on the campaign: image selection, casting, and a hand on the edits, and he directed the talent on set", "In partnership with OMEK agency, I did creative direction on the campaign: image selection, casting, and a hand on the edits, and I directed the talent on set"],
  ],
  'buck-the-quo': [
    ["DJ came onto Buck the Quo as an in-house creative at Drake Cooper, right at the start of it. He shot and cut the bulk of the photo and video and led the social team", "I came onto Buck the Quo as an in-house creative at Drake Cooper, right at the start of it. I shot and cut the bulk of the photo and video and led the social team"],
    ["his job changed. They put him in the field as a mentor to the teens, because of how he got here. He didn't go to college. He did an advertising internship that put him inside an agency in his early twenties, and they wanted him there to show teens", "my job changed. They put me in the field as a mentor to the teens, because of how I got here. I didn't go to college. I did an advertising internship that put me inside an agency in my early twenties, and they wanted me there to show teens"],
    ["So he went from the main shooter, editor, and social lead to boots on the ground", "So I went from the main shooter, editor, and social lead to boots on the ground"],
    ["DJ mentored the ones chasing a media path", "I mentored the ones chasing a media path"],
  ],
  'cwi-lets-get-started': [
    ["DJ directs and cuts the Let's Get Started program spots", "I direct and cut the Let's Get Started program spots"],
    ["On shoot days DJ runs the set: directing the talent, working with the DP on how it gets shot, and keeping the crew moving with Tess on production, then he takes it into the edit and cuts it for every screen. He frames the students as the heroes and puts the real tools", "On shoot days I run the set: directing the talent, working with the DP on how it gets shot, and keeping the crew moving with Tess on production, then I take it into the edit and cut it for every screen. I frame the students as the heroes and put the real tools"],
    ["Every quarter we make four to six new films with a crew of five to twenty, and DJ builds each one", "Every quarter I make four to six new films with a crew of five to twenty, and I build each one"],
    ["DJ has worked in Idaho education for more than ten years, and he brings that to every round. This one is homegrown, made with hometown friends and a client as fired up about it as he is. Together we're putting Idaho opportunities", "I have worked in Idaho education for more than ten years, and I bring that to every round. This one is homegrown, made with hometown friends and a client as fired up about it as I am. Together with them, I am putting Idaho opportunities"],
    ["which is exactly why this work matters to us", "which is exactly why this work matters to me"],
  ],
  'dw-drums': [
    ["They brought DJ in to answer one question, how do you show a product that lives in two worlds? His answer was to stop choosing", "They brought me in to answer one question, how do you show a product that lives in two worlds? My answer was to stop choosing"],
    ["DW came to DJ with a product that was genuinely hard to explain: one kit that's both a real acoustic set and a full electronic rig. He led it as Creative Director and designer", "DW came to me with a product that was genuinely hard to explain: one kit that's both a real acoustic set and a full electronic rig. I led it as Creative Director and designer"],
    ["DJ landed on the split: tear every layout down the middle", "I landed on the split: tear every layout down the middle"],
    ["Then he designed it out, spread by spread", "Then I designed it out, spread by spread"],
  ],
  'flashpoint': [
    ["We pitched a mark where the O swapped by category", "I pitched a mark where the O swapped by category"],
    ["Six disciplines, one voice. We built the brand book and the standards", "Six disciplines, one voice. I built the brand book and the standards"],
    ["Then we handed it over. Templates, standards", "Then I handed it over. Templates, standards"],
    ["something that kept working after we left", "something that kept working after I left"],
    ["Followers on the channels DJ set up", "Followers on the channels I set up"],
    ["The site DJ built in 2020", "The site I built in 2020"],
  ],
  'know-vape': [
    ["DJ was brought onto Know Vape for the thing he does on every campaign", "I was brought onto Know Vape for the thing I do on every campaign"],
    ["April Frame wrote and shot the spots. DJ directed all six", "April Frame wrote and shot the spots. I directed all six"],
    ["Directing the spots was only half of it. DJ also shot the campaign's stills", "Directing the spots was only half of it. I also shot the campaign's stills"],
    ["He photographed them like they mattered", "I photographed them like they mattered"],
  ],
  'msi-creative-by-design': [
    ["MSI built a laptop specifically for creators. We launched it on Times Square digital boards", "MSI built a laptop specifically for creators. I launched it on Times Square digital boards"],
  ],
  'on-camera': [
    ["the Art of Visuals podcast, and DJ co-hosted it every week", "the Art of Visuals podcast, and I co-hosted it every week"],
  ],
  'sony-flow-state': [
    ["DJ's responsibilities included developing the initial pitch", "My responsibilities included developing the initial pitch"],
    ["He ensured that every aspect of the production aligned with Sony's brand identity", "I made sure every aspect of the production aligned with Sony's brand identity"],
  ],
  'sony-this-moment': [
    ["but it's a feeling we can all relate to", "but it's a feeling anyone can relate to"],
    ["The film follows three creators we cast because they fit the story naturally", "The film follows three creators I cast because they fit the story naturally"],
    ["DJ directed the photoshoot, the briefs and the calls on set, and Claire LeJune shot the stills. He creative-directed the system", "I directed the photoshoot, the briefs and the calls on set, and Claire LeJune shot the stills. I creative-directed the system"],
    ["As the creative director on this project, DJ helped shape the story, wrote the briefs, directed the stills, and made sure everything on set matched Sony's brand guides. He also worked closely with the production team", "As the creative director on this project, I helped shape the story, wrote the briefs, directed the stills, and made sure everything on set matched Sony's brand guides. I also worked closely with the production team"],
  ],
  'sony-xm5': [
    ["Setting up the commercials was part of DJ's job, but the main thing he helped with here was the direction", "Setting up the commercials was part of my job, but the main thing I helped with here was the direction"],
    ["His role, along with his AOV team, was to identify influencers", "My role was to identify influencers"],
    ["As Creative Director, DJ wanted to make sure", "As Creative Director, I wanted to make sure"],
  ],
  'sony-xperia': [
    ["For the Xperia PRO-I we opened with a first look film", "For the Xperia PRO-I, I opened with a first look film"],
    ["built on everything the launches taught us", "built on everything the launches taught me"],
    ["We developed a strategy focused on positioning the Xperia 5 IV as a phone that could keep up with any journey. From the start, our goal was to showcase", "I developed a strategy focused on positioning the Xperia 5 IV as a phone that could keep up with any journey. From the start, my goal was to showcase"],
    ["In collaboration with Art of Visuals, we launched Summer with Xperia", "With Art of Visuals, I launched Summer with Xperia"],
    ["While directing the campaign, DJ kept his camera close", "While directing the campaign, I kept my camera close"],
    ["He snapped everything, from the phone handling to those perfect golden-hour shots to candid moments. For him, it was about capturing the vibe of the season", "I snapped everything, from the phone handling to those perfect golden-hour shots to candid moments. For me, it was about capturing the vibe of the season"],
    ["giving DJ time to test the camera, work out any bugs, and understand its strengths so we could maximize its potential", "giving me time to test the camera, work out any bugs, and understand its strengths so I could maximize its potential"],
    ["We transformed the Xperia 5 IV from a smartphone into", "I turned the Xperia 5 IV from a smartphone into"],
    ["Before launch, Sony provided us with early access to the Xperia 5 IV to experience its functionality firsthand. This early look gave us valuable time to test the camera's full range: identifying its strengths, pinpointing areas to troubleshoot, and aligning our strategy", "Before launch, Sony provided early access to the Xperia 5 IV to experience its functionality firsthand. This early look gave me valuable time to test the camera's full range: identifying its strengths, pinpointing areas to troubleshoot, and aligning my strategy"],
  ],
  'turnstile': [
    ["When Turnstile Audio came to us, they wanted a brand identity that struck the perfect balance", "When Turnstile Audio came to Art of Visuals, they wanted a brand identity that struck the perfect balance"],
    ["We took a deep dive into the world of vintage audio brands, looking at what made them iconic and enduring. With that inspiration in mind, we set out to build a brand identity", "I took a deep dive into the world of vintage audio brands, looking at what made them iconic and enduring. With that inspiration in mind, I set out to build a brand identity"],
    ["We went for sleek, geometric shapes and clean typography", "I went for sleek, geometric shapes and clean typography"],
    ["We kept the fonts sharp and straightforward, opting for", "I kept the fonts sharp and straightforward, opting for"],
    ["As for colors, we went for neutral tones", "As for colors, I went for neutral tones"],
    ["By blending a nod to audio legends with a modern twist, we helped create a brand", "By blending a nod to audio legends with a modern twist, I helped create a brand"],
  ],
  'waffle-me-up': [
    ["Working closely with the team, we took a deep dive into their brand story", "Working closely with their team, I took a deep dive into their brand story"],
    ["Then we tackled the digital space, building out a streamlined online store", "Then I tackled the digital space, building out a streamlined online store"],
    ["DJ initially designed their logo when they opened their first storefront", "I initially designed their logo when they opened their first storefront"],
    ["they came back to him to reimagine their identity", "they came back to me to reimagine their identity"],
    ["DJ directed and shot a series of editorial-style brand images", "I directed and shot a series of editorial-style brand images"],
  ],
  'clothing-merch': [
    ["For a range of clients, DJ has designed clothing and merch that connects with their brand story", "For a range of clients, I have designed clothing and merch that connects with their brand story"],
    ["From concept to production, we make sure each piece reflects not just a logo or a message, but a meaningful extension of the brand itself. Whether we're designing it, printing it, or marketing it, we know what works in the space", "From concept to production, I make sure each piece reflects not just a logo or a message, but a meaningful extension of the brand itself. Whether I'm designing it, printing it, or marketing it, I know what works in the space"],
    ["We get to know each audience and what they'd actually wear", "I get to know each audience and what they'd actually wear"],
    ["By blending design with purpose, DJ has helped clients turn their merch lines into", "By blending design with purpose, I've helped clients turn their merch lines into"],
  ],
};

export function replacementsFor(page) {
  const out = [...chromeSwaps, ...globalCopy];
  for (const [key, list] of Object.entries(perPage)) {
    if (page.includes(key)) out.push(...list);
  }
  return out;
}
