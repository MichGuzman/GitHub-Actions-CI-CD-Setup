import { defineConfig } from 'cypress';

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
      },
    },
  },
});
