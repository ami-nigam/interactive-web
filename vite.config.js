@"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/interactive-web/'
})
"@ | Out-File -FilePath "vite.config.js" -Encoding UTF8