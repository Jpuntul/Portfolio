/**
 * Static pre-render for GitHub Pages.
 *
 * Pages serves files, not routes: a request for /Portfolio/projects/hms matches
 * nothing, so Pages returns public/404.html *with a 404 status*. The SPA shim in
 * that file then repairs the URL for a browser — but crawlers never get that far.
 * Google sees a 404 and skips the page; LinkedIn, Slack and iMessage do not run
 * JS at all, so every project link previews as "Redirecting..." with no image.
 *
 * This writes a real index.html for each route, with that route's title,
 * description, canonical and social tags baked in. The React app still takes
 * over on load — the file only exists so the first byte a crawler reads is right.
 *
 * Runs after `vite build` (see the "build" script in package.json).
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/portfolio";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");
const SITE = "https://jpuntul.github.io/Portfolio";

const START = "<!--seo:start-->";
const END = "<!--seo:end-->";
const PRELOAD = "<!--preload:fonts-->";

/**
 * Font faces used above the fold, in the order they matter. Vite hashes the
 * emitted filenames, so they can only be resolved after the build — which is why
 * the preload links are injected here rather than written into index.html.
 */
const PRELOAD_FONTS = ["inter-latin-700-normal", "inter-latin-400-normal"];

function preloadLinks(): string {
  const assets = readdirSync(resolve(DIST, "assets"));
  const links = PRELOAD_FONTS.map((stem) => {
    const matches = assets.filter(
      (name) => name.startsWith(stem) && name.endsWith(".woff2"),
    );
    if (matches.length !== 1) {
      throw new Error(
        matches.length === 0
          ? `prerender: no built woff2 matching "${stem}" — did the @fontsource ` +
              `imports in src/main.tsx change?`
          : `prerender: ${matches.length} built woff2 files match "${stem}" ` +
              `(${matches.join(", ")}) — preloading an arbitrary one would be wrong, ` +
              `so narrow the stem in PRELOAD_FONTS.`,
      );
    }
    return `    <link rel="preload" as="font" type="font/woff2" crossorigin href="/Portfolio/assets/${matches[0]}" />`;
  });
  return links.join("\n");
}

/** Escape a string for use inside a double-quoted HTML attribute. */
function attr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface RouteMeta {
  /** Route path relative to the site root, with a trailing slash. */
  path: string;
  title: string;
  description: string;
  /** Absolute URL of the social image. */
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  ogType: "profile" | "article";
}

function seoBlock(meta: RouteMeta): string {
  const url = `${SITE}${meta.path}`;
  const lines = [
    `<title>${attr(meta.title)}</title>`,
    `<meta name="description" content="${attr(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${meta.ogType}" />`,
    `<meta property="og:site_name" content="Jutipong Puntuleng" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${attr(meta.title)}" />`,
    `<meta property="og:description" content="${attr(meta.description)}" />`,
    `<meta property="og:image" content="${attr(meta.image)}" />`,
    `<meta property="og:image:alt" content="${attr(meta.imageAlt)}" />`,
    ...(meta.imageWidth && meta.imageHeight
      ? [
          `<meta property="og:image:width" content="${meta.imageWidth}" />`,
          `<meta property="og:image:height" content="${meta.imageHeight}" />`,
        ]
      : []),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(meta.title)}" />`,
    `<meta name="twitter:description" content="${attr(meta.description)}" />`,
    `<meta name="twitter:image" content="${attr(meta.image)}" />`,
  ];
  return lines.map((line) => `    ${line}`).join("\n");
}

/**
 * Locate a marker that must appear exactly once. Existence alone is not enough:
 * a duplicated or reordered marker would still slice "successfully" and emit a
 * document with two canonicals, or with the homepage's tags left in place — a
 * page that looks fine and is wrong. Fail loudly instead.
 */
function soleMarkerIndex(html: string, marker: string): number {
  const first = html.indexOf(marker);
  if (first === -1) {
    throw new Error(
      `prerender: could not find ${marker} in dist/index.html — did the markers ` +
        `get removed from index.html?`,
    );
  }
  if (html.indexOf(marker, first + marker.length) !== -1) {
    throw new Error(
      `prerender: ${marker} appears more than once in dist/index.html; the SEO ` +
        `block must be delimited exactly once.`,
    );
  }
  return first;
}

const built = readFileSync(resolve(DIST, "index.html"), "utf8");
soleMarkerIndex(built, PRELOAD);
const shell = built.replace(PRELOAD, preloadLinks().trimStart());

const startIdx = soleMarkerIndex(shell, START);
const endIdx = soleMarkerIndex(shell, END);
if (startIdx >= endIdx) {
  throw new Error(
    `prerender: ${START} appears after ${END} in dist/index.html; the SEO block ` +
      `markers are reversed.`,
  );
}

const DEFAULT_IMAGE = `${SITE}/images/og-card.png`;
const DEFAULT_IMAGE_SIZE = { width: 1200, height: 630 };

const routes: RouteMeta[] = [
  {
    path: "/projects/",
    title: "Projects · Jutipong Puntuleng",
    description: `${projects.length} projects across full-stack web, real-time systems, and cross-platform mobile.`,
    image: DEFAULT_IMAGE,
    imageAlt: "Jutipong Puntuleng — Full-Stack Software Engineer",
    ...DEFAULT_IMAGE_SIZE,
    ogType: "profile",
  },
  ...projects.map((project): RouteMeta => {
    const hasImage = Boolean(project.image);
    return {
      path: `/projects/${project.slug}/`,
      title: `${project.title} · Jutipong Puntuleng`,
      description: project.tagline ?? project.shortDesc,
      image: hasImage ? `${SITE}/${project.image}` : DEFAULT_IMAGE,
      imageAlt: hasImage
        ? `${project.title} screenshot`
        : "Jutipong Puntuleng — Full-Stack Software Engineer",
      imageWidth: hasImage ? project.imageWidth : DEFAULT_IMAGE_SIZE.width,
      imageHeight: hasImage ? project.imageHeight : DEFAULT_IMAGE_SIZE.height,
      ogType: "article",
    };
  }),
];

for (const route of routes) {
  const block = seoBlock(route);
  const html =
    shell.slice(0, startIdx + START.length) +
    "\n" +
    block +
    "\n    " +
    shell.slice(endIdx);

  if (html === shell) {
    throw new Error(`prerender: ${route.path} produced an unchanged document`);
  }

  const outDir = resolve(DIST, `.${route.path}`);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), html);
}

// The root document needs the preloads too, and it is not one of the routes.
writeFileSync(resolve(DIST, "index.html"), shell);

console.log(
  `Pre-rendered ${routes.length} routes into dist/ (+ font preloads on all ${routes.length + 1})`,
);
