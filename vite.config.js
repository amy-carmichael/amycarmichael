import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/assets': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          pages: ['./src/pages/HomePage.jsx', './src/pages/AboutPage.jsx', './src/pages/NetflixPage.jsx', './src/pages/work/FiltersPage.jsx', './src/pages/work/ServerCardsPage.jsx', './src/pages/work/InventoryPage.jsx', './src/pages/work/DesignSystemPage.jsx', './src/pages/work/Menus.jsx'],
        },
      },
    },
  },
})
