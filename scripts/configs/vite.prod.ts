import { InlineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import external from "../plugins/vite-plugin-external";
import vueExportHelper from "../plugins/vite-plugin-vue-export-helper";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import dts from "vite-plugin-dts";

const config: InlineConfig = {
  mode: "production",
  build: {
    target: "modules",
    outDir: "../dist",
    emptyOutDir: false,
    minify: "terser",
    sourcemap: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    brotliSize: false,
    rollupOptions: {
      input: ["components/index.ts", "components/icon/index.ts"],
      output: [
        {
          format: "es",
          dir: "../dist/es",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "components",
        },
        {
          format: "commonjs",
          dir: "../dist/lib",
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
      apply: config => {
        return config.mode === "test";
      },
    },
    ,
    vueJsx(),
    vueExportHelper(),
    VueSetupExtend(),
    dts(),
  ],
};

export default config;
