import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { join } from "path";
import { compRoot, distPkgRoot } from "../paths";
import { build } from "vite";

export async function buildBundle() {
  const name = "BirdpaperUI";
  const entryFileName = "birdpaper-ui";

  const fileName = (format: string) =>
    `${entryFileName}.${
      format === "es" ? "mjs" : format === "cjs" ? "cjs" : "js"
    }`;

  return await build({
    plugins: [vue(), vueJsx()],
    build: {
      outDir: join(distPkgRoot, "dist"),
      emptyOutDir: true,
      sourcemap: false,
      minify: false,
      lib: {
        entry: compRoot,
        formats: ["es", "cjs", "iife"],
        name,
        fileName,
      },
    },
  });
}
