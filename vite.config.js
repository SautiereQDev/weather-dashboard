import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import TurboConsole from 'unplugin-turbo-console/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TurboConsole()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
})
