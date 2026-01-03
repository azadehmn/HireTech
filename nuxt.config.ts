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
      pathPrefix: true,
      ignore: ["icons"],
    },
  ],
  imports: {
    dirs: [
      "composables",
      "composables/*/index.{ts,js,mjs,mts}",
      "composables/**",
    ],
  },
});

export default config;
