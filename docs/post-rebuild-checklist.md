# Portfolio review — action list

Last reviewed: **2026-09-06**, against `public/Jutipong_Puntuleng_resume.pdf`.

Everything under "Done" is already applied in the working tree (uncommitted).
Everything below that still needs a decision or an action from you.

---

## Done in this pass

- **Mobile layout was broken.** At 390×660, five of six home sections overflowed
  their `h-screen` box and the overflow was unreachable behind `scroll-snap-type:
y mandatory` — About lost the whole fact grid, Contact lost the _Send message_
  button. Sections are now `min-h-dvh` with `snap-proximity` below `md`;
  `md:snap-mandatory` keeps the desktop snap feel unchanged.
- **Favicon** was still the Vite logo. Replaced with `public/favicon.svg` (JP monogram).
- **Stuck-in-light-mode bug.** `index.html` still honoured a stale
  `localStorage.theme === "light"`, but the toggle that wrote it was removed in the
  redesign — a returning visitor could land in a half-styled light page with no way
  out. The site is dark-only now, so the class is applied unconditionally.
  `ThemeToggle.tsx`, `useTheme.ts` and `src/assets/react.svg` deleted (all unreferenced).
- **Contact form was dead in production.** `.github/workflows/deploy.yml` never
  passed the EmailJS vars to `npm run build`, so every submit threw. The `env:`
  block is added — **you still need to create the three repo secrets** (see below).
- **Contrast.** `text-white` on gold `#f8c000` is 1.68:1 (AA needs 4.5:1) — fixed at
  six call sites to `text-slate-950` (12:1). Footer text at 1.48:1 and the Skills
  "Built with…" line were effectively invisible; both raised. Empty skill-level dots
  were 1.10:1 and unreadable; raised to `slate-600`.
- **Keyboard trap.** `BackToTop` was focusable while at `opacity: 0` — Tab landed on
  an invisible button. Now `tabIndex={-1}` + `aria-hidden` when hidden.
- **Copy / resume sync.**
  - `index.html` meta description said "Open to roles from July 2026" — a date in
    the past, and the string Google and LinkedIn show. Now matches
    `personalInfo.availability`.
  - VeloSim `impact` mentioned "**TA credentials**" on a public page — that one phrase
    tells any hiring manager the BIXI partnership was coursework. Removed.
  - VeloSim `solution` read "built over 11 people in a multi-release cycle" (not a
    sentence). Fixed.
  - VeloSim contradicted itself: "open-source … used by BIXI" and "Deployed at
    velosim.app" on a card whose own `privateNote` says source and demo are not
    publicly reachable. Reworded to the resume's own framing ("built **with** BIXI
    Montréal"); access story now lives only in `privateNote`. **See Q2 below.**
  - "Onmi Rentals" → "**Omni** Rentals" (the linked repo is `omni-rentals`); slug
    and sitemap updated.
  - The Experience row for the independent consulting engagement claimed a
    _healthcare_ advisory; the resume says a partner business unit in the San Fun
    Group ecosystem. Aligned to the resume.
  - `personalInfo.headline` was defined and **never rendered anywhere**. It's now the
    supporting line in the hero — the first screen finally says what you do.
  - Experience timeline was oldest-first, so the top row (the most-read position)
    was a course project from 20 months ago. Now reverse-chronological.
  - The `Practices` skill category (Agile/Scrum, TDD, **REST API Design**, Code
    Review, Clean Architecture) was authored and then filtered out of the render,
    while the no-code stack was on stage. For backend roles that was backwards.
    Both now show, Practices first.
  - Decorative `01`–`05` numerals are `aria-hidden` (screen readers were reading
    "zero one").
- `README.md` pointed at `public/resume.pdf`, which does not exist, and described a
  `pages/` layout that no longer matches. Corrected.

`npm run lint`, `npm run typecheck` and `npm test` (22 tests) all pass. **Nothing is
committed** — review `git diff` before pushing.

---

## 1. Create the three EmailJS repo secrets (5 min, blocking)

Settings → Secrets and variables → Actions → New repository secret:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

The workflow now reads them. Until they exist, the contact form throws on every
submit and the visitor sees the generic "Something went wrong" banner.

## ~~2. Project detail URLs return HTTP 404 to crawlers~~ — DONE

`scripts/prerender.ts` now runs after `vite build` and writes a real
`dist/projects/<slug>/index.html` for all 11 projects plus the listing, each with
its own `<title>`, description, canonical, and `og:`/`twitter:` tags — including
the project screenshot as the social image instead of the portrait photo, with
PNG dimensions read from the file.

The regenerated region of `index.html` is delimited by `<!--seo:start-->` /
`<!--seo:end-->`; the script throws if those markers go missing rather than
silently emitting homepage tags on every route. `generate-sitemap.ts` now emits
trailing-slash URLs so the sitemap and the injected canonicals are byte-identical
(verified: 13/13 match), which also fixes the old root-URL 301.

