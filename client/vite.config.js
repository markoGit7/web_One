// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// These two lines simulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  root: './client',
  plugins: [react()],
  base: mode === 'production' ? '/web_One/' : '/',
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')  // ✅ use full path
      }
    }
  },
  server: {
    port: 5173,
    host: true,
  },
}));
