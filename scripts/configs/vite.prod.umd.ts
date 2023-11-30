import { InlineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";

export default (type: "component"): InlineConfig => {
  const entry = "components/index.ts";
  const entryFileName = "birdpaper-ui";
  const name = "BirdpaperUI";

  return {
    mode: "production",
    build: {
      target: "modules",
      outDir: "../dist",
      emptyOutDir: false,
      sourcemap: true,
      minify: false,
      rollupOptions: {
        external: ["vue"],
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
      {
        ...vue(),
        apply: config => {
          return config.mode === "test";
        },
      },
      dts(),
      vueJsx(),
    ],
  };
};
