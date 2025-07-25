// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  root: './client',
  plugins: [react()],

  // Conditional base depending on environment mode
  base: mode === 'production' ? '/my-repo-name/' : '/',

  build: {
    outDir: './dist', // output dist folder relative to root
  },

  server: {
    port: 5173,
    host: true, // exposes to local network
  },
}));