import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/


export default defineConfig({
  server: {
    host: true,
  },
 // base: '/MockTests/', // This should match the path of your S3 bucket
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the chunk size warning limit as needed
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash'],
        },
      },
    },
  },
});
