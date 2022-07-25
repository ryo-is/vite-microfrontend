import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import * as pkg from './package.json';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        name: 'admin-web',
        remotes: {
          remote: {
            external: env.VITE_REMOTE_EXTARNAL_URL,
            externalType: 'url',
          },
        },
        shared: {
          react: {
            requiredVersion: pkg.dependencies.react,
            singleton: true,
          },
          'react-dom': {
            requiredVersion: pkg.dependencies['react-dom'],
            singleton: true,
          },
          '@chakra-ui/react': {
            singleton: true,
          },
        },
      }),
    ],
  };
});
