import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { projects } from "../src/data/portfolio";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "https://jpuntul.github.io/Portfolio";
const today = new Date().toISOString().slice(0, 10);

const staticRoutes = ["", "/about", "/projects", "/contact"];
const projectRoutes = projects.map((p) => `/projects/${p.slug}`);
const allRoutes = [...staticRoutes, ...projectRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${BASE}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === "" ? "weekly" : "monthly"}</changefreq>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml);
console.log(`Generated sitemap with ${allRoutes.length} URLs at ${outPath}`);
