import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import reactSvgPlugin from 'vite-plugin-react-svg';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactSvgPlugin({
      defaultExport: 'component'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: '/create-react-app-with-vite-sample/',
})
