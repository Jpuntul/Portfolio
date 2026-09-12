---
name: preflight
description: Pre-commit and pre-deploy checks for the portfolio — gates, outbound link health, orphaned assets, prerender output, and résumé drift. Use before committing a batch of changes, before pushing to main, or when asked whether the site is ready to ship.
---

# Preflight

Run before committing a batch or pushing to `main`. Pushing to `main` deploys, so
anything broken here is live.

## 1. Gates

```sh
pnpm run lint && pnpm run typecheck && pnpm test && pnpm run build
```

`pnpm run build` rewrites the tracked `public/sitemap.xml`. That's expected —
commit it, don't revert it.

## 2. Outbound links

Every `github:` and `demo:` URL in `src/data/portfolio.ts` is a promise to a
hiring manager. They rot.

```sh
python3 - <<'PY' > /tmp/urls.txt
import re, pathlib
s = pathlib.Path("src/data/portfolio.ts").read_text()
for m in re.finditer(r'slug: "([^"]+)"', s):
    nxt = s.find('slug: "', m.end())
    block = s[m.start(): nxt if nxt > 0 else len(s)]
    for field in ("github", "demo"):
        u = re.search(rf'{field}: "([^"]+)"', block)
        if u: print(f"{m.group(1)}\t{field}\t{u.group(1)}")
PY
while IFS=$'\t' read -r slug field url; do
  code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 15 -A "Mozilla/5.0" "$url")
  [ "$code" = "200" ] && flag="" || flag="   <-- BROKEN"
  printf "%-24s %-7s %-4s %s%s\n" "$slug" "$field" "$code" "$url" "$flag"
done < /tmp/urls.txt
```

Anything non-200: make it `private: true` with `github: ""` and a `privateNote`,
or find where it moved. Don't leave a dead button.

Also check the résumé PDF the site links actually exists:

```sh
ls public/Jutipong_Puntuleng_resume.pdf
```

## 3. Orphaned images

Removing a project leaves its screenshot behind:

```sh
comm -13 \
  <(grep -o 'images/projects/[a-z0-9-]*\.\(webp\|svg\)' src/data/portfolio.ts | sed 's|images/projects/||' | sort -u) \
  <(ls public/images/projects/ | grep -E '\.(webp|svg)$' | sort -u)
```

Anything printed is unreferenced — delete it.

## 4. Prerender output

The whole point is that crawlers get real HTML. Verify rather than assume:

```sh
pnpm run build >/dev/null 2>&1
pnpm exec vite preview --port 4173 &
sleep 5
for u in "/Portfolio/" "/Portfolio/projects/" "/Portfolio/projects/hms/"; do
  code=$(curl -s -o /tmp/b.html -w "%{http_code}" "http://localhost:4173$u")
  title=$(grep -o '<title>[^<]*</title>' /tmp/b.html | head -1 | sed 's/<[^>]*>//g')
  printf "%-34s %-5s %s\n" "$u" "$code" "$title"
done
pkill -f "vite preview"
```

Each route must return 200 with **its own** title in the raw HTML — no JS
involved. If every route shows the homepage title, the `<!--seo:start-->` markers
in `index.html` were disturbed.

Sitemap and canonicals must match exactly:

```sh
diff \
  <(grep -o '<loc>[^<]*</loc>' dist/sitemap.xml | sed 's/<[^>]*>//g' | sort) \
  <(find dist -name index.html | xargs grep -h 'rel="canonical"' | sed 's/.*href="\([^"]*\)".*/\1/' | sort) \
  && echo "sitemap == canonicals"
```

## 5. Content drift

- `src/data/portfolio.ts` and the `timeline` array in
  `src/components/sections/Experience.tsx` are the two things that drift from
  `docs/resume/`. Skim both against the current résumé.
- No availability dates or phone number in `personalInfo` — a test enforces the
  dates, nothing enforces the phone.
- No invented metrics anywhere. Any number on the site should be one Jutipong can
  explain the provenance of in an interview.

## 6. Deploy prerequisites

The contact form needs three repo secrets or it throws on every submit:
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
(Settings → Secrets and variables → Actions). `deploy.yml` passes them to the
build; it can't create them.

## 7. Mobile

If layout changed, re-check a real narrow viewport. Resizing the window via
automation is unreliable — load the site in a same-origin iframe sized 390×660 so
media queries evaluate correctly, and measure section geometry:

```js
[...d.querySelectorAll('[data-snap-section]')].map(s => {
  const inner = [...s.children].reduce((a, c) => Math.max(a, c.scrollHeight), 0);
  return { id: s.id, box: s.clientHeight, content: inner, clipped: Math.max(0, inner - s.clientHeight) };
})
```

Every section must report `clipped: 0`. Note that IntersectionObserver callbacks
don't fire reliably under programmatic scrolling in an unpainted tab — if you're
checking the reveal animation rather than geometry, drive it with real scroll
input and confirm a positive control fires before trusting a negative result.
