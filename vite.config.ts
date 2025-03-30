import path from 'node:path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    VitePluginNode({
      adapter: 'express',
      appPath: './src/index.ts',
      exportName: 'viteNodeApp',
    }),
    checker({
      typescript: true,
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    ssr: true,
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
});
