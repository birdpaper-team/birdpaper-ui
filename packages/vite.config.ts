/**
 * @ Author: Sam
 * @ Create Time: 2023-02-19 17:41:54
 * @ Modified by: Sam
 * @ Modified time: 2023-03-09 18:14:34
 * @ Description:
 */

import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from "vite-plugin-vue-setup-extend";

export default defineConfig({
  plugins: [VueSetupExtend(), vue(), vueJsx()],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
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
