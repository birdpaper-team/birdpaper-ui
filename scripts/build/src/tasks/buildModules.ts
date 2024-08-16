import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import glob from "fast-glob";
import { join } from "path";
import { bpUIRoot, compRoot, distRoot } from "../paths";
import { build } from "vite";
import dts from "vite-plugin-dts";

export async function buildModules() {
  const files = await glob("**/*.{ts,vue}", {
    cwd: bpUIRoot,
    absolute: true,
    onlyFiles: true,
    ignore: ["node_modules/**", "env.d.ts"],
  });

  await build({
    build: {
      target: "modules",
      outDir: distRoot,
      emptyOutDir: true,
      minify: true,
      lib: {
        entry: files,
        formats: ["es", "cjs"],
      },
      rollupOptions: {
        external: ["vue"],
        input: files,
        output: [
          {
            format: "es",
            dir: join(distRoot, "birdpaper-ui", "es"),
            entryFileNames: "[name].mjs",
            preserveModules: true,
            preserveModulesRoot: bpUIRoot,
          },
          {
            format: "cjs",
            dir: join(distRoot, "birdpaper-ui", "lib"),
            entryFileNames: '[name].cjs',
            preserveModules: true,
            preserveModulesRoot: bpUIRoot,
          },
        ],
      },
    },
    plugins: [
      dts({
        exclude: ["node_modules"],
        outDir: join(distRoot, "birdpaper-ui/types"),
        // compilerOptions: {
        //   sourceMap: false,
        //   paths: {
        //    "@birdpaper-ui/*": ["packages/*"]
        //   },
        // },
        insertTypesEntry: true,
      }),
      vue(),
      vueJsx(),
    ],
  });
}
