const path = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "../components/index.ts"),
      name: "BirdpaperUI",
      formats: ["es", "umd", "cjs", "iife"],
      fileName: "birdpaper-ui",
      // fileName: format => `birdpaper-ui.${format}.js`,
    },
    minify: "terser",
    sourcemap: true, // 输出单独 source文件
    reportCompressedSize: true,  // 生成压缩大小报告
    cssCodeSplit: true,
    outDir: "dist",
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue(), vueJsx()],
});