Verified against `vite preview`: every route returns 200 with the correct title in
the raw HTML — no JS required — and React Router renders the right page at the
trailing-slash URL. `<meta name="title">` and `<meta name="keywords">` were dropped
while rebuilding the block (neither is read by any search engine).

## ~~3. Images: 6.2 MB of PNGs~~ — DONE

All ten project screenshots converted to WebP, capped at 1536px wide (q82 — that
width covers the case-study page at 2× DPR and the cards downscale from it).

|                        | before   | after             |
| ---------------------- | -------- | ----------------- |
| 10 project screenshots | 6,369 KB | **445 KB (−94%)** |

Worst offender was `hand-in-hand.png` at 1,196 KB → 52 KB. `hms.png` was 2940px
wide rendering into a 368px card → now 1536px, 357 KB → 46 KB. Checked the
text-heavy ones visually at the new quality; screenshot text is still crisp.

The PNGs are deleted — recover any from git if you need to re-derive a size.
`public/images/projects/README.md` (which was stale template boilerplate
referencing projects that don't exist) now documents the conversion command.

Also fixed the CLS the review flagged: `ProjectDetail.tsx`'s hero image was
`loading="eager"` with `w-full` and no dimensions, so the whole case study jumped
down when it landed. `Project` now carries `imageWidth`/`imageHeight` (populated
from the actual files), the image sets both plus `fetchPriority="high"` and
`decoding="async"`, and `ProjectCard` got `decoding="async"`. `scripts/prerender.ts`
reads the same two fields for `og:image:width`/`height` instead of parsing files.

**One thing to verify after deploying:** `og:image` now points at a `.webp`.
Facebook, X and Slack all support that; LinkedIn has historically been the flaky
one. Paste a project URL into
[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) once this is
live. If the image doesn't render there, generating a parallel JPEG set purely for
`og:image` is a small change to the conversion script.

## ~~4. Bundle: framer-motion was 30% of the main chunk~~ — DONE

Removed entirely. Measured before and after `vite build`:

| entry chunk | raw      | gzip               |
| ----------- | -------- | ------------------ |
| before      | 417.1 kB | 132.6 kB           |
| after       | 292.3 kB | **91.7 kB (−31%)** |

`SECTION_REVEAL` is now ~10 lines of CSS in `index.css`, driven by the
IntersectionObserver `Home.tsx` already ran over the same six sections — so six
observers collapsed into one. `App.tsx`'s `MotionConfig` had to go too (it alone
pulls in `motion-dom`); `prefers-reduced-motion` was already handled in CSS.
`ProjectDetail`'s mount animation is a plain CSS `animation`, no observer.

**The failure mode this deliberately avoids:** if reveal state were simply
`opacity: 0` by default, a misfiring observer would leave a section _blank_. So
sections are readable by default and the effect adds `.js-reveal` to the scroll
container as its first statement — no JS, no `IntersectionObserver`, or a thrown
effect all degrade to "visible", not "blank". Verified by scrolling the production
build end to end: all five sections reach opacity 1.

Two things fixed in the same pass, since the callback was already open:

- The dot rail repainted all six dots for every intersecting entry with no
  ordering guarantee, so a fast flick could light the wrong one. It now picks the
  highest-ratio entry. Inactive dots were `slate-800` — 1.10:1, invisible — now
  `slate-500`, so the rail actually reads as a rail.
- `SECTION_COUNT = 6` had to be hand-synced with the JSX. One `SECTIONS` array now
  drives both the sections and the dots, so they cannot drift.

Also dropped from `package.json`: `framer-motion`, plus `@headlessui/react` and
`@heroicons/react` (imported nowhere, confirmed zero bytes in the bundle). Four
dead exports removed from `constants/ui.ts`.

## ~~5. Fonts~~ — DONE

**Weights now match what actually loads.** `index.css` sets `font-synthesis: none`
and only Inter 400/500/600/700 are imported, so `font-extrabold` (800) on the hero
`<h1>` and `font-black` (900) on the `01`–`05` numerals were _already_ rendering at
700 — the classes just lied about it. Same for `font-mono font-bold` (700) against
JetBrains Mono, which only has 400/500. All dropped to `font-bold` / `font-medium`.
Verified in the browser: the hero computes to `font-weight: 700` in Inter and the
page is pixel-identical to before, which is the point — nothing changed visually,
the code now says what it does.

**Preloads.** Vite hashes the emitted woff2 filenames, so preload links can't be
written into `index.html` by hand. `scripts/prerender.ts` resolves them after the
build and replaces a `<!--preload:fonts-->` marker, on the root document and all 12
routes. It preloads Inter latin 700 (the LCP `<h1>`) and 400 (body), and throws if
a name stops resolving rather than silently emitting nothing.

