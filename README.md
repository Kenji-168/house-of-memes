# The House of Memes

A small, museum-inspired static website that presents internet meme history as a digital gallery.

## Project structure

- `index.html` — main page structure
- `css/style.css` — museum-inspired styling and responsive layout
- `js/memes.js` — meme metadata and source information
- `js/main.js` — gallery rendering and meme detail interaction
- `assets/images/` — local exhibit images; attribution metadata is in `js/memes.js`

## Running locally

Open `index.html` directly in a browser, or serve the site from the project root with:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Media and source notes

Each entry's image credit, accessible image description, and research links are in `js/memes.js`. The four interpretive SVGs are original illustrations made for this project, not the original meme images.

| Exhibit | Local file review |
| --- | --- |
| Dancing Baby | Original SVG illustration made for this project; it is not the original animation. |
| Grumpy Cat | Photograph by Gage Skidmore, Wikimedia Commons file [`Grumpy Cat meme example.jpg`](https://commons.wikimedia.org/wiki/File:Grumpy_Cat_meme_example.jpg), licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). |
| This Is Fine | Original museum interpretation in `assets/images/this-is-fine-interpretation.svg`; it represents composure amid chaos and does not reproduce KC Green's comic. |
| Overly Attached Girlfriend | Photograph by Gage Skidmore, Wikimedia Commons file [`Laina Morris by Gage Skidmore.jpg`](https://commons.wikimedia.org/wiki/File:Laina_Morris_by_Gage_Skidmore.jpg), licensed [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). It is an event photograph, not the original meme template. |
| Nyan Cat | Original abstract pixel-star interpretation in `assets/images/nyan-cat-interpretation.svg`; it is not Nyan Cat's character or original artwork. |
| Keyboard Cat | Original illustration in `assets/images/keyboard-cat-interpretation.svg`; it depicts a different cat and is not Fatso or a still from Charlie Schmidt's footage. |
| Doge | Image by likeaduck, [`Doge meme example.jpg`](https://commons.wikimedia.org/wiki/File:Doge_meme_example.jpg), licensed [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). It is extracted from [`Shiba Inu in snow.jpg`](https://commons.wikimedia.org/wiki/File:Shiba_Inu_in_snow.jpg), also by likeaduck and licensed CC BY 2.0. Credit likeaduck, link the license, and indicate changes. The pictured dog is Archer, not Kabosu. |

The four interpretive SVGs were authored for this project and avoid reproducing the original meme artwork. The Gage Skidmore photographs are reused under the licenses stated on their Wikimedia Commons file pages, with attribution and license links recorded above and in `js/memes.js`. The Doge image is reused under CC BY 2.0 with the attribution and license information recorded above and in `js/memes.js`. No claim is made that these photos are the original meme templates.
