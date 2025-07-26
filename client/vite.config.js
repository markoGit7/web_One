// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  root: './client',
  plugins: [react()],

  // Conditional base depending on environment mode
  base: mode === 'production' ? '/web_One/' : '/',

  build: {
    outDir: './dist', // output dist folder relative to root
    
    rollupOptions: {
      input: {
        main: 'index.html',
      }
    }
  },

  server: {
    port: 5173,
    host: true, // exposes to local network
  },
}));