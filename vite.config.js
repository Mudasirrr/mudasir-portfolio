import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'mudasir-portfolio' to match your GitHub repo name exactly
export default defineConfig({
  plugins: [react()],
  base: '/mudasir-portfolio/',
})
