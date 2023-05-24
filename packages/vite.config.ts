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
        javascriptEnabled: true,
        additionalData: '@import "./style/index.less";',
      },
    },
  },
});
