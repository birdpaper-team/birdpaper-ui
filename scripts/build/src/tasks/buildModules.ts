import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import glob from "fast-glob";
import { join } from "path";
import { compRoot, distRoot } from "../paths";
import { build } from "vite";
import dts from "vite-plugin-dts";

export async function buildModules() {
  const files = await glob("**/*.{js,ts,vue}", {
    cwd: compRoot,
    absolute: true,
    onlyFiles: true,
  });

  await build({
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
    plugins: [
      dts({
        entryRoot: compRoot,
        outDir: join(distRoot, "types"),
      }),
      vue(),
      vueJsx(),
    ],
  });
}
