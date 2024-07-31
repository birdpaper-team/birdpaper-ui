import DefaultTheme from "vitepress/theme";
import Layout from "./layout.vue";
import theme from "vitepress/theme";
import type { Theme as ThemeConfig } from "vitepress";

import "uno.css";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

export const Theme: ThemeConfig = {
  ...theme,
  Layout,
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // app.use(NolebaseEnhancedReadabilitiesPlugin);
  },
};

export default Theme;
