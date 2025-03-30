import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    VitePluginNode({
      adapter: "express",
      appPath: "./src/index.ts",
      exportName: "viteNodeApp",
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    ssr: true,
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
});
