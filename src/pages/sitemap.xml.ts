import type { APIRoute } from "astro";
import { navigationItems, legalLinks } from "../data/site";
import { categories, products, categoryHref, productHref } from "../data/catalog";

/** Tüm sayfalar merkezi veriden üretilir; yeni ürün eklendiğinde sitemap otomatik güncellenir. */
export const GET: APIRoute = ({ site }) => {
  const paths = [
    ...navigationItems.map((item) => item.href),
    ...categories.map((category) => categoryHref(category.slug)),
    ...products.map((product) => productHref(product)),
    ...legalLinks.map((link) => link.href),
  ];

  const urls = [...new Set(paths)]
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
