import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  adapter: vercel(),
  output: "server",
  site: "https://astro-my.vercel.app/",
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  trailingSlash: "never",
});
