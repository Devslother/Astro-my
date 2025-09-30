import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: "https://astro-my.netlify.app",
  trailingSlash: "never",
  markdown: { shikiConfig: { theme: "nord" } },
  vite: {
    resolve: { alias: { "@": "/src" } },
  },
});
