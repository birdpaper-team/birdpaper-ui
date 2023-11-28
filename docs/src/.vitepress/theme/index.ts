// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./var.less";
import "./index.less";
import "./font.less";
import "../../../components/style/index.less";
import "vitepress-markdown-timeline/dist/theme/index.css";

import NoFound from "./NotFound.vue";
import { EnhanceAppContext } from "vitepress";

import DemoBlock from "../../../components/demo-block";
import TableBlock from "../../../components/table-block";

import BirdpaperUI from "birdpaper-ui";
import BirdpaperIcon from "birdpaper-ui/components/icon"
import "birdpaper-ui/style/index.less";

import "remixicon/fonts/remixicon.css";

export default {
  ...DefaultTheme,

  NotFound: NoFound,

  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(BirdpaperUI);
    ctx.app.use(BirdpaperIcon);

    ctx.app.component("demo-block", DemoBlock);
    ctx.app.component("table-block", TableBlock);
  },
};
