import { head } from "./head";
import { locales } from "./locales/index";

const config: import("vitepress").UserConfig = {
  lastUpdated: false,
  ignoreDeadLinks: true,
  cleanUrls: true,
  appearance: true,
  cacheDir: ".vitepress/cache-local",
  locales,
  head,
  themeConfig: {
    logo: {
      dark: "https://cos.birdpaper.design/birdpaper-ui/v3/logo/logo-white.svg",
      light: "https://cos.birdpaper.design/birdpaper-ui/v3/logo/logo-black.svg",
    },
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
    theme: {
      light: "min-light",
      dark: "min-dark",
    },
  },
};

export default config;
