import { InlineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import external from "../plugins/vite-plugin-external";
import dts from "vite-plugin-dts";
import vueExportHelper from "../plugins/vite-plugin-vue-export-helper";

const config: InlineConfig = {
  mode: "production",
  build: {
    target: "modules",
    outDir: "../es",
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: ["components/index.ts"],
      output: [
        {
          format: "es",
          dir: "../es",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "components",
        },
        {
          format: "commonjs",
          dir: "../lib",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "components",
        },
      ],
    },
    // 开启lib模式，但不使用下面配置
    lib: {
      entry: "components/index.ts",
      formats: ["es", "cjs"],
    },
  },
  // @ts-ignore vite内部类型错误
  plugins: [
    external(),
    {
      ...vue(),
      apply: (config) => {
        return config.mode === "test";
      },
    },
    ,
    vueJsx(),
    dts(),
    vueExportHelper(),
  ],
};

export default config;
