// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/web_One/',
  root: './client',
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // exposes to local network
  },
});