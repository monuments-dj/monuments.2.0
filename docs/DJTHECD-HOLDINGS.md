# DJTHECD HOLDINGS - copy pulled off monuments, waiting for the fork

## The in-house seat slip (pulled from /capabilities 2026-07-22)
DJ: "hold for DJthecd" - job-seeking copy comes off the agency-lean studio
site and leads on djthecd when it exists. Markup verbatim as removed:

```astro
      <!-- IN-HOUSE rewritten per DJ 2026-07-14: "im looking for an in-house job so we
           need to talk about that here." This card now says the quiet part out loud.
           COPY IS CLAUDE'S DRAFT - DJ to approve or rewrite. -->
      <div class="way rv is-open" style="--i:2;--rot:-.6deg">
        <span class="tape" aria-hidden="true"></span>
        <span class="wstamp">Open<small>To offers</small></span>
        <div class="whead">
          <span class="lft">In-house teams</span>
          <span class="rgt">03</span>
        </div>
        <div class="redrule" aria-hidden="true"></div>
        <h3>The seat I'm <span class="serif">looking for.</span></h3>
        <p>You have the team and the tools, and the work still isn't landing. This is the chair I want: a senior creative lead inside the building, not a vendor outside it. I lead the team you have, hold the bar, and get it moving.</p>
        <span class="wfoot">Filed MMXXVI · Full time · Open to offers</span>
      </div>
```
Note: card carried the OPEN-TO-OFFERS stamp + `is-open` styling; the
.wstamp/.is-open CSS remains in capabilities.astro (harmless, reusable).


## THE SHARED-LANGUAGE LOGIC (locked 2026-07-22, DJ asked)
Work case pages live on BOTH sites. The dialect rules:
1. Case BODIES are shared + identical: personal craft claims in third
   person ("DJ directed"), collaborative claims as We, collaborators named.
   True and professional under either brand = edit once, render twice.
2. VOICE lives in each site's CHROME (hero/about/intros/CTAs): We on
   monuments, I on djthecd. About is already I = djthecd-shaped.
3. Escape hatch: "DJ directed" -> "I directed" is a DETERMINISTIC build-time
   transform if djthecd ever wants I-voice case bodies (same source, two
   outputs). This is why the sweep chose DJ over We for personal claims:
   We would have destroyed the attribution information forever.
