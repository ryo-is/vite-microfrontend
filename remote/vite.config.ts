import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import * as pkg from './package.json';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote',
      exposes: {
        './Button': './src/components/Button.tsx',
      },
      filename: 'remoteEntry.js',
      shared: {
        react: {
          requiredVersion: pkg.dependencies.react,
          singleton: true,
        },
        'react-dom': {
          requiredVersion: pkg.dependencies['react-dom'],
          singleton: true,
        },
      },
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
