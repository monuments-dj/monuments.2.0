// ============================================================================
// DJTHECD · THE AUDIENCE VARIANTS (DJ's idea 2026-08-02, his words: "depending
// on whos hiring Id love to show variants of the site / homepage leading with
// whats important to them... production, creative director, strategy")
// ----------------------------------------------------------------------------
// THE MECHANISM: link-addressable variants, not JS personalization. The homepage
// is built from RE-STACKABLE BLOCKS; each variant re-leads the same blocks and
// re-orders the same 19 case files. DJ sends /production to a production shop,
// /direction to an agency creative role, /strategy to a brand pitch. Nothing is
// hidden, nothing is cloaked, every variant is public and honest.
//
// ⚠ COPY PROVENANCE: the neutral hero + "What I bring" are DJ-APPROVED (they are
// the /hire page copy, approved 2026-07-14). The three variant heroes are CLAUDE
// DRAFTS built from his locked positioning (docs: positioning v3, MONUMENTS-VOICE)
// and are flagged in the review cards. They are real sentences, not placeholders.
// ============================================================================

// the block stack. Order is the variant's whole argument.
// grounds alternate light/dark per the FLOW RULE (CLAUDE.md): never two lights
// adjacent. hero=L stats=D featured=L strip=D bring=L refs=D archive=L
// roster=D contact=D
const BASE = ['hero', 'stats', 'featured', 'strip', 'bring', 'refs', 'archive', 'roster', 'contact'];

export const variants = {
  neutral: {
    key: 'neutral',
    path: '/',
    label: 'Everything',
    tag: 'DJ Ramirez · Creative Director',
    title: 'DJ Ramirez · Creative Director',
    desc: 'DJ Ramirez, Creative Director. Integrated campaigns, film, stills, and experiential, concept through delivery. Emmy winner, LA and Boise.',
    kicker: '✳ DJ Ramirez · Creative Director',
    h1: 'Creative Director.',
    h1serif: 'Open to the right room.',
    // DJ-approved (the /hire lede, 2026-07-14)
    lede: "I lead integrated campaigns, film, stills, and experiential from concept to delivery. I'm looking for a senior creative role inside an agency that wants <b>a point of view, not just a pair of hands.</b>",
    // DJ's tap 2026-08-12: awards + scale
    featured: ['know-vape', 'buck-the-quo', 'sony-flow-state', 'art-of-visuals', 'flashpoint'],
    quotes: ['jakke', 'tommy', 'mike'],
    blocks: BASE,
  },

  production: {
    key: 'production',
    path: '/production',
    label: 'Production',
    tag: 'DJ Ramirez · Production',
    title: 'DJ Ramirez · Director and Production Lead',
    desc: 'DJ Ramirez directs and runs production: films, campaigns, and live builds, crews of two to thirty, concept through delivery.',
    kicker: '✳ DJ Ramirez · Director · Production lead',
    h1: 'I run the set.',
    h1serif: 'Concept through delivery.',
    lede: 'Films, campaigns, and live builds, from the first board to the final cut. I direct, I run the floor, and I have done it with <b>crews of two and crews of thirty.</b>',
    featured: ['cwi-lets-get-started', 'sony-flow-state', 'adorama-music', 'sony-xperia', 'buck-the-quo'],
    quotes: ['jakke', 'casey', 'lauryn'],
    // the set comes first for this reader: the strip of rooms leads
    blocks: ['hero', 'strip', 'featured', 'stats', 'bring', 'refs', 'archive', 'roster', 'contact'],
  },

  direction: {
    key: 'direction',
    path: '/direction',
    label: 'Creative direction',
    tag: 'DJ Ramirez · Creative Direction',
    title: 'DJ Ramirez · Creative Director',
    desc: 'DJ Ramirez, Creative Director. Campaign arcs, story, casting, and cut. Emmy winner, Best of Show at the Rockies, four years growing an agency 4x.',
    kicker: '✳ DJ Ramirez · Creative Director',
    h1: 'The tools are everywhere.',
    h1serif: "Taste isn't.",
    lede: 'I lead campaigns from the idea to the frame: story, casting, look, cut. An Emmy, a Best of Show, and four years of <b>an agency growing 4x around the work.</b>',
    featured: ['know-vape', 'sony-flow-state', 'art-of-visuals', 'sony-this-moment', 'buck-the-quo'],
    quotes: ['tommy', 'lauryn', 'jakke'],
    blocks: ['hero', 'stats', 'featured', 'refs', 'bring', 'strip', 'archive', 'roster', 'contact'],
  },

  strategy: {
    key: 'strategy',
    path: '/strategy',
    label: 'Strategy',
    tag: 'DJ Ramirez · Strategy',
    title: 'DJ Ramirez · Brand and Campaign Strategy',
    desc: 'DJ Ramirez builds brands and campaigns on an insight, not a mood board. Brand systems, launches, and the thinking underneath them.',
    kicker: '✳ DJ Ramirez · Brand + campaign strategy',
    h1: 'The idea before the asset.',
    h1serif: 'Then I make the asset.',
    lede: 'Brands, launches, and systems built on an insight instead of a mood board. I build the thinking and then I build the thing, so <b>nothing gets lost between the deck and the delivery.</b>',
    featured: ['turnstile', 'waffle-me-up', 'flashpoint', 'dw-drums', 'buck-the-quo'],
    quotes: ['mike', 'tess', 'tommy'],
    blocks: ['hero', 'featured', 'bring', 'stats', 'refs', 'strip', 'archive', 'roster', 'contact'],
  },
};

