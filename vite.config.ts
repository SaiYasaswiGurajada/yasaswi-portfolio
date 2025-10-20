
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isCI = !!process.env.CI

export default defineConfig({
  plugins: [react()],
  base: isCI ? `/${repo}/` : '/',
})
