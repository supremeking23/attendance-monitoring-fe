import path from "path" // kailangan mo mag 'npm install -D @types/node' kung mag-error ang 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
