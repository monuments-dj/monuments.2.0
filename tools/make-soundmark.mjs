import { chromium } from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
// Render the Turnstile sound mark (4 white bars on black, BR-02) pulsing like a
// meter, record ~6s, saved as webm for ffmpeg conversion to the hover snip.
const html = `<!doctype html><html><head><style>
html,body{margin:0;height:100%;background:#0b0b0a;display:grid;place-items:center;overflow:hidden}
.mark{display:flex;align-items:flex-end;gap:14px;height:120px}
.mark i{display:block;width:26px;background:#F5F3EF;transform-origin:bottom;height:120px}
.mark i:nth-child(1){animation:eq1 1.15s steps(6) infinite}
.mark i:nth-child(2){animation:eq2 .9s steps(5) infinite}
.mark i:nth-child(3){animation:eq3 1.3s steps(7) infinite}
.mark i:nth-child(4){animation:eq4 1.05s steps(6) infinite}
@keyframes eq1{0%{transform:scaleY(1)}25%{transform:scaleY(.55)}50%{transform:scaleY(.85)}75%{transform:scaleY(.4)}100%{transform:scaleY(1)}}
@keyframes eq2{0%{transform:scaleY(.9)}30%{transform:scaleY(1)}55%{transform:scaleY(.5)}80%{transform:scaleY(.75)}100%{transform:scaleY(.9)}}
@keyframes eq3{0%{transform:scaleY(.45)}20%{transform:scaleY(.75)}45%{transform:scaleY(.3)}70%{transform:scaleY(.6)}100%{transform:scaleY(.45)}}
@keyframes eq4{0%{transform:scaleY(.8)}35%{transform:scaleY(.45)}60%{transform:scaleY(1)}85%{transform:scaleY(.6)}100%{transform:scaleY(.8)}}
</style></head><body><div class="mark"><i></i><i></i><i></i><i></i></div></body></html>`;
const dir='/private/tmp/claude-501/-Users-djram/9e00b36c-a6a9-47fa-a10f-71748ab493ac/scratchpad/vid';
fs.mkdirSync(dir,{recursive:true});
fs.writeFileSync(path.join(dir,'soundmark.html'),html);
const b=await chromium.launch();
const ctx=await b.newContext({recordVideo:{dir,size:{width:960,height:540}},viewport:{width:960,height:540}});
const p=await ctx.newPage();
await p.goto('file://'+path.join(dir,'soundmark.html'));
await p.waitForTimeout(6500);
await ctx.close(); await b.close();
const vids=fs.readdirSync(dir).filter(f=>f.endsWith('.webm'));
console.log('recorded:',vids.join(','));
