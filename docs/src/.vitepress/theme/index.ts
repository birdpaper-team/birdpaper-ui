import DefaultTheme from "vitepress/theme";
import Layout from "./layout.vue";
import Theme from "vitepress/theme";
import type { EnhanceAppContext } from "vitepress";

// The BirdpaperUI component.
import BirdpaperUI from "birdpaper-ui/index.ts";
import "@birdpaper-ui/theme/src/index.scss";

import BirdpaperIcon from "birdpaper-icon";

// Document internal component.
import DemoBlock from "../components/demo-block";
import DocTabs from "../components/doc-tabs";
import ApiBlock from "../components/api-block";

import "uno.css";
import "../../style/index.scss";

export default {
  ...Theme,
  Layout,
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(BirdpaperUI);
    ctx.app.use(BirdpaperIcon);

    ctx.app.component("demo-block", DemoBlock);
    ctx.app.component("doc-tabs", DocTabs);
    ctx.app.component("api-block", ApiBlock);
  },
};
