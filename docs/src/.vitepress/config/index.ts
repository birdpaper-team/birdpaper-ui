import { head } from "./head";
import { locales } from "./locales/index";
import loadCode from "../components/demo-block/src/loadCode";

const config: import("vitepress").UserConfig = {
  lastUpdated: false,
  cleanUrls: true,
  appearance: true,
  locales,
  head,
  themeConfig: {
    logo: "https://cos.birdpaper.design/birdpaper-ui/v2/public/birdpaper-ui_logo_text.svg",
    siteTitle: false,
    outline: "deep",
    socialLinks: [
      { icon: "npm", link: "https://www.npmjs.com/package/birdpaper-ui" },
      {
        icon: "github",
        link: "https://github.com/birdpaper-team/birdpaper-ui",
      },
    ],
    search: {
      provider: "local",
    },
  },
  markdown: {
    theme: "dark-plus",
    config: (md) => {
      md.use(loadCode);
    },
  },
};

export default config;
