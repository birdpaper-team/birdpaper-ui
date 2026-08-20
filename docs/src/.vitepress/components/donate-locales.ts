export type DonateLocale = {
  eyebrow: string;
  brand: string;
  headline: string;
  lead: string;
  siteLabel: string;
  siteTitle: string;
  siteDesc: string;
  siteCta: string;
  sponsorLabel: string;
  sponsorTitle: string;
  sponsorDesc: string;
  sponsorCta: string;
  thanks: string;
};

export const donateLocales: Record<"zh-CN" | "en", DonateLocale> = {
  "zh-CN": {
    eyebrow: "Support · Open Source",
    brand: "Birdpaper UI",
    headline: "如果你觉得有帮助，欢迎支持一下",
    lead: "Birdpaper UI 持续维护依赖社区与个人投入。你可以通过作者主页了解更多，或前往赞助页直接支持项目推进。",
    siteLabel: "作者主页",
    siteTitle: "了解作者与作品",
    siteDesc: "看看组件库背后的人与想法，以及近期动态。",
    siteCta: "访问作者主页",
    sponsorLabel: "赞助支持",
    sponsorTitle: "前往赞助页",
    sponsorDesc: "通过赞助支持开源维护，让 Birdpaper UI 走得更远、更稳。",
    sponsorCta: "去赞助",
    thanks: "感谢每一位使用者与贡献者。",
  },
  en: {
    eyebrow: "Support · Open Source",
    brand: "Birdpaper UI",
    headline: "If this library helps you, consider supporting it",
    lead: "Birdpaper UI is maintained with community help and personal effort. Visit the author’s site to learn more, or go to the sponsor page to support ongoing work.",
    siteLabel: "Author",
    siteTitle: "About the author",
    siteDesc: "Learn about the person and ideas behind the library.",
    siteCta: "Visit author site",
    sponsorLabel: "Sponsor",
    sponsorTitle: "Go to sponsor page",
    sponsorDesc: "Sponsor open-source maintenance so Birdpaper UI can keep improving.",
    sponsorCta: "Sponsor now",
    thanks: "Thanks to every user and contributor.",
  },
};
