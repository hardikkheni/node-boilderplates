import { defineConfig } from 'vite'
import { VitePluginNode } from 'vite-plugin-node';
import checker from 'vite-plugin-checker'

export default defineConfig({
  
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        preserveModules: true,
        dir: 'dist',
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [
    checker({
      typescript: true,
    }),
    VitePluginNode({
      appName: 'viteNodeApp',
      adapter: 'express',
      outputFormat: 'commonjs',
      appPath: './src/index.ts',
      exportName: 'viteNodeApp',
      initAppOnBoot: false,
      tsCompiler: 'esbuild',
      swcOptions: {}
    }),
  ],
  resolve: {
    alias: {
      '@': './src'
    }
  },
  server: {
    port: 3000,
  },
})
