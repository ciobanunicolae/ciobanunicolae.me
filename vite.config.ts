import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
   alias: [{ find: '@', replacement: '/src' }],
  },
})