## ~~6. Social preview card~~ — DONE

`public/images/og-card.png` — a real **1200×630** card (154 KB) in the site's own
navy/gold treatment, rendered from the actual Inter 800 the hero uses rather than
approximated. It carries the name, the positioning line, the headline sentence,
the degree, and the URL.

It replaces the old `og:image`, which was `profile.jpg` — a **1206×1493 portrait**
declared as `summary_large_image`, so LinkedIn and X were cropping a horizontal
band out of the middle of a face. `og:image:width`/`height` now say 1200/630, and
the card is the site-wide default in both `index.html` and `prerender.ts`.

Because the card is a PNG, the homepage link — the one you'd actually paste into a
profile or an application — is unaffected either way by the open WebP question in
item 3. Only per-project links use the WebP screenshots.

`profile.jpg` is still the `Person.image` in the JSON-LD, which is the right use
for a photo; it was re-encoded from 460 KB (1206×1493) to 143 KB (800×990)
while it was in hand.

## ~~7. Publicly crawlable `.docx`~~ — DONE

Moved to `docs/resume/`, so it stays in the repo as the editable source but is no
longer deployed or fetchable at `/Portfolio/Jutipong_Puntuleng_resume.docx`.
Verified: no `.docx` in `dist/` after a build; the PDF that `About.tsx` links is
still published.

Note the repo is **public**, so the `.docx` here is readable on github.com either
way — moving it out of `public/` stops it being *deployed*, not published. The
separate phone-free "web copy" that was tried and removed protected nothing. If
you want the phone off the public record, the only thing that works is keeping it
off the résumé entirely; it is also already in this repo's git history.

## 8. Cross-browser & mobile QA — PARTLY DONE

**Verified by me, against the production build:**

- **Mobile layout, 386×656 real viewport.** Zero clipping on all six sections, no
  horizontal overflow, 5,877px of reachable scroll. This is the re-check the
  layout change earned — `Skills` in particular grew to 1,272px after the
  `Practices` category was added and still fits.
- **Mobile menu** opens, `aria-expanded` flips, all five links present.
- **Skip link** is the first focusable element in DOM order (27 focusables, zero
  positive `tabindex` anywhere), and renders as a visible gold pill with a focus
  ring. Its target `<main>` now has `tabIndex={-1}` on all four pages — without
  that the link only moved the sequential-navigation start point, and browsers
  disagree about whether a scroll container is focusable at all.
- **No console errors** on the home page or a case-study page.

