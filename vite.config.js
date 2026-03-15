import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/oven-airfryer-converter",
  plugins: [react()],
  build: {
    sourcemap: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ["./setupTests.js"],
    exclude: [...configDefaults.exclude, 'src/test/e2e']
  }
})
