import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',        // Ensure the app is accessible externally
    port: process.env.PORT || 5173, // Use dynamic port if provided by Render
    open: true,             // Automatically open the app in the browser
  },
  build: {
    outDir: 'dist',         // Output directory for production build
  },
  resolve: {
    alias: {
      '@': '/src',           // Path alias for 'src'
    },
  },
  preview: {
    port: 5174,             // Preview port for the build
  },
});
