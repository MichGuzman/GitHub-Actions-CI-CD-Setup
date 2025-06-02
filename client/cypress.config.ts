import { defineConfig } from 'cypress';
import viteConfig from '../vite.config';

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        server: {
          port: 5173
        },
        // puedes agregar más aquí si necesitas
      },
    },
  },
});