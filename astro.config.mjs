import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Yayın alan adı: canonical, Open Graph ve sitemap bağlantıları için kullanılır.
// Alan adı farklıysa SITE_URL ortam değişkeniyle değiştirilebilir.
const site = process.env.SITE_URL ?? "https://cedid.com.tr";

export default defineConfig({
  site,
  trailingSlash: "ignore",
  // Roboto derleme sırasında indirilir ve siteyle birlikte yerel olarak sunulur.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--font-roboto",
      weights: [400, 500, 700, 900],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
