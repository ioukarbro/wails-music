import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

const alias = {
  '@': path.resolve(__dirname, './src'),
  'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias
  },
  plugins: [vue()]
})