**Found and fixed during this pass:** `text-slate-500` (#4a6080) is 3.14:1 on the
navy background — under the 4.5:1 AA floor — and it was carrying the mobile menu
links, every contact form label, the About fact labels, and the Skills category
labels. All 20 uses raised to `text-slate-400` (#6a8ab0, 5.64:1). The mobile menu
was the worst case: 16px nav links at 3.14:1.

**Still needs a real device — I cannot do these:**

- **iOS Safari.** The one that matters most: `dvh` behaviour with the collapsing
  URL bar is exactly what the layout fix depends on, and it cannot be simulated.
- **Android Chrome**, **desktop Safari** (font rendering), **desktop Firefox**
  (grid, and `scroll-snap` proximity behaviour differs subtly).
- **A real Lighthouse run** against the deployed site.
- **Tabbing with a physical keyboard** through the whole page — I verified focus
  order structurally, not by driving the browser's own Tab handling.

## Open questions — ANSWERED 2026-09-07, applied

| #   | Answer                             | What changed                                                                                                                                                                                                                                                                    |
| --- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Remove availability                | `personalInfo.availability` deleted; replaced by `openTo: "Remote, or on-site in Bangkok"`. Removed from Hero, About, Skills, Contact and the meta description. A test now fails if any month name reappears in `openTo`.                                                       |
| 2   | velosim.app not public             | No deployed/open-source claim left; `privateNote` carries the access story.                                                                                                                                                                                                     |
| 3   | "built with"                       | Description now reads "built with BIXI Montréal".                                                                                                                                                                                                                               |
| 4   | Skip the 75% figure                | **Left as-is.** Measurement method is in the reply — if it does not reproduce, the number comes down. Still asserted three times with no methodology.                                                                                                                           |
| 5   | Seed data                          | HMS reframed to "seeded and exercised against 447 patient records, 303 staff, 11 facilities". Dropped the `+` padding and the present-tense "managing", which read as a live hospital deployment.                                                                               |
| 6   | Teeraporn is an aesthetic hospital | Row now names **Teeraporn Hospital**; "Healthcare" was right all along. **Résumé still says "a partner business unit within the San Fun Group ecosystem"** — name the client there too. Not asserted on the site: whether the hospital sits inside the San Fun Group ecosystem. |
| 7   | Phone                              | Removed from the contact section. **Not fully solved** — the linked résumé PDF still carries it (see reply).                                                                                                                                                                    |
| 8   | TDD → Familiar                     | Done.                                                                                                                                                                                                                                                                           |
| 9   | Dropped 3                          | Calculator, Date Countdown, Adopt Cat Dog removed. Delivery System kept — its GitHub link was a **verified 404** and is now blank with a `privateNote`. 11 → 8 projects; the copy, sitemap and prerender routes all follow automatically.                                       |
| 10  | Reorder                            | Hand-in-Hand → VeloSim → HMS → Campus Navigation, by what a stranger can verify. **Campus Navigation is public** — I checked, the repo returns 200.                                                                                                                             |
| 11  | Open to remote                     | Stated in Hero, About and Contact.                                                                                                                                                                                                                                              |
| 12  | More automation tools              | Nothing written until confirmed — see the checklist in the reply.                                                                                                                                                                                                               |

## Still open

- **Confirm the published PDF matches the current résumé.**
  `public/Jutipong_Puntuleng_resume.pdf` is what the site links; the editable
  source is `docs/resume/Jutipong_Puntuleng_Resume.docx`. Re-export whenever the
  master changes, and decide whether the phone number stays on it (see item 7).
- **Delivery System's repo.** `github.com/azalmashta/GroupOne-SOEN343-F2024` 404s.
  If you know where it moved, add it back; otherwise it stays link-less.
- **Résumé rewrite** — prompt below.
- **HMS 75% figure** — you measured it but kept no evidence. It stays. It is
  asserted three times across `portfolio.ts` and `About.tsx`; trimming to one or
  two would read as more confident, not less. Say the word.
- **Calculator / Adopt Cat Dog** — both currently dropped. There is no principled
  reason to treat them differently; restore both or neither
  (`git show HEAD:src/data/portfolio.ts` has them).

---

## Résumé rewrite prompt

Run in a fresh session with `docs/resume/Jutipong_Puntuleng_Resume.docx` attached.

> I'm attaching my résumé. Rewrite it for new-grad full-stack / backend software
> engineering roles. I'm Bangkok-based and open to remote.
>
> **Hard rules:**
>
> - Never invent or inflate a number. If a bullet would be stronger with a metric
>   I haven't given you, ask me instead of writing one.
> - Every bullet: what I built, the technical decision, and the outcome. Lead with
>   a verb that isn't "Contributed to" or "Helped".
> - No course codes (SOEN-341/343/390), no "capstone", no "mini-capstone", no
>   "course project". Say the team size and what I owned instead.
> - One page. ATS-parseable: no tables, no columns, no text boxes, no icons.
>
> **Specific corrections:**
>
> 1. The Digital Transformation Consultant role is for **Teeraporn Hospital**, an
>    aesthetic hospital. It is a **partner — NOT part of the San Fun Group
>    ecosystem**. The current line ("a partner business unit within the San Fun
>    Group ecosystem") is wrong on both counts: it hides the client and implies a
>    corporate relationship that doesn't exist. Name the client, describe the
>    engagement, assert no group relationship.
> 2. Add an **Automation & No-Code** line to Technical Skills — Zapier, Make.com,
>    n8n, Softr, Monday.com, LINE API, Google Sheets API. My experience bullets
>    already describe this work; the skills section doesn't list it.
> 3. **AI/LLM:** I build internal tooling with Claude Skills, agents and subagents
>    at work. The artifacts are my employer's property, so I can describe the
>    capability and the outcome but cannot share or demo the code. Write this as a
>    capability + result, never as a portfolio artifact. Add to Technical Skills:
>    "LLM tooling: Claude Skills/Projects, agent and subagent workflows, prompt
>    design."
> 4. Campus Navigation currently claims "95% location tracking accuracy" and
>    "reducing user travel time by 30%". I can't substantiate either — rewrite
>    those bullets around what I actually built (navigation logic, shared UI
>    components, the GitHub Actions CI pipeline) on a nine-person Agile team.
> 5. The HMS "75% query speedup (3s → 0.7s)" is real — I measured it — but I kept
>    no artefact. Keep it, state it **once**, and phrase it so I can defend the
>    method verbally.
> 6. The HMS patient/staff/facility counts are **seed data**, not a live
>    deployment. Phrase them as scale I built and tested against, not a system in
>    production. Drop the "+" suffixes.
> 7. Drop any "Interested in Machine Learning and Cloud Computing" framing; I'm
>    targeting backend/full-stack.
>
> First tell me what you'd change and why. Don't rewrite until I approve the plan.

After the rewrite: edit the master `.docx` in `docs/resume/`, export the PDF over
`public/Jutipong_Puntuleng_resume.pdf`, and re-check the site against it —
`src/data/portfolio.ts` and the `Experience` timeline are the two places that
drift.
