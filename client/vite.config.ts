import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import csp from 'vite-plugin-csp';

import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    csp(),
    svgr(),
    nodePolyfills({
      protocolImports: true,
    }),
  ],
});
