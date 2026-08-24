const prefix = (link: string) => (link.startsWith("http") ? link : `/en${link}`);

export const nav = [
  {
    text: "Design",
    items: [
      { text: "Introduction", link: prefix("/design/introduction") },
      { text: "Color", link: prefix("/design/color") },
      { text: "Principles", link: prefix("/design/principle") },
      { text: "Style Guide", link: prefix("/design/guide") },
      { text: "Dark Mode", link: prefix("/design/dark") },
      {
        text: "Resources",
        items: [{ text: "Icons", link: "https://icon.birdpaper.design" }],
      },
    ],
  },
  {
    text: "Develop",
    items: [
      {
        items: [
          { text: "Install", link: prefix("/develop/install") },
          { text: "Quick Start", link: prefix("/develop/start") },
          { text: "Theming", link: prefix("/develop/theme") },
          { text: "Changelog", link: prefix("/develop/changelog") },
        ],
      },
      {
        text: "Guides",
        items: [
          { text: "Local Development", link: prefix("/develop/local-dev") },
          { text: "Contributing", link: prefix("/develop/pr") },
        ],
      },
    ],
  },
  {
    text: "Components",
    items: [
      { text: "Catalog", link: prefix("/components/catalog") },
      { text: "Config Provider", link: prefix("/components/config") },
    ],
  },
  { text: "Sponsor", link: prefix("/donate") },
];
