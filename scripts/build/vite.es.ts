import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import glob from "fast-glob";
import { distRoot, compRoot } from "./src/paths";
import { join } from "path";

export default async () => {
  const files = await glob("**/*.{js,ts,vue}", {
    cwd: compRoot,
    absolute: true,
    onlyFiles: true,
  });

  return defineConfig({
    plugins: [vue(), vueJsx()],
    build: {
      target: "modules",
      outDir: distRoot,
      emptyOutDir: true,
      minify: false,
      lib: {
        entry: files,
        formats: ["es", "cjs"],
      },
      rollupOptions: {
        external: ["vue"],
        input: compRoot,
        output: [
          {
            format: "es",
            dir: join(distRoot, "birdpaper-ui", "es"),
            entryFileNames: "[name].js",
            preserveModules: true,
            preserveModulesRoot: "components",
          },
          {
            format: "commonjs",
            dir: join(distRoot, "birdpaper-ui", "lib"),
            entryFileNames: "[name].js",
            preserveModules: true,
            preserveModulesRoot: "components",
          },
        ],
      },
    },
  });
};
