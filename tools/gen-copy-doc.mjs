import { work } from '../src/data/work.js';
const LIM = { client:28, brand:22, title:34, role:44, logline:150 };
const flag = (s='', lim) => { const n=(s||'').length; return `${n}/${lim}${n>lim?'  ⚠ OVER':''}`; };
let md = `# Work header copy pass — the single source of truth

Edit the copy here, then it gets pasted back into \`src/data/work.js\` and updates the
whole site at once (work-page headers, the Kit slider #el-headerslider, the work index
#el-workview, the hover cards #el-hovercard, and the home "built to be" section).

The named summary text is the **logline**.

## Character limits (soft guides, to fit what's built)
| Field | Limit | Where it shows |
|---|---|---|
| Client | 28 | header NFO, hover-card logo alt |
| Brand | 22 | header (the product/campaign name) |
| Title | 34 | the big hero headline (keep it punchy) |
| What I did (role) | 44 | mono line under the title |
| Logline | 150 | hover cards, slider, work-index preview, home "built to be" |

## The 19 projects (in recruiter order)
`;
work.forEach((w, i) => {
  md += `\n### ${String(i+1).padStart(2,'0')}. ${w.slug}\n`;
  md += `- **Client:** ${w.client || '—'}  \t(${flag(w.client, LIM.client)})\n`;
  md += `- **Brand:** ${w.brand || '—'}  \t(${flag(w.brand, LIM.brand)})\n`;
  md += `- **Logo:** ${w.logo || '— (none on file)'}\n`;
  md += `- **Title:** ${w.title}  \t(${flag(w.title, LIM.title)})\n`;
  md += `- **What I did:** ${w.role}  \t(${flag(w.role, LIM.role)})\n`;
  md += `- **Logline:** ${w.logline}  \t(${flag(w.logline, LIM.logline)})\n`;
});
import { writeFileSync } from 'fs';
writeFileSync('tools/work-copy.md', md);
console.log('wrote tools/work-copy.md');
const over = work.flatMap(w => Object.entries(LIM).filter(([k,l]) => (w[k]||'').length > l).map(([k]) => `${w.slug}.${k}`));
console.log('over limit:', over.length ? over.join(', ') : 'none');
