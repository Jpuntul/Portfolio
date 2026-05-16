# Jutipong Puntuleng — Portfolio

[![CI](https://github.com/Jpuntul/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Jpuntul/Portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/Jpuntul/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Jpuntul/Portfolio/actions/workflows/deploy.yml)
[![Live](https://img.shields.io/badge/live-jpuntul.github.io%2FPortfolio-0d9488)](https://jpuntul.github.io/Portfolio/)
[![Stack](https://img.shields.io/badge/stack-React%2019%20%C2%B7%20TS%20%C2%B7%20Tailwind%20v4%20%C2%B7%20Vite%206-0f766e)](#stack)

Personal portfolio for a full-stack software engineering job search. Showcases shipped projects (Healthcare Management System, VeloSim/BIXI Montreal, Hand-in-Hand Auction, Campus Navigation) with metrics, architecture, and source.

**Live:** https://jpuntul.github.io/Portfolio/

## Stack

- **Framework:** React 19 + TypeScript + Vite 6 (SWC)
- **Styling:** Tailwind CSS v4 (zero-config, via `@tailwindcss/vite`)
- **Routing:** React Router 7
- **Forms:** EmailJS for the contact form
- **Tooling:** ESLint (flat config) · Prettier · Husky + lint-staged · GitHub Actions
- **Hosting:** GitHub Pages (deployed from `main`)

## Getting started

```sh
git clone https://github.com/Jpuntul/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open http://localhost:5173/Portfolio/ — note the `/Portfolio/` basename, set in [vite.config.ts](vite.config.ts) and [src/App.tsx](src/App.tsx) so it matches the GitHub Pages path.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over `**/*.{js,jsx,ts,tsx}` |
| `npm run typecheck` | `tsc --noEmit` for full project typecheck |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Watch-mode tests |
| `npm run test:coverage` | Vitest with V8 coverage report |

## Project structure

```
src/
├── App.tsx               # Router + layout
├── main.tsx              # React entry point
├── index.css             # Tailwind import + design tokens
├── constants/
│   └── ui.ts             # Magic-number constants (scroll thresholds, etc.)
├── data/
│   └── portfolio.ts      # Typed source of truth (personalInfo, projects, skills)
├── pages/                # Home, About, Projects, Contact, NotFound
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, About, Projects, Skills (composed on Home)
│   └── *.tsx             # Reusable widgets (ProjectCard, BackToTop, etc.)
└── vite-env.d.ts         # Vite + import.meta.env types

public/
├── images/projects/      # Project screenshots
├── resume.pdf            # Downloadable resume
└── 404.html              # SPA fallback for GitHub Pages
```

All project content lives in [src/data/portfolio.ts](src/data/portfolio.ts) — adding a project or updating metrics is a one-file edit, no component changes needed. The typed schema (`Project`, `Skill`, `PersonalInfo`) is enforced at build time.

## Environment

The contact form posts via EmailJS. Set these in `.env` (see [.env.example](.env.example)) or as GitHub repo secrets for the deploy workflow:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Deployment

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml): install → lint → build → publish to GitHub Pages. The `/Portfolio/` basename in [vite.config.ts](vite.config.ts) is required for the Pages subpath.

## Contact

- **Email:** p.jutipong13@gmail.com
- **LinkedIn:** [linkedin.com/in/jpuntul](https://www.linkedin.com/in/jpuntul/)
- **GitHub:** [github.com/Jpuntul](https://github.com/Jpuntul)
