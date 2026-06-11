// ============================================================
// CMS → site bridge. Reads the flat Keystatic records under
// content/work/* via createReader and ADAPTS each into the
// generic `Project` shape (src/data/work/types.ts) that
// WorkLayout renders. The CMS stays simple/flat; the layout
// stays generic + multi-site. This file is the only seam that
// knows about Keystatic's field names.
// ============================================================
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import type { Project, Section } from '../data/work/types';

const reader = createReader(process.cwd(), keystaticConfig);

// A logo path guess from the client name (e.g. "Sony Audio" → /logos/sony.png).
// Falls back to undefined so the header just omits the logo if the file is absent.
function logoFor(client: string | null | undefined): string | undefined {
  if (!client) return undefined;
  const slug = client.toLowerCase().split(/\s+/)[0].replace(/[^a-z0-9]/g, '');
  return slug ? `/logos/${slug}.png` : undefined;
}

// Flat Keystatic record → ordered Project (header + sections[]). Section order
// here mirrors the locked Sony reference: intro → carousel → masonry → quote →
// credits → next. Each is emitted only when it has content, so partially-filled
// CMS entries still render cleanly.
function toProject(slug: string, r: any): Project {
  const gallery: string[] = (r.gallery ?? []).filter(Boolean);
  const sections: Section[] = [];

  // Intro — the Sony `wk-intro`: a 2×2 photo grid (first 4 gallery) + heading +
  // body copy. Emitted whenever there's intro copy.
  const introBody = (r.scope?.body ?? []).filter(Boolean);
  if (r.scope && (r.scope.heading || introBody.length)) {
    sections.push({
      type: 'intro',
      heading: r.scope.heading ?? r.title,
      body: introBody,
      images: gallery.slice(0, 4),
    });
  }
  // Scope — the services-list / Flashpoint treatment. Only when services exist.
  const services = (r.scope?.services ?? []).filter(Boolean);
  if (r.scope && services.length) {
    sections.push({
      type: 'scope',
      heading: r.scope.heading ?? r.title,
      body: introBody,
      services,
    });
  }

  // Gallery — a carousel (auto-scroll filmstrip) then a masonry. The intro grid
  // takes the first 4 images; the carousel takes the next 4 (falling back to the
  // whole set if there aren't enough); the masonry curates the full gallery
  // (images are intentionally reused across treatments, as on the reference page).
  const carouselImgs = gallery.length > 4 ? gallery.slice(4, 8) : gallery.slice(0, 4);
  if (carouselImgs.length) {
    sections.push({ type: 'gallery', layout: 'carousel', images: carouselImgs });
  }
  if (gallery.length) {
    sections.push({
      type: 'gallery',
      layout: 'masonry',
      images: gallery,
      textCell:
        r.scope && r.scope.heading
          ? { kicker: 'On set', text: (r.scope.body ?? [])[0] ?? '' }
          : undefined,
    });
  }

  // Insight quote (optional).
  if (r.quote && (r.quote.lead || r.quote.emphasis)) {
    sections.push({
      type: 'quote',
      lead: r.quote.lead ?? '',
      emphasis: r.quote.emphasis ?? '',
      trailing: r.quote.trailing ?? '',
      attribution: r.quote.attribution ?? '',
    });
  }

  // Credits — every page gets these.
  const credits = (r.credits ?? []).filter((c: any) => c && (c.k || c.v));
  if (credits.length) {
    sections.push({ type: 'credits', items: credits, findflow: 'none' });
  }

  // Next project.
  if (r.next && r.next.slug && r.next.title) {
    sections.push({ type: 'next', href: `/work/${r.next.slug}`, title: r.next.title });
  }

  return {
    slug,
    title: `${r.title}${r.client ? ' — ' + r.client : ''} — monuments`,
    header: {
      variant: 'wh',
      image: r.headerImage ?? gallery[gallery.length - 1] ?? gallery[0] ?? '',
      titleHtml: (r.title ?? '').replace(/\s+/g, '<br>'),
      lede: r.lede ?? undefined,
      circleColor: r.circleColor ?? undefined,
      logo: logoFor(r.client),
      role: r.role ?? undefined,
    },
    sections,
  };
}

export async function listWorkSlugs(): Promise<string[]> {
  return [...(await reader.collections.work.list())];
}

export async function getProject(slug: string): Promise<Project | null> {
  const entry = await reader.collections.work.read(slug);
  if (!entry) return null;
  return toProject(slug, entry);
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = await listWorkSlugs();
  const out: Project[] = [];
  for (const slug of slugs) {
    const p = await getProject(slug);
    if (p) out.push(p);
  }
  return out;
}
