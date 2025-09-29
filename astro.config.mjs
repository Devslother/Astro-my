import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercel(),
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
    define: {
      "process.env.PUBLIC_RECAPTCHA_SITE_KEY": JSON.stringify(
        process.env.PUBLIC_RECAPTCHA_SITE_KEY
      ),
      "process.env.RECAPTCHA_SECRET_KEY": JSON.stringify(
        process.env.RECAPTCHA_SECRET_KEY
      ),
    },
  },
  trailingSlash: "never",
});
