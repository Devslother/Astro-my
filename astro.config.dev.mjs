import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://astro-my.netlify.app",
  trailingSlash: "never",
  markdown: { shikiConfig: { theme: "nord" } },
  vite: {
    resolve: { alias: { "@": "/src" } },
    define: {
      __DEFINES__: JSON.stringify({}),
    },
    server: {
      fs: {
        strict: false,
      },
    },
    css: {
      modules: {
        localsConvention: "camelCase",
      },
    },
    optimizeDeps: {
      include: ["astro:components"],
    },
  },
});
