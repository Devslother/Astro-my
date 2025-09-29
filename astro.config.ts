import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://astro-my.vercel.app",
  trailingSlash: "never",
});
