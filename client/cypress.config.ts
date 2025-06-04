import { defineConfig } from 'cypress'
import viteConfig from './vite.config'; // ✅ ya funcionará


export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig, // ✅ usa la importación correcta
    },
  },
})
