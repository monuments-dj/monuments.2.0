// ============================================================================
// SITE CONFIG · the ONLY place `SITE` is read.
// ----------------------------------------------------------------------------
// One repo, two sites (DJTHECD-PLAN.md §1):
//   SITE unset (default) -> monuments.cc   · studio voice (We) · Organization
//   SITE=dj              -> djthecd.com    · solo voice (I)    · Person
//
// ⛔ THE HARD RULE, from the research (conditional sprawl is the documented
// number-one white-label failure): no component and no page may branch on
// process.env.SITE. They read fields off `site`. The only other place the flag
// is allowed to matter is PAGE-TREE SELECTION inside integrations/djsite.mjs.
// The leak audit (tools/djaudit.mjs) fails the build if this discipline slips.
//
// DJ's rulings baked here (2026-08-12, his taps):
//   wordmark = DJ✳RAMIREZ · email = dj@djthecd.com · he owns djthecd.com
// ============================================================================
const id = process.env.SITE === 'dj' ? 'dj' : 'monuments';

const MONUMENTS = {
  id: 'monuments',
  isDJ: false,
  // identity
  name: 'Monuments',
  person: 'DJ Ramirez',
  origin: 'https://monuments-2-0.vercel.app',
  email: 'monuments.cc@gmail.com',
  ogSiteName: 'Monuments',
  // the spinning-spark wordmark: <lead>✳<tail>
  markLead: 'M',
  markTail: 'NUMENTS',
  footerLine: 'Monuments &copy; MMXXVI &middot; ELMT.NO.004259',
  // voice: 'we' = studio dialect, 'i' = solo dialect (drives the build transform)
  voice: 'we',
  // the takeover nav
  nav: [
    { n: '01', t: 'Home',         href: '/',             sub: 'the front door',         img: '/gallery/full/p-013.jpg' },
    { n: '02', t: 'Work',         href: '/work',         sub: '19 case files',          img: '/reel/work-reel-poster.jpg' },
    { n: '03', t: 'About',        href: '/about',        sub: 'the subject file',       img: '/about/hero-set.jpg' },
    { n: '04', t: 'Capabilities', href: '/capabilities', sub: 'what we do',             img: '/about/dj-film.jpg' },
    { n: '05', t: 'AI Tools',     href: '/ai',           sub: 'a tool, not a solution', img: '/about/studio-console.jpg' },
    { n: '06', t: 'Giving back',  href: '/giving',       sub: 'work that gives back',   img: '/case-studies/giving/gv-01.jpg' },
    { n: '07', t: 'Contact',      href: '/contact',      sub: 'our journey starts here', img: '/gallery/full/p-044.jpg' },
  ],
  navHire: { href: '/hire', label: 'Hiring? The one-page brief &rarr;' },
  navKit: true,
};

const DJ = {
  id: 'dj',
  isDJ: true,
  name: 'DJ Ramirez',
  person: 'DJ Ramirez',
  origin: 'https://djthecd.com',
  email: 'dj@djthecd.com',
  ogSiteName: 'DJ Ramirez',
  markLead: 'DJ',
  markTail: 'RAMIREZ',
  footerLine: 'DJ Ramirez &copy; MMXXVI &middot; Creative Director',
  voice: 'i',
  nav: [
    { n: '01', t: 'Home',    href: '/',        sub: 'the front door',   img: '/gallery/full/p-013.jpg' },
    { n: '02', t: 'Work',    href: '/work',    sub: '19 case files',    img: '/reel/work-reel-poster.jpg' },
    { n: '03', t: 'About',   href: '/about',   sub: 'the subject file', img: '/about/hero-set.jpg' },
    { n: '04', t: 'Contact', href: '/contact', sub: 'start here',       img: '/gallery/full/p-044.jpg' },
  ],
  navHire: null,
  navKit: false,
};

export const site = id === 'dj' ? DJ : MONUMENTS;
export default site;
