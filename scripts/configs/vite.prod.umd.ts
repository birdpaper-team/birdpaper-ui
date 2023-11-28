import { InlineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import external from "../plugins/vite-plugin-external";
import vueExportHelper from "../plugins/vite-plugin-vue-export-helper";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import dts from "vite-plugin-dts";

export default (type: "component" | "icon"): InlineConfig => {
  const entry = type === "component" ? "components/index.ts" : "components/icon/index.ts";
  const entryFileName = type === "component" ? "birdpaper-ui" : "birdpaper-ui-icon";
  const name = type === "component" ? "BirdpaperUI" : "BirdpaperUIIcon";

  return {
    mode: "production",
    build: {
      target: "modules",
      outDir: "../dist",
      emptyOutDir: false,
      sourcemap: true,
      minify: false,
      rollupOptions: {
        external: "vue",
        output: [
          {
            format: "umd",
            name,
            entryFileNames: `${entryFileName}.js`,
            globals: {
              vue: "Vue",
            },
          },
          {
            format: "umd",
            name,
            entryFileNames: `${entryFileName}.min.js`,
            globals: {
              vue: "Vue",
            },
          },
        ],
      },
      // 开启lib模式
      lib: {
        entry,
        formats: ["umd"],
        name,
      },
    },
    // @ts-ignore vite内部类型错误
    plugins: [
      external(),
      {
        ...vue(),
        apply: config => {
          return config.mode === "test";
        },
      },
      vueJsx(),
      vueExportHelper(),
      VueSetupExtend(),
      dts(),
    ],
  };
};
