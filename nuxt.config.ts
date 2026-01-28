import { defineNuxtConfig, NuxtConfig } from "nuxt/config";

const config: NuxtConfig = defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "font-yekanFa overflow-x-hidden",
      },
      htmlAttrs: {
        lang: "fa",
      },
      link: [
        {
          rel: "preload",
          href: "https://cdn.zarinpal.com/assets/fonts/YekanBakhFaNum.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.ico",
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        { name: "msapplication-TileColor", content: "#da532c" },
      ],
    },
  },
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
      "types",
    ],
  },
  nitro: {
    devProxy: {
      "/api": {
        target: process.env.NUXT_PUBLIC_API_BASE,
        changeOrigin: false,
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://fakestoreapi.com",
    },
  },
});

export default config;
