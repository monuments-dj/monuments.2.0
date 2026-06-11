// ============================================================
// Work-page content model — the generic schema each project (and
// later, each client site in the builder) fills out. Section order
// is DATA, not markup: WorkLayout renders project.sections in order,
// dispatching each by `type`. Keep this multi-site-ready — nothing
// monuments-specific belongs here.
// ============================================================

export interface Project {
  slug: string;
  title: string;            // browser <title>
  header: HeaderData;
  sections: Section[];      // ordered; rendered in sequence
}

export interface HeaderData {
  variant: 'wh' | 'bc' | 'cs2';
  image: string;
  titleHtml: string;        // allows <br>
  eyebrow?: string;
  lede?: string;
  circleColor?: string;     // --wh-circle, e.g. '#e0322d'
  logo?: string;            // wh client logo
  role?: string;            // wh circled role
  tags?: string[];          // cs2 pills
}

export type Section =
  | ProseSection
  | IntroSection
  | ScopeSection
  | GallerySection
  | QuoteSection
  | CreditsSection
  | CTASection
  | NextSection;

export interface ProseSection { type: 'prose'; heading?: string; body: string[]; }

// The Sony `wk-intro`: a 2×2 photo grid (left) + heading & body copy (right).
// Distinct from ScopeSection, which is the services-list / Flashpoint treatment.
export interface IntroSection { type: 'intro'; heading: string; body: string[]; images: string[]; }

// "What I did for them" — heading + body + a services/scope list (the Flashpoint pattern).
export interface ScopeSection { type: 'scope'; heading: string; body: string[]; services: string[]; }

export interface GallerySection {
  type: 'gallery';
  layout: 'masonry' | 'carousel' | 'lanes';
  images: string[];
  textCell?: { kicker: string; text: string };   // masonry inline text-block cell
}

export interface QuoteSection { type: 'quote'; lead: string; emphasis: string; trailing?: string; attribution: string; }

// Credits — every page gets these. `findflow` selects the scroll-reactive ring
// treatment around the card; 'none' until DJ picks A/B/C from /lab/find-your-flow.
export interface CreditsSection {
  type: 'credits';
  items: { k: string; v: string }[];
  findflow?: 'dial' | 'seal' | 'rotor' | 'none';
}

export interface CTASection { type: 'cta'; text?: string; linkLabel?: string; href?: string; }
export interface NextSection { type: 'next'; href: string; title: string; image?: string; }
