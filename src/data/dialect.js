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
// THE TEAM RULE (Claude's default, 2026-08-12, NOT yet DJ's word - he said
// "leaning on your recommendation... we might need to case by case it", so
// every line below is a review card for him):
//   · Art of Visuals era  -> "my team at Art of Visuals" / "my team and I"
//     (he was the Creative Director there; it was his team to lead)
//   · CWI / Monuments era -> "my team and I"
//   · Against, OMEK, Frame by Frame, MGX -> NAME THE PARTNER, never "my team"
//     (someone else's shop; "my team" is the claim a hiring manager can check)
//   · in-house pre-AOV (Buck the Quo, Drake Cooper) -> "the team and I"
//   · solo hires (Waffle Me Up, Donut, On Camera) -> plain "I"
// ============================================================================

// --- chrome: applied to the whole document, attributes included --------------
export const chromeSwaps = [
  ['monuments.cc@gmail.com', 'dj@djthecd.com'],
  ['https://monuments-2-0.vercel.app', 'https://djthecd.com'],
  ['M<i>✳</i>NUMENTS', 'DJ<i>✳</i>RAMIREZ'],
  // covers og:site_name and any other content="Monuments" meta
  ['content="Monuments"', 'content="DJ Ramirez"'],
];

// --- loglines + prose that appears on more than one page ---------------------
export const globalCopy = [
  // adorama-music
  ['Adorama brought us in to launch a whole new category: Adorama Music.',
   'Adorama brought my team at Art of Visuals in to launch a whole new category: Adorama Music.'],
  // cwi
  ['so we made starting the whole point. DJ directs and cuts the campaign, and runs the set:',
   'so my team and I made starting the whole point. I direct and cut the campaign, and run the set:'],
  // msi
  ['MSI built a laptop for creators, and we launched it on Times Square digital boards',
   'MSI built a laptop for creators, and I launched it with my team at Art of Visuals on Times Square digital boards'],
  // buck the quo
  ['Disguised as a retail popup, we challenged teens',
   'Disguised as a retail popup, the team and I challenged teens'],
  // sony this moment
  ['We cast three creators who filmed their own BTS',
   'My team and I cast three creators who filmed their own BTS'],
  // turnstile
  ['What we built took it from a group of products to a brand.',
   'What my team and I built took it from a group of products to a brand.'],
  // ac boise (Against is someone else's shop: name it, do not absorb it)
  ['so we shot the kit across six iconic locations around town',
   'so I shot the kit with the team at Against across six iconic locations around town'],
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
// (filled in from the build report: every unhandled We/DJ gets a ruling here)
export const perPage = {};

export function replacementsFor(page) {
  const out = [...chromeSwaps, ...globalCopy];
  for (const [key, list] of Object.entries(perPage)) {
    if (page.includes(key)) out.push(...list);
  }
  return out;
}
