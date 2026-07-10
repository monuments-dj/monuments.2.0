import { chromium } from 'playwright'; import fs from 'node:fs';
const OUT='tools/snaps/verify';
const rec=JSON.parse(fs.readFileSync(OUT+'/index.json','utf8')).filter(r=>r.file);
const b64=f=>'data:image/png;base64,'+fs.readFileSync(f).toString('base64');
const per=8; const chunks=[];
for(let i=0;i<rec.length;i+=per)chunks.push(rec.slice(i,i+per));
const b=await chromium.launch(); const p=await b.newPage({viewport:{width:900,height:800},deviceScaleFactor:1.5});
let n=0;
for(const ch of chunks){
  n++;
  const rows=ch.map(r=>`<div class="row"><div class="lab">${r.label}</div><img src="${b64(r.file)}"></div>`).join('');
  const html=`<!doctype html><html><head><meta charset=utf8><style>
  body{margin:0;background:#F5F3EF;font-family:monospace}
  .row{border-bottom:2px solid #161514;padding:10px 14px}
  .lab{font-size:12px;font-weight:700;color:#E0311A;margin-bottom:6px;letter-spacing:.04em}
  img{max-width:100%;display:block;background:#2a2a2a}
  </style></head><body>${rows}</body></html>`;
  await p.setContent(html,{waitUntil:'load'}); await p.waitForTimeout(150);
  await p.screenshot({path:`${OUT}/MONTAGE-${n}.png`,fullPage:true});
  console.log('MONTAGE-'+n,ch.length,'crops');
}
await b.close();
