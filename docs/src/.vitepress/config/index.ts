import { nav } from "./nav";
import { sidebar } from "./sidebar";
import loadCode from "../../../components/demo-block/src/loadCode";
import timeline from "vitepress-markdown-timeline";

const config: import("vitepress").UserConfig = {
  title: "BirdpaperUI",
  titleTemplate: "基于Vue3的UI组件库",
  description: "基于Vue3的UI组件库",
  lastUpdated: false,
  cleanUrls: true,
  appearance: false,
  themeConfig: {
    nav,
    logo: "https://cos.birdpaper.design/birdpaper-ui/v2/public/birdpaper-logo.svg",
    siteTitle: "BirdpaperUI",
    outlineTitle: "大纲",
    outline: "deep",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/liluanhui/birdpaper-ui" }],
    sidebar,
  },
  markdown: {
    theme: "material-theme",
    config: md => {
      md.use(loadCode);
      md.use(timeline);
    },
  },
};

export default config;
