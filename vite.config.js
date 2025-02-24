
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
      // Si tu as un alias spécifique pour tes fichiers JSON
      '@data': '/data.json',
    },
  },
  // Cette section assure la gestion des fichiers statiques
  assetsInclude: ['../*.json'],
});

