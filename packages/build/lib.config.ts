const path = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "../components/index.ts"),
      name: "BirdpaperUI",
      formats: ["es", "umd", "cjs", "iife"],
      fileName: "birdpaper-ui",
    },
    minify: "terser",
    sourcemap: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    outDir: "../dist",
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    VueSetupExtend(),
    vue(),
    vueJsx(),
    // dts({
    //   insertTypesEntry: true, copyDtsFiles: false
    // }),
    dts()
  ],
});
