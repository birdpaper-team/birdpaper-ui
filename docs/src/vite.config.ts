import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";
import flexSearchIndexOptions from "flexsearch";

var options = {
  ...flexSearchIndexOptions,
  previewLength: 62,
  buttonLabel: "搜索",
  placeholder: "搜索文档",
};

export default defineConfig({
  /** @ts-ignore */
  plugins: [SearchPlugin(options)],
});
