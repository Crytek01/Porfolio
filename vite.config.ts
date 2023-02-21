/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    nodePolyfills({
      protocolImports: true,
    }),
    process.env.NODE_ENV === 'production' && viteCompression(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, './src/common'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@infrastructure': path.resolve(__dirname, './src/infrastructure'),
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, './test-setup.ts')],
    threads: true,
  },
});
