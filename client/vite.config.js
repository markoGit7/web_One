// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './client', 
  plugins: [react()],
  base: '/web_One/',
  build: {
    outDir: './dist', // output dist folder relative to root
  },

  server: {
    port: 5173,
    host: true, // exposes to local network
  },
});