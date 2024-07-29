import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vueJsx()],
  optimizeDeps: {
    exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities/client"],
  },
});
