import { defineNuxtConfig, NuxtConfig } from "nuxt/config";

const config: NuxtConfig = defineNuxtConfig({
  devtools: { enabled: true },
  postcss: { plugins: { autoprefixer: {}, tailwindcss: {} } },
  srcDir: "./src",
  css: ["~/assets/scss/main.scss"],
  vite: { plugins: [] },
  modules: ["@nuxt/eslint"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});

export default config;
