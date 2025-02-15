import { defineConfig, loadEnv } from 'vite'
import webExtension, { readJsonFile } from 'vite-plugin-web-extension'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

function generateManifest() {
  const manifest = readJsonFile('src/manifest.json')
  const pkg = readJsonFile('package.json')

  manifest.oauth2.client_id = process.env.VITE_GOOGLE_OAUTH_CLIENT_ID

  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest
  }
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue(),
      tailwindcss(),
      webExtension({
        manifest: generateManifest,
        webExtConfig: {
          startUrl: process.env.VITE_START_URL
        }
      })
    ]
  }
})
