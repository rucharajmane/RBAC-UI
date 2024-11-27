import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // Automatically opens the app in the browser
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Enable SPA fallback
  server: {
    fs: {
      strict: false,
    },
  },
  preview: {
    port: 5174,
  },
});
