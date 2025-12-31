import { defineNuxtPlugin, NuxtApp } from "#app";
import { createI18n } from "vue-i18n";

import fa from "../locales/fa.json";

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const i18n = createI18n({
    fallbackLocale: "fa-IR",
    globalInjection: true,
    legacy: false,
    locale: "fa",
    messages: {
      "fa-IR": fa,
    },
  });

  nuxtApp.vueApp.use(i18n);
  nuxtApp.provide("t", i18n.global.t);
});
