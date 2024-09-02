import { resolve } from "node:path";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [
      {
        find: /^@birdpaper-ui\/(hooks|themes)/,
        replacement: resolve(__dirname, "packages/$1"),
      },
    ],
  },
  optimizeDeps: {
    include: ["@birdpaper-ui/hooks", "@birdpaper-ui/theme"],
  },
  test: {
    globals: true,
    include: ["**/__tests__/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      include: ["**/__tests__/*.test.{ts,tsx}"],
      reporter: ["text", "html", "clover", "json"],
    },
    environment: "happy-dom",
    clearMocks: true,
    testTimeout: 10000,
  },
});
