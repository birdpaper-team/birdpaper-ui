const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, '../packages/index.js'),
      name: 'BirdpaperUI',
      formats: ['es', 'umd', 'amd', 'cjs', 'iife'],
      fileName: (format) => `birdpaper-ui.${format}.js`
    },
    minify: "terser",
    cssCodeSplit: true,
    outDir: "dist",
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()],
})