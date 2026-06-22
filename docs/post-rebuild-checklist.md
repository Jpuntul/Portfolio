# Post-rebuild checklist

The portfolio rebuild ships 5 phases of code changes. A handful of high-leverage items still need you to act outside this repo. Tackle them in this order — the time-to-impact is best at the top.

## 1. Update the resume PDF (5 min, blocking)

[public/resume.pdf](../public/resume.pdf) still says **"Expected Graduation: April 2026"** and **"Final-year Software Engineering student"** — out of date as of May 2026. Update:

- Header line: `Software Engineer · B.Eng. Software Engineering, Concordia (2026)`
- Drop "Final-year" from the summary.
- Replace "Expected Graduation: April 2026" with "Graduated: May 2026".
- (Optional) Add "Available for full-time roles from August 2026" near the top.

Drop the new PDF into [public/resume.pdf](../public/resume.pdf), overwriting the old one. The site picks it up on next deploy — no code change needed.

## 2. Deploy Hand-in-Hand Auction live demo (~15 min, high leverage)

The repo at [github.com/Jpuntul/hand-in-hand-auction](https://github.com/Jpuntul/hand-in-hand-auction) already has a Firebase project configured but no live URL. Deploying turns the project from a code link into a clickable demo — the single largest credibility boost you can get in 15 minutes.

```sh
cd ../hand-in-hand-auction        # wherever you keep the repo
npm install
firebase login                    # if not already logged in
npm run build
firebase deploy --only hosting
```

Note the URL Firebase prints. Then in [src/data/portfolio.ts](../src/data/portfolio.ts) update the `hand-in-hand-auction` entry:

```ts
demo: "https://YOUR-FIREBASE-URL.web.app",
```

Commit, push to `main`, GitHub Actions redeploys the portfolio with the demo link live.

## 3. Update GitHub profile (10 min)

### Bio (Settings → Public profile)

Replace:

> Interested in Machine Learning and Cloud Computing; currently studying Software Engineering

With:

> Software Engineer · Backend systems, real-time apps, distributed data · Concordia ’26 · Available from August 2026 · 🇹🇭 Bangkok

### Profile README

GitHub treats a public repo named `Jpuntul/Jpuntul` with a `README.md` as your profile README. Create it. Suggested content lives at [docs/github-profile-readme.md](./github-profile-readme.md) in this repo — copy it into a new `README.md` in a fresh `Jpuntul/Jpuntul` repo.

### Pinned repositories (Profile page → Customize your pins)

Recommended order:

1. **HMS** — strongest shipped system
2. **VeloSim** — BIXI partnership; pin if accessible from your account, otherwise reference it in the profile README under "Featured contributions"
3. **SOEN-390** — capstone, has stars
4. **hand-in-hand-auction** — strong UX story
5. **Portfolio** — this site

Unpin **Adopt_cat-dog** and **Calculator** — early-learner projects dilute the highlight reel.

## 4. Run Lighthouse on the deployed site

After [#2](#2-deploy-hand-in-hand-auction-live-demo-15-min-high-leverage) merges:

- Open Chrome DevTools → Lighthouse → Mobile + Desktop.
- Targets: ≥95 on Performance, Accessibility, Best Practices, SEO.
- The known weak point is the project screenshot file sizes (PNG). If Performance < 95, convert the largest PNGs in [public/images/projects/](../public/images/projects/) to WebP and update `image:` paths.

## 5. Cross-browser & mobile QA (~10 min)

Visit https://jpuntul.github.io/Portfolio/ on:

- iOS Safari (real device if possible — the `dvh`/`100vh` quirk only shows there)
- Android Chrome
- Desktop Firefox (CSS grid quirks)
- Desktop Safari (font rendering)

Tab through every page using only the keyboard. The skip-to-main link should appear on first tab.

## 6. EmailJS env vars in CI (one-time)

The contact form is broken in production unless these are set as repo secrets feeding the deploy workflow:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Settings → Secrets and variables → Actions → New repository secret (for each). The workflow already reads `process.env.VITE_*` during `npm run build`; values get baked into the static bundle. Confirm contact form works on the deployed site after the next push.

---

When all six are done, ping yourself a test message via the live contact form to confirm the whole loop works end-to-end. That's the launch test.
