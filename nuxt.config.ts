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
      path: '~/components',
      pathPrefix: false, // این خط مهمه تا subfolders بدون prefix هم شناخته بشن
    },
  ],
});

export default config;
