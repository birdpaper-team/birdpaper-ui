// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./var.less";
import "./index.less";

import NoFound from "./NotFound.vue";
import { EnhanceAppContext } from "vitepress";

import DemoBlock from "../../../components/demo-block";
import BirdpaperUI from "birdpaper-ui"
import "birdpaper-ui/style/index.less"

export default {
  ...DefaultTheme,

  NotFound: NoFound,

  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(BirdpaperUI);

    ctx.app.component("demo-block", DemoBlock);
  },
};
