const { writeFileSync, mkdirSync } = require("fs");
const { dirname } = require("path");

async function generateSitemap() {
  // We have to use a dynamic import for globby because it is an ESM-only package.
  const { globby } = await import("globby");
  const pages = await globby([
    "pages/**/*.{js,jsx,ts,tsx,md,mdx}", // Include all page file types
    "!pages/_*.{js,jsx,ts,tsx,md,mdx}", // Ignore Next.js specific files
    "!pages/api", // Ignore API routes
    "!pages/404.js", // Ignore 404 page
  ]);

  // I'm using your homepage from package.json, but with https as it's best practice.
  const siteUrl = "https://doc.vivescriptsolutions.com";

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const path = page
      .replace("pages", "")
      .replace(/\.(js|jsx|ts|tsx|md|mdx)$/, "")
      .replace("/index", "");
    const route = path === "" ? "/" : path;
    return `  <url>
    <loc>${`${siteUrl}${route}`}</loc>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

  const sitemapPath = "public/sitemap.xml";
  try {
    // Ensure the public directory exists
    mkdirSync(dirname(sitemapPath), { recursive: true });
    writeFileSync(sitemapPath, sitemap.trim());
    console.log(
      `Generated sitemap for ${pages.length} pages in ${sitemapPath}`
    );
  } catch (err) {
    console.error("Could not write sitemap file:", err);
  }
}

generateSitemap();
