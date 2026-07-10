import fs from 'node:fs';
const OLD = '.statrow>.in{display:flex;justify-content:space-between;align-items:flex-end;gap:34px;flex-wrap:wrap;padding:18px var(--pad) 16px}';
const NEW = '.statrow>.in{display:flex;justify-content:flex-start;align-items:flex-end;gap:clamp(30px,4.6vw,64px);flex-wrap:wrap;padding:20px var(--pad) 18px}\n.statrow .stat:has(.note){margin-left:auto}\n.statrow .stat .note{text-align:right}';
const files = fs.readdirSync('src/pages/work').filter(f=>f.endsWith('.astro')).map(f=>'src/pages/work/'+f);
let n=0;
for (const f of files){
  let s = fs.readFileSync(f,'utf8');
  if (s.includes(OLD)){ s = s.replace(OLD, NEW); fs.writeFileSync(f,s); n++; console.log('fixed',f.split('/').pop()); }
}
console.log('patched',n,'pages');
