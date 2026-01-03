import type { Config } from "tailwindcss";
import { colors } from "./src/designToken/color";
import { fontSize } from "./src/designToken/fontSize";
import { spacing } from "./src/designToken/spacing";
import { fontFamily } from "./src/designToken/fontFamily";

const config: Config = {
  content: [
    "./src/components/**/*.{vue,ts}",
    "./src/pages/**/*.{vue,ts}",
    "./src/layouts/**/*.{vue,ts}",
    "./src/app.vue",
  ],
  theme: {
    extend: {
      colors,
      fontSize,
      spacing,
      fontFamily,
    },
  },
};

export default config;
