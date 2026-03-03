import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // GitHub Pages でデプロイする場合は base: '/triple-report/'
  base: process.env.GITHUB_ACTIONS ? '/triple-report/' : '/',
  // Vercel で NEXT_PUBLIC_SUPABASE_* のみ設定している場合も読み取る
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
