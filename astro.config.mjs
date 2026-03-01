import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ram4n.com",
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "pl"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
