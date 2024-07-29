import DefaultTheme from "vitepress/theme";
import type { Theme as ThemeConfig } from "vitepress";

import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(NolebaseEnhancedReadabilitiesPlugin);
    // 其他的配置...
  },
};

export default Theme;
