// client/cypress.config.ts
export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        server: {
          port: 5173,
        },
      },
    },
    supportFile: 'cypress/support/component.js', // 👈 Asegúrate de cambiar esto
  },
});
