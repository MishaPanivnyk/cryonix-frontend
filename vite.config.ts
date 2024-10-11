import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'cryonix-frontend',
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      // Додайте інші алиаси, якщо потрібно
    },
  }, // Закриваюча дужка для resolve
}); // Закриваюча дужка для defineConfig
