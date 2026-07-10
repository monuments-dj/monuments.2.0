import fs from 'node:fs';
const OLD = '.statrow .stat .note{text-align:right}';
const NEW = '.statrow .stat .note{text-align:right}\n@media(max-width:900px){.statrow .stat:has(.note){margin-left:0}.statrow .stat .note{text-align:left}}';
const files = fs.readdirSync('src/pages/work').filter(f=>f.endsWith('.astro')).map(f=>'src/pages/work/'+f);
let n=0;
for (const f of files){
  let s = fs.readFileSync(f,'utf8');
  if (s.includes(OLD) && !s.includes('@media(max-width:900px){.statrow')){ s = s.replace(OLD, NEW); fs.writeFileSync(f,s); n++; }
}
console.log('mobile-reset added to',n,'pages');
