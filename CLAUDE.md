# Portfolio — working notes

Job-search portfolio for Jutipong Puntuleng. The audience is hiring managers, and
some of them will read the source as a code sample, so both the rendered page and
the repo are the deliverable.

Live: https://jpuntul.github.io/Portfolio/ — GitHub Pages, deployed from `main`.

## Stack

React 19 · TypeScript · Vite 6 (SWC) · Tailwind v4 · React Router 7 · Vitest.
No animation library — see "Reveal system" below.

## Commands

```sh
npm run dev        # dev server at /Portfolio/
npm run build      # tsc --noEmit && sitemap && vite build && prerender
npm run preview    # serve the built site (use this, not dev, to check prerender)
npm run lint
npm run typecheck
npm test
```

`npm run build` **rewrites the tracked file `public/sitemap.xml`**. That is
intended, but it means a build dirties the working tree — don't be surprised when
`git checkout` refuses afterwards.

## Two surfaces, different rules

**`/` (Home)** is a single page: six `min-h-dvh` sections inside a scroll-snap
container in `src/pages/Home.tsx`. One `SECTIONS` array drives both the sections
and the dot rail, so they cannot drift.

**`/projects` and `/projects/:slug`** are ordinary routed pages with a Footer and
BackToTop, which Home deliberately does not render.

`/about` and `/contact` are redirects to the `#about` / `#contact` sections.

## Hard rules

**Never invent a metric, number, or claim.** If a bullet would be stronger with a
number that isn't already in the repo or supplied by Jutipong, ask — don't write
one. This applies to project copy, the résumé, and anything on the site. Claims
that can't be substantiated get softened, not padded.

**The site is dark-only.** There is one palette, declared once in `:root` in
`src/index.css`. There are no `dark:` utilities anywhere and no theme toggle —
both were removed deliberately. Don't reintroduce a `dark:` variant for a
one-off; it will be dead code, because nothing applies a `.dark` class. If light
mode is ever wanted it's a real project: ~8 components are navy-hardcoded and
every contrast ratio needs re-deriving against a light background.

**Tailwind's `slate-*` scale is redefined to navy** in the `@theme` block, and
`accent-*` is the gold. So `bg-slate-950` is `#04070f`, not Tailwind's grey.

**Verify outbound links before trusting them.** Project `github` / `demo` URLs go
stale. `curl -s -o /dev/null -w "%{http_code}"` each one; a dead "Source" button
on a portfolio is worse than no button. Private repos get `private: true`,
`github: ""` and a `privateNote`.

## Content

`src/data/portfolio.ts` is the single source of truth for `personalInfo`,
`projects` and `skills`. `src/data/portfolio.test.ts` enforces its integrity
(unique slugs and ids, kebab-case, featured projects have case-study fields,
every rendered skill category exists). Adding or editing a project is a one-file
edit — use the `add-project` skill.

Keep it in sync with `docs/resume/`. The two places that drift are this file and
the `timeline` array in `src/components/sections/Experience.tsx`.

`personalInfo` deliberately carries **no availability date and no phone number** —
dates go stale silently and the repo is public. A test fails if a month name
reappears in `openTo`.

## Reveal system

Sections are readable by default. `Home.tsx`'s effect adds `js-reveal` to the
scroll container **only after** the IntersectionObserver is watching, which opts
them into the hidden-then-animate treatment. So no-JS, a missing
IntersectionObserver, or a throw during setup all degrade to *visible* rather
than *blank*. Preserve that ordering if you touch the effect.

The observer threshold is `[0, 0.15, 0.5]`. **The `0` is load-bearing** — a
section taller than ~6.67× the container never reaches `0.15`, and a reveal gated
on a threshold the element cannot cross is a permanently blank screen at high
text zoom.

## Build pipeline

`scripts/prerender.ts` runs after `vite build` and writes a real
`dist/projects/<slug>/index.html` per project, because GitHub Pages serves files,
not routes — without it every project URL returns 404 to crawlers and previews as
"Redirecting..." in LinkedIn and Slack.

It rewrites the region between `<!--seo:start-->` / `<!--seo:end-->` in
`index.html` and injects font preloads at `<!--preload:fonts-->`. **Those markers
must stay**, exactly once each, in that order — the script throws otherwise,
deliberately, because silently emitting a page with the homepage's canonical is
worse than failing the build.

`scripts/generate-sitemap.ts` emits trailing-slash URLs to match the canonicals
prerender injects. Keep them identical.

## Images

Project screenshots are WebP, max 1536px wide, quality 82. Every entry needs
`imageWidth` / `imageHeight` from the actual file — they reserve the layout box
and feed `og:image:width`/`height`. See `public/images/projects/README.md`.

## Before committing

Run the `preflight` skill, or at minimum `npm run lint && npm run typecheck &&
npm test && npm run build`.
