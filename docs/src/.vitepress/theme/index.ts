import DefaultTheme from "vitepress/theme";
import Layout from "./layout.vue";
import Theme from "vitepress/theme";
import type { EnhanceAppContext } from "vitepress";

import BirdpaperUI from "birdpaper-ui";

import "uno.css";
import "../../style/index.scss";

export default {
  ...Theme,
  Layout,
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(BirdpaperUI);
  },
};
