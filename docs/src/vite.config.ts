import { resolve } from "path";
import path from "path";
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
export const projRoot = resolve(__dirname, "..", "..");

import type { Alias } from "vite";
const alias: Alias[] = [];

if (process.env.DOC_ENV !== "production") {
  alias.push(
    {
      find: /^birdpaper-ui(\/(es|lib))?$/,
      replacement: path.resolve(projRoot, "packages/birdpaper-ui/index.ts"),
    },
    {
      find: /^birdpaper-ui\/(es|lib)\/(.*)$/,
      replacement: `${path.resolve(projRoot, "packages")}/$2`,
    }
  );
}

export default defineConfig({
  resolve: {
    alias,
  },
  /** @ts-ignore */
  plugins: [VueSetupExtend(), vueJsx()],
});
