import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default async () => {
  const UnoCSS = (await import("unocss/vite")).default;

  return defineConfig({
    plugins: [UnoCSS(), vueJsx()],
    optimizeDeps: {
      exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities/client"],
    },
  });
};
