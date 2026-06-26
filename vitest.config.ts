import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "packages"),
      "@birdpaper-ui/components": resolve(__dirname, "packages/components"),
      "@birdpaper-ui/hooks": resolve(__dirname, "packages/hooks"),
      "@birdpaper-ui/theme": resolve(__dirname, "packages/theme"),
      "birdpaper-icon": resolve(__dirname, "node_modules/birdpaper-icon"),
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: [],
  },
});
