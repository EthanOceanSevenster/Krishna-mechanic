import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [vue()],
  build: isSsrBuild
    ? {
        // Server bundle used only by prerender.mjs; .mjs so plain Node can import it
        // without the package needing "type": "module".
        outDir: 'dist-ssr',
        rollupOptions: { output: { entryFileNames: '[name].mjs' } }
      }
    : {},
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}))
