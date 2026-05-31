# Patch inspo — menu easter-egg badges

Reference catalog for the draggable menu "patches." DJ pastes refs in chat; this
file captures the direction so it's not lost. **Drop the actual image files in this
folder** (any name) — then they can be vectorized (Firefly `image_vectorize`) and
swapped into the site as crisp SVGs.

## North star
Vintage / 70s–Americana embroidered souvenir patches. Keep each one's color scheme
close to its reference. Built as hand-coded SVG for the MVP; refine later with real
generated/vectorized art.

> ⚠️ Adobe (Firefly) here has **no text-to-image generation** — only `image_vectorize`
> (PNG/JPEG → SVG), masking, generative *expand*, edits. To get photoreal patches:
> generate art in the Firefly app or Photoshop → save PNG here → vectorize → drop in.

## The patches + their references

| Patch class      | Label / wordmark            | Reference style                              | Suggested filename        | Status |
|------------------|-----------------------------|----------------------------------------------|---------------------------|--------|
| `.patch-ai`      | Human + Machine / AI Enabled| Sterling "fist+lightning" + East End Trades Guild "handshake" — circular, navy-on-cream, arc text, **human × robot handshake** | `ai-handshake.png`        | MVP built (SVG line-art) |
| `.patch-story`   | No Risk No Story            | black oval, faded-red merrow border, gold western text | `no-risk-no-story.png`    | MVP built (SVG) |
| `.patch-digital` | Digital Native              | Daytona "Speedweek" — cream oval, red border, **crossed checkered flags** | `digital-native-race.png` | TODO |
| `.patch-camera`  | Good at camera stuff        | "Film Maker" — navy circle, **clapperboard + film reel**, arc text | `camera-filmmaker.png`    | TODO |
| `.patch-idaho`   | Idaho (Boise)              | tan patch, navy rope border, OUTDOOR TRADITION / Idaho / SINCE 1890 + moose | `idaho.png`               | DONE (SVG) |
| `.patch-california` | Los Angeles (LA)         | navy-ring baseball, Los Angeles script, skyline + palms | `los-angeles.png`         | DONE (SVG) |
| `.patch-vibes`   | Good Vibes                  | (existing) smiley                            | —                         | keep |
| `.patch-emmy`    | Emmy Award Winning          | (existing) gold rosette                      | —                         | keep |

## Notes
- "Make It Easy" (chenille "Take It Easy" ref) — intended patch TBD; chenille texture
  can't be done in CSS/SVG (needs a raster image).
- Code lives in `src/components/Menu.astro` (markup) + `src/styles/global.css` (`.patch-*`).
