import path from 'node:path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  root: path.resolve(__dirname),
  build: {
    sourcemap: true,
    target: 'node22',
    rollupOptions: {
      output: {
        preserveModules: true,
        dir: 'dist',
        entryFileNames: '[name].cjs',
      },
    },
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
      swcOptions: {},
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});
