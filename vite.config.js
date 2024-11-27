import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,           // Set the server port for development
    open: true,           // Automatically open the app in the browser when the server starts
    fs: {
      strict: false,      // Disable strict file system checks
    },
  },
  build: {
    outDir: 'dist',      // Specify the output directory for the production build
  },
  resolve: {
    alias: {
      '@': '/src',        // Set up path alias for the 'src' folder
    },
  },
  preview: {
    port: 5174,          // Set the port for previewing the production build
  },
});
