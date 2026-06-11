import { config, collection, singleton, fields } from '@keystatic/core';

// Keystatic CMS schema. Storage auto-switches: GitHub mode (browser login from
// the deployed site) when the GitHub-App env vars are present, otherwise local
// mode (edit at /keystatic in dev, no setup). Schema mirrors the work-page data
// model (src/data/work/types.ts) — incl. the two sections DJ asked for: "scope"
// (what I did for them) and "credits".
const repo = 'monuments-dj/monuments.2.0';

export default config({
  // Dev → local files (edit at /keystatic, no setup). Production build → GitHub
  // mode (browser login on the deployed site). import.meta.env.DEV is defined in
  // both browser + server, so the admin hydrates cleanly (no `process` reference).
  storage: import.meta.env.DEV ? { kind: 'local' } : { kind: 'github', repo },
  ui: { brand: { name: 'Monuments' } },
  singletons: {
    settings: singleton({
      label: 'Site settings',
      path: 'content/settings',
      format: { data: 'json' },
      schema: {
        brandName: fields.text({ label: 'Brand name', defaultValue: 'Monuments' }),
        contactEmail: fields.text({ label: 'Contact email', defaultValue: 'monuments.cc@gmail.com' }),
        footerTagline: fields.text({ label: 'Footer tagline', multiline: true }),
        instagram: fields.url({ label: 'Instagram URL' }),
        youtube: fields.url({ label: 'YouTube URL' }),
        linkedin: fields.url({ label: 'LinkedIn URL' }),
      },
    }),
  },
  collections: {
    work: collection({
      label: 'Work projects',
      slugField: 'title',
      path: 'content/work/*',
      format: { data: 'json' },
      columns: ['client', 'role'],
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        client: fields.text({ label: 'Client' }),
        role: fields.text({ label: 'Role', defaultValue: 'creative direction' }),
        circleColor: fields.text({ label: 'Header circle colour (hex)', defaultValue: '#e0322d' }),
        headerImage: fields.text({ label: 'Header image path', description: 'e.g. /case-studies/<slug>/gallery/01.jpg' }),
        lede: fields.text({ label: 'Lede', multiline: true }),
        scope: fields.object(
          {
            heading: fields.text({ label: 'Heading' }),
            body: fields.array(fields.text({ label: 'Paragraph', multiline: true }), {
              label: 'Body paragraphs', itemLabel: (p) => p.value.slice(0, 48) || 'Paragraph',
            }),
            services: fields.array(fields.text({ label: 'Service' }), {
              label: 'Services', itemLabel: (p) => p.value || 'Service',
            }),
          },
          { label: 'What I did (scope)' }
        ),
        gallery: fields.array(fields.text({ label: 'Image path' }), {
          label: 'Gallery images', itemLabel: (p) => p.value || 'Image',
        }),
        quote: fields.object(
          {
            lead: fields.text({ label: 'Lead (before emphasis)' }),
            emphasis: fields.text({ label: 'Emphasised phrase (accent colour)' }),
            trailing: fields.text({ label: 'Trailing (after emphasis)' }),
            attribution: fields.text({ label: 'Attribution' }),
          },
          { label: 'Insight quote' }
        ),
        credits: fields.array(
          fields.object({ k: fields.text({ label: 'Label' }), v: fields.text({ label: 'Value' }) }),
          { label: 'Credits', itemLabel: (p) => `${p.fields.k.value || 'Label'}: ${p.fields.v.value || ''}` }
        ),
        next: fields.object(
          { slug: fields.text({ label: 'Next project slug' }), title: fields.text({ label: 'Next project title' }) },
          { label: 'Next project' }
        ),
      },
    }),
    testimonials: collection({
      label: 'Testimonials',
      slugField: 'author',
      path: 'content/testimonials/*',
      format: { data: 'json' },
      columns: ['company'],
      schema: {
        author: fields.slug({ name: { label: 'Author' } }),
        role: fields.text({ label: 'Role / title' }),
        company: fields.text({ label: 'Company' }),
        quote: fields.text({ label: 'Quote', multiline: true }),
      },
    }),
  },
});
