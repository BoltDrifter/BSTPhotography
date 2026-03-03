import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:'/BSTPhotography/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    copyPublicDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'Baldeep Singh Taluja Resume (1).pdf') {
            return 'assets/resume.pdf'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
