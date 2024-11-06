import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    // its an alias which is used when import the componenets
    // The below line simply means that we can write the @ in place of the ./src when we import the component
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
