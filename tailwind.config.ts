import type { Config } from "tailwindcss";
import { colors } from "./src/designToken/color";
import { borderRadius } from "./src/designToken/borderRadius";
import { fontSize } from "./src/designToken/fontSize";
import { spacing } from "./src/designToken/spacing";
import { fontFamily } from "./src/designToken/fontFamily";
import { screens } from "./src/designToken/screens";
import { boxShadow } from "./src/designToken/boxShadow";

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
      boxShadow,
      screens,
      borderRadius,
      fontSize,
      spacing,
      fontFamily,
    },
  },
};

export default config;
