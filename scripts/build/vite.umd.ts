import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { distRoot, compRoot } from "./src/paths";
import { join } from "path";

export default async () => {
  const name = "BirdpaperUI";
  const entryFileName = "birdpaper-ui";

  return defineConfig({
    plugins: [vue(), vueJsx()],
    build: {
      outDir: join(distRoot, "birdpaper-ui", "dist"),
      emptyOutDir: false,
      sourcemap: true,
      minify: false,
      lib: {
        entry: compRoot,
        formats: ["umd", "iife"],
        name,
        fileName: (format) => `${entryFileName}.${format}.js`,
      },
    },
  });
};
