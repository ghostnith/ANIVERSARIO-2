import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ANIVERSARIO-2/',   // 👈 muy importante
  plugins: [react()],
})
