import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { join } from "path";
import { compRoot, distRoot } from "../paths";
import { build } from "vite";

export async function buildBundle() {
  const name = "BirdpaperUI";
  const entryFileName = "birdpaper-ui";

  await build({
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
}
