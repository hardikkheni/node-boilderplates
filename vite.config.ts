/// <reference types="vitest/config" />

// Configure Vitest (https://vitest.dev/config/)

import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
});
