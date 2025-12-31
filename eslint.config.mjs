import withNuxt from "./.nuxt/eslint.config.mjs";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default withNuxt({
  plugins: {
    vue,
  },
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser,
      extraFileExtensions: [".vue"],
    },
  },
  ignores: ["dist/**", "public/**", ".nuxt/**", "node_modules/**", "libs/**"],
  rules: {
    "vue/multi-word-component-names": "off",
    "no-console": "warn",
  },
});
