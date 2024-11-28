import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const fs = require('fs')

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: fs.readFileSync('/etc/ssl/private/my.key'),
      cert: fs.readFileSync('/etc/ssl/certs/my.crt'),
    },
  },
})
