import { defineConfig, type UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { projRoot, bpUIRoot, compRoot, themeRoot, distPkgRoot } from "../paths";

// 基础配置
const baseConfig = {
  plugins: [
    vue(),
    vueJsx(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    alias: {
      "@": bpUIRoot,
    },
  },
};

// ES模块构建配置
export const esConfig = defineConfig({
  ...baseConfig,
  build: {
    target: "modules",
    outDir: resolve(distPkgRoot, "es"),
    emptyOutDir: true,
    minify: true,
    sourcemap: false,
    lib: {
      entry: resolve(bpUIRoot, "index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "vue",
        "birdpaper-icon",
        "@vueuse/components",
        "@vueuse/core",
        "radash",
        "unocss",
        "async-validator",
        "dayjs",
        "vue-virtual-scroller",
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: bpUIRoot,
        entryFileNames: "[name].mjs",
        exports: "named" as const,
      },
    },
  },
  plugins: [
    ...(baseConfig.plugins || []),
    dts({
      root: bpUIRoot,
      exclude: ["node_modules"],
      outDir: resolve(distPkgRoot, "types"),
      insertTypesEntry: true,
    }) as any,
  ],
});

// CommonJS构建配置
export const cjsConfig = defineConfig({
  ...baseConfig,
  build: {
    target: "modules",
    outDir: resolve(distPkgRoot, "lib"),
    emptyOutDir: true,
    minify: true,
    sourcemap: false,
    lib: {
      entry: resolve(bpUIRoot, "index.ts"),
      formats: ["cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "vue",
        "birdpaper-icon",
        "@vueuse/components",
        "@vueuse/core",
        "radash",
        "unocss",
        "async-validator",
        "dayjs",
        "vue-virtual-scroller",
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: bpUIRoot,
        entryFileNames: "[name].cjs",
        exports: "named" as const,
      },
    },
  },
});

// 全量打包配置
export const bundleConfig = defineConfig({
  ...baseConfig,
  build: {
    outDir: resolve(distPkgRoot, "dist"),
    emptyOutDir: true,
    sourcemap: false,
    minify: false,
    lib: {
      entry: compRoot,
      formats: ["es", "cjs", "iife"],
      name: "BirdpaperUI",
      fileName: (format) => `birdpaper-ui.${format === "es" ? "mjs" : format === "cjs" ? "cjs" : "js"}`,
    },
    rollupOptions: {
      external: [
        "vue",
        "birdpaper-icon",
        "@vueuse/components",
        "@vueuse/core",
        "radash",
        "unocss",
        "async-validator",
        "dayjs",
        "vue-virtual-scroller",
      ],
    },
  },
});

// 主题构建配置
export const themeConfig = defineConfig({
  ...baseConfig,
  build: {
    outDir: resolve(distPkgRoot, "theme"),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(themeRoot, "src/index.scss"),
      output: {
        assetFileNames: "[name][extname]",
      },
    },
  },
});