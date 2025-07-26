import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.resolve(__dirname, 'client', 'dist', 'index.html');
const dest = path.resolve(__dirname, 'client', 'dist', '404.html');

try {
  fs.copyFileSync(src, dest);
  console.log('✅ 404.html copied successfully.');
} catch (err) {
  console.error('❌ Failed to copy 404.html:', err);
}