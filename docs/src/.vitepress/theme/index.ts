// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./var.less";
import "./index.less";

import NoFound from "./NotFound.vue";
import { EnhanceAppContext } from "vitepress";

export default {
  ...DefaultTheme,

  NotFound: NoFound,

  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
  },
};
