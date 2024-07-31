import DefaultTheme from "vitepress/theme";
import Layout from "./layout.vue";
import Theme from "vitepress/theme";
import type { EnhanceAppContext } from "vitepress";

import "uno.css";

export default {
  ...Theme,
  Layout,
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
  },
};
