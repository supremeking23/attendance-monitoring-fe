import path from "path" // kailangan mo mag 'npm install -D @types/node' kung mag-error ang 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
