import { defineConfig, PluginOption, type Plugin } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

/** Drop VitePress default Inter font faces (~650KB) — docs use Quicksand + system stack. */
function stripVitepressFonts(): Plugin {
  return {
    name: "birdpaper-strip-vitepress-fonts",
    enforce: "pre",
    transform(code, id) {
      if (!id.includes("vitepress") || !id.includes("fonts")) return;
      if (!/\.css($|\?)/.test(id) && !id.includes("fonts.css")) return;
      return "/* vitepress Inter fonts stripped for smaller docs build */\n";
    },
    generateBundle(_options, bundle) {
      for (const fileName of Object.keys(bundle)) {
        if (/inter-.*\.woff2$/i.test(fileName)) {
          delete bundle[fileName];
        }
      }
    },
  };
}

export default async () => {
  const UnoCSS = (await import("unocss/vite")).default;

  return defineConfig({
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    plugins: [vueJsx(), UnoCSS() as PluginOption, stripVitepressFonts()],
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "vitepress",
      ],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
      ],
    },
    build: {
      target: "es2020",
      cssCodeSplit: true,
      cssMinify: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("birdpaper-icon")) return "birdpaper-icon";
            if (id.includes("@birdpaper-ui/components") || id.includes("packages/components")) {
              return "birdpaper-ui";
            }
            if (id.includes("node_modules/vue/") || id.includes("node_modules/@vue/")) {
              return "vue-vendor";
            }
            if (id.includes("@nolebase/")) return "nolebase";
          },
        },
      },
    },
  });
};
