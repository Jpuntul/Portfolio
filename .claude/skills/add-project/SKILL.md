---
name: add-project
description: Add a project to the portfolio, or edit an existing one. Handles the screenshot conversion, the typed data entry, link verification, and the build checks. Use whenever a project is being added, removed, reordered, or rewritten in src/data/portfolio.ts.
---

# Add or edit a portfolio project

Everything lives in `src/data/portfolio.ts`. The components read from it, so a
project is a one-file edit plus one image — but several things go stale silently
if you skip them, which is what this skill is for.

## 1. Collect the facts — never invent them

Ask for whatever is missing. **Do not write a number, metric, or claim that
wasn't supplied.** If a bullet would be stronger with a figure, ask for the
figure; if it can't be substantiated, write the bullet without it.

Required: title, what it does, role (`Full Stack` / `Frontend` / `Backend`),
category (`Web` / `Mobile`), status (`Completed` / `Ongoing`), technologies,
repo and demo URLs (or that they're private), and a screenshot.

For a featured project also get: `problem`, `solution`, `impact`, `architecture`,
and `myRole` — what *this person* owned, not what the team did. `portfolio.test.ts`
fails if a `highlight: true` project is missing problem/solution/impact.

Watch the copy for things that read as student work: course codes (`SOEN-341`),
"capstone", "course project", and "Contributed to" as the lead verb. Say the team
size and what they owned instead.

## 2. Verify every URL before it ships

A dead "Source" button is worse than no button. Check each one:

```sh
curl -s -o /dev/null -w "%{http_code}" -L --max-time 15 -A "Mozilla/5.0" "<url>"
```

200 means public. A 404 means the repo is private, renamed, or gone — confirm
which. Don't trust status alone for SPA demos; fetch the title too:

```sh
curl -s -L -A "Mozilla/5.0" "<url>" | grep -o '<title>[^<]*</title>'
```

If it isn't publicly reachable: `private: true`, `github: ""`, `demo: ""`, and a
`privateNote` explaining why — that renders instead of a broken link.

## 3. Convert the screenshot

WebP, max 1536px wide (covers the case-study page at 2× DPR; cards downscale from
it), quality 82:

```sh
python3 -c "
from PIL import Image
im = Image.open('SOURCE.png')
w, h = im.size
if w > 1536: im = im.resize((1536, round(h*1536/w)), Image.LANCZOS)
im = im.convert('RGB')
im.save('public/images/projects/SLUG.webp', 'WEBP', quality=82, method=6)
print(im.size)"
```

Record the printed dimensions — they're required in step 4. Eyeball the result if
the screenshot has small UI text; q82 is usually crisp but check rather than assume.

## 4. Add the entry

Append to the `projects` array in `src/data/portfolio.ts`. **Array order is the
display order** on both the home strip and `/projects`, so place it where it
belongs rather than always at the end. Order by what a stranger can verify —
something with a public repo *and* a live demo outranks something with neither.

```ts
{
  id: <next unused number>,
  slug: "kebab-case-slug",        // becomes /projects/<slug>/
  role: "Full Stack",
  title: "Project Name",
  tagline: "≤80 chars, shown on cards",
  shortDesc: "One sentence.",
  description: `Longer prose for the case-study page.`,
  image: "images/projects/SLUG.webp",
  imageWidth: 1536,               // from step 3 — not guessed
  imageHeight: 868,
  technologies: ["React", "TypeScript"],
  github: "https://github.com/...",   // "" if private
  demo: "",
  category: "Web",
  status: "Completed",
  features: ["Thing", "Other thing"],
  // highlight: true,             // only with problem/solution/impact/myRole
}
```

`imageWidth`/`imageHeight` are not optional in practice: they reserve the layout
box (preventing the case study from jumping as the image loads) and feed
`og:image:width`/`height` in the prerendered HTML.

## 5. Verify

```sh
npm test                    # portfolio.test.ts checks slug/id uniqueness, kebab-case,
                            # featured completeness, private projects have no github
npm run typecheck
npm run build               # regenerates the sitemap and prerenders the new route
```

Then confirm the route actually exists and carries its own metadata:

```sh
ls dist/projects/<slug>/index.html
grep -E 'og:title|canonical' dist/projects/<slug>/index.html
```

If you **removed** a project, check for orphaned images — the file stays on disk
after the entry is gone:

```sh
comm -13 \
  <(grep -o 'images/projects/[a-z0-9-]*\.\(webp\|svg\)' src/data/portfolio.ts | sed 's|images/projects/||' | sort -u) \
  <(ls public/images/projects/ | grep -E '\.(webp|svg)$' | sort -u)
```

Anything printed is unreferenced — delete it.

## 6. Look at it

`npm run preview`, then open `/Portfolio/projects/` and the new
`/Portfolio/projects/<slug>/`. Check the card image isn't awkwardly cropped
(`object-cover` at 16/9 on the card) and the case study reads well.

The project count in the `/projects` page copy comes from `projects.length`, so
it updates itself — no need to edit that string.
