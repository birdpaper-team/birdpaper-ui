/**
 * @ Author: Sam
 * @ Create Time: 2023-02-19 17:41:54
 * @ Modified by: Sam
 * @ Modified time: 2023-03-02 15:52:35
 * @ Description:
 */

import { defineConfig } from "vite";
const vuePlugin = require("@vitejs/plugin-vue");
import VueSetupExtend from "vite-plugin-vue-setup-extend";

export default defineConfig({
  plugins: [VueSetupExtend(), vuePlugin()],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./style/index.less";',
      },
    },
  },
});
