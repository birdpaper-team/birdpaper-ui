import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import glob from "fast-glob";
import { join } from "path";
import { bpUIRoot, distPkgRoot } from "../paths";
import { build } from "vite";
import dts from "vite-plugin-dts";

export async function buildModules() {
  const files = await glob("**/*.{ts,vue}", {
    cwd: bpUIRoot,
    absolute: true,
    onlyFiles: true,
    ignore: ["node_modules/**/*", "env.d.ts"],
  });

  const preserveConfig = {
    preserveModules: true,
    preserveModulesRoot: bpUIRoot,
  };

  return await build({
    esbuild: {
      drop: ["debugger"],
      pure: ["console.log"],
    },
    build: {
      target: "modules",
      emptyOutDir: true,
      minify: true,
      sourcemap: false,
      lib: {
        entry: files,
        formats: ["es", "cjs"],
      },
      chunkSizeWarningLimit: 10000,
      rollupOptions: {
        external: ["vue", "birdpaper-icon", "@vueuse/components", "@vueuse/core", "radash"],
        input: files,
        output: [
          {
            format: "es",
            dir: join(distPkgRoot, "es"),
            entryFileNames: "[name].mjs",
            ...preserveConfig,
          },
          {
            format: "cjs",
            dir: join(distPkgRoot, "lib"),
            entryFileNames: "[name].cjs",
            ...preserveConfig,
          },
        ],
      },
    },
    plugins: [
      dts({
        exclude: ["node_modules"],
        outDir: join(distPkgRoot, "types"),
        insertTypesEntry: true,
      }),
      vue(),
      vueJsx(),
    ],
  });
}
