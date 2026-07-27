# Hack@Davidson Asset Audit

## Current Direction

The homepage has been reframed away from cluttered literal destination collages and toward a sparse editorial journey inspired by immersive one-page sites such as Nomadic Tribe, A Short Journey, and Who Cares.

The new rule is: one chapter, one dominant image language, one message. Supporting elements are atmospheric rather than decorative.

## Local Public Assets

| File | Source | License | Usage |
| --- | --- | --- | --- |
| `public/assets/public-domain/football-field-night.jpg` | Wikimedia Commons, `Pexels-jonathan-petersson-399187.jpg`, by Jonathan Petersson | CC0 1.0 Public Domain Dedication | Hero field and floodlights, color-treated and framed by the CSS player tunnel. |
| `public/assets/public-domain/big-ben.svg` | Wikimedia Commons, `World landmarks icons - Big Ben.svg` | CC0 1.0 Public Domain Dedication | Large London silhouette, used as an atmospheric chapter asset. |
| `public/assets/public-domain/christ-and-liberty.svg` | Wikimedia Commons, `Christ and Liberty.svg` | Wikimedia-hosted SVG; used only as a faint compositional silhouette layer | Subtle Rio atmospheric layer, not a primary literal illustration. |

## Sources Reviewed But Not Used Directly

FreeSVG/OpenClipart pages list several useful CC0/public-domain SVGs, but their download endpoint returned empty files from the shell in this environment. I did not leave those failed downloads in the project.

Reviewed FreeSVG public-domain pages:

- Big Ben vector silhouette
- London bus
- Digital landscape illustration of Japan
- Vector image of Sugar Loaf mountain in Brazil
- Vector illustration of Christ the Redeemer statue
- Egyptian pyramids

## Replaced / De-Emphasized

| Previous Surface | Decision | Reason |
| --- | --- | --- |
| Emoji-style landmark icons | Removed from primary visuals | They read cheap and clip-art-like at scene scale. |
| Dense city-object SVG compositions | Replaced in rendered homepage | They made the page feel cluttered and homemade. |
| Full destination stack with Lagos/Bengaluru/Rio/etc. | Condensed | The new references call for stronger pacing and fewer, more memorable chapters. |
| Repeated poster cards/player cards | Removed from rendered homepage | They broke the immersive editorial feel. |

## Remaining Upgrade Candidates

- Replace the faint Rio comparison SVG with a cleaner CC0 Christ/Sugarloaf vector if a direct downloadable source is available.
- Add one or two lightweight WebGL/canvas transitions only after the visual system is strong enough to justify it.
- Localize additional public-domain SVGs manually if the browser session can download them interactively.
