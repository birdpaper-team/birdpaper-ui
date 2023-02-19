/**
 * @ Author: Sam
 * @ Create Time: 2023-02-17 20:59:44
 * @ Modified by: Sam
 * @ Modified time: 2023-02-19 18:04:17
 * @ Description:
 */

import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";
import flexSearchIndexOptions from "flexsearch";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

var options = {
  ...flexSearchIndexOptions,
  previewLength: 62,
  buttonLabel: "搜索",
  placeholder: "搜索文档",
};

export default defineConfig({
  /** @ts-ignore */
  plugins: [VueSetupExtend(), SearchPlugin(options)],
});
