import fs from 'node:fs';
import { globSync } from 'node:fs';
const files = [
  ...fs.readdirSync('src/pages').filter(f=>f.endsWith('.astro')).map(f=>'src/pages/'+f),
  ...fs.readdirSync('src/pages/work').filter(f=>f.endsWith('.astro')).map(f=>'src/pages/work/'+f),
];
let done=0, skip=0;
for (const f of files) {
  let s = fs.readFileSync(f,'utf8');
  if (s.includes('overflow-x:clip')) { skip++; continue; }
  const idx = s.indexOf('overflow-x:hidden}');
  if (idx === -1) { console.log('NO-ANCHOR', f); continue; }
  const at = idx + 'overflow-x:hidden}'.length;
  s = s.slice(0,at) + 'html{overflow-x:clip}' + s.slice(at);
  fs.writeFileSync(f,s);
  done++;
}
console.log(`patched ${done}, skipped ${skip}`);