// what DJ brings. DJ-APPROVED COPY (the /hire list, 2026-07-14), re-ordered per
// audience so the top line is the one that reader cares about.
export const bring = {
  lead:     { t: 'Senior enough to lead, secure enough to plug in.', d: "Ego's not on the call sheet." },
  awards:   { t: 'Award-winning creative and real business results.', d: 'Emmy, Rockies Best of Show, 4x agency growth. Not just decks.' },
  integrated:{ t: 'Integrated by default.', d: 'Campaigns, film, stills, and experiential, concept through delivery. Production comes standard.' },
  oncamera: { t: 'On camera and behind it.', d: "I've hosted, presented, and carried a brand's voice with the red light on." },
  ai:       { t: 'Fluent with the new tools.', d: 'I build AI into the workflow without losing the taste. I directed people before I directed AI.' },
};
export const bringOrder = {
  neutral:    ['lead', 'awards', 'integrated', 'oncamera', 'ai'],
  production: ['integrated', 'lead', 'awards', 'oncamera', 'ai'],
  direction:  ['awards', 'lead', 'integrated', 'oncamera', 'ai'],
  strategy:   ['integrated', 'awards', 'ai', 'lead', 'oncamera'],
};

// VERBATIM quotes from the recommendation letters (docs/TESTIMONIALS-2026-08.md).
// R4: never edit their words. Permissions cleared by DJ 2026-08-02 ("im good on
// permission they gave me free use"). These are OTHER PEOPLE'S WORDS: they say
// "DJ" and "he" on purpose and the voice transform is blocked from touching them.
export const quotes = {
  jakke: {
    q: "DJ is a true artist who isn't afraid to get dirty (or lose sleep) to get the job done right and on time. He's been a team captain on multiple projects over the years that always ended in a W.",
    who: 'Jakke', role: 'Composer, on set with DJ',
  },
  tommy: {
    q: 'He was clear about what he needed and always made me feel empowered to explore my creative impulses while staying true to his creative direction.',
    who: 'Tommy Lundberg', role: 'Photographer, directed by DJ',
  },
  mike: {
    q: 'Well, DJ nailed it, it is timeless, clean, and best of all recognizable. I would highly recommend DJ for design work as he will present you with options from safe to pushing the boundaries which is exactly what you want to make informed decisions.',
    who: 'Mike Sutton', role: 'Turnstile Audio · Adorama, client',
  },
  lauryn: {
    q: "If things don't go as planned, DJ handles it with a calm and collected demeanor, quickly pivoting to a new direction that's just as strong.",
    who: 'Lauryn Hodge', role: 'Photographer, hired and mentored by DJ',
  },
  casey: {
    q: 'I have seen him shoot, edit, produce, direct, design, PA, and be in charge of the food and/or the music on set. He has a very special gift of bringing the best out of everyone on the team and he elevates every project to its highest potential.',
    who: 'Casey Levins', role: 'Collaborator, seven years',
  },
  tess: {
    q: "When it comes to creative strategy, I've never questioned that DJ would produce work our team would be proud of. He knows his own strengths but also knows when to delegate to others, providing a well-rounded perspective that allows a project to thrive.",
    who: 'Tess Rizvi', role: 'Producer · Casting Director',
  },
};

// the on-set strip: eight different rooms (ported from /hire, DJ-approved)
export const shots = [
  { img: '/contact/ct-09.jpg',        cap: 'The room I run · production',           alt: 'DJ Ramirez with the camera rig on set, reviewing the shot' },
  { img: '/about/team.jpg',           cap: 'The crew · 5 to 30+',                   alt: 'DJ Ramirez with the full crew on set' },
  { img: '/about/studio-console.jpg', cap: 'The studio · sound + picture',          alt: 'Filming at the mixing console' },
  { img: '/contact/ct-04.jpg',        cap: 'The move · steadicam on the cyc',       alt: 'Steadicam move on the cyc, performer against the mood wall' },
  { img: '/about/set-cameras.jpg',    cap: 'The tools · camera to cut',             alt: 'Camera builds on set' },
  { img: '/contact/ct-01.jpg',        cap: 'The loft · rolling with talent',        alt: 'Rolling with talent on a warm loft set' },
  { img: '/contact/ct-07.jpg',        cap: 'The stage · sound up',                  alt: 'Cinema camera on a music performance set' },
  { img: '/contact/ct-14.jpg',        cap: 'The paint shop · set + art direction',  alt: 'The painter spot: dressed set in the warehouse' },
];

// the brand roster (ported from /hire, DJ-approved)
export const brands = [
  { l: 'Sony', img: 'sony.png' }, { l: 'Intel', img: 'intel.png' },
  { l: 'Adorama', img: 'adorama.png' }, { l: 'MSI', img: 'msi.png' },
  { l: 'Lexar', img: 'lexar.png' }, { l: 'Flashpoint', img: 'flashpoint.png' },
  { l: 'Art of Visuals', img: 'art-of-visuals.png' }, { l: 'Blue Cross of Idaho', img: 'blue-cross.png' },
  { l: 'Donut Media', img: 'donut-media.png' }, { l: 'DW Drums', img: 'dw-drums.png' },
  { l: 'Against', img: 'against.png' },
];

// the four stats (DJ-approved, the /hire band)
export const stats = [
  { b: 'Emmy',    s: '2024 Northwest Regional Emmy, for the Know Vape campaign' },
  { b: 'Rockies', s: 'Best of Show, for the Buck the Quo statewide experiential' },
  { b: '4&times;', s: 'Agency revenue grown as Creative Director at Art of Visuals' },
  { b: '2 &rarr; 30+', s: 'Creatives led per team, brief to delivery' },
];
