// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './client',
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // exposes to local network
  },
});