import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "packages"),
      "@birdpaper-ui/components": resolve(__dirname, "packages/components"),
      "@birdpaper-ui/hooks": resolve(__dirname, "packages/hooks"),
      "@birdpaper-ui/theme": resolve(__dirname, "packages/theme"),
      "birdpaper-icon": resolve(__dirname, "node_modules/birdpaper-icon"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "packages/birdpaper-ui/index.ts"),
      name: "BirdpaperUI",
      fileName: (format) => `birdpaper-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "@birdpaper-ui/hooks", "@birdpaper-ui/theme", "birdpaper-icon", /^@birdpaper-ui\/.*$/],
      output: {
        globals: {
          vue: "Vue",
          "@birdpaper-ui/hooks": "BirdpaperUIHooks",
          "@birdpaper-ui/theme": "BirdpaperUITheme",
          "birdpaper-icon": "BirdpaperUIIcons",
        },
      },
    },
  },
});
