import { config, collection, fields } from '@keystatic/core';

// Keystatic CMS schema. Local mode = content lives as JSON in content/work/*,
// edited at /keystatic (dev). Switch storage to { kind: 'github', repo: ... } to
// enable browser login from the deployed site. The schema mirrors the work-page
// data model (src/data/work/types.ts) — including the two sections DJ asked for:
// "scope" (what I did for them) and "credits".
export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'Monuments' } },
  collections: {
    work: collection({
      label: 'Work projects',
      slugField: 'title',
      path: 'content/work/*',
      format: { data: 'json' },
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
              label: 'Body paragraphs',
              itemLabel: (p) => p.value.slice(0, 48) || 'Paragraph',
            }),
            services: fields.array(fields.text({ label: 'Service' }), {
              label: 'Services',
              itemLabel: (p) => p.value || 'Service',
            }),
          },
          { label: 'What I did (scope)' }
        ),
        credits: fields.array(
          fields.object({
            k: fields.text({ label: 'Label' }),
            v: fields.text({ label: 'Value' }),
          }),
          {
            label: 'Credits',
            itemLabel: (p) => `${p.fields.k.value || 'Label'}: ${p.fields.v.value || ''}`,
          }
        ),
      },
    }),
  },
});
