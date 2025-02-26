import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@icons': resolve(__dirname, './src/components/icons'),
      '@sections': resolve(__dirname, './src/sections'),
      '@animations': resolve(__dirname, './src/animations'),
      '@assets': resolve(__dirname, './src/assets'),
      '@images': resolve(__dirname, './src/assets/images'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@interfaces': resolve(__dirname, './src/interfaces'),
      '@api': resolve(__dirname, './src/api'),
      '@utils': resolve(__dirname, './src/utils'),
      '@config': resolve(__dirname, './src/config'),
      '@styles': resolve(__dirname, './src/styles'),
      '@pages': resolve(__dirname, './src/pages'),
    },
  },
})
