import { nav } from "./nav";
import sidebar from "./sidebar";

export default {
  label: "English",
  lang: "en",
  title: "Birdpaper UI",
  titleTemplate: "A Vue UI component library",
  description: "A Vue 3 component library for enterprise admin interfaces",
  themeConfig: {
    nav,
    outline: "deep",
    outlineTitle: "On this page",
    lightModeSwitchTitle: "Switch to light mode",
    darkModeSwitchTitle: "Switch to dark mode",
    darkModeSwitchLabel: "Appearance",
    returnToTopLabel: "Return to top",
    langMenuLabel: "Change language",
    sidebarMenuLabel: "Menu",
    docFooter: {
      prev: "Previous",
      next: "Next",
    },
    sidebar,
    search: {
      provider: "local",
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search",
              },
              modal: {
                noResultsText: "No results found",
                resetButtonTitle: "Clear query",
                footer: {
                  selectText: "to select",
                  navigateText: "to navigate",
                  closeText: "to close",
                },
              },
            },
          },
        },
      },
    },
  },
};
