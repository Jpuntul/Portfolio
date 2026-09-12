# Project screenshots

Served as **WebP**, max 1536px wide (quality 82) — that width covers the
case-study page at 2× DPR, and the grid cards downscale from it.

The originals were 6.2 MB of PNG for the same ten images; the WebP set is 445 KB.
They are not kept here — recover any of them from git if you need to re-derive a
different size:

```sh
git show <commit-before-conversion>:public/images/projects/hms.png > hms.png
```

## Adding a new screenshot

```sh
python3 -c "
from PIL import Image
im = Image.open('new.png')
w, h = im.size
if w > 1536: im = im.resize((1536, round(h*1536/w)), Image.LANCZOS)
im.convert('RGB').save('new.webp', 'WEBP', quality=82, method=6)"
```

Then add it to `src/data/portfolio.ts` with `image`, `imageWidth` and
`imageHeight` — the last two reserve the layout box and prevent the case-study
page from jumping as the image loads.
