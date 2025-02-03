import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import imagemin from 'vite-plugin-imagemin'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
    plugins: [
        vue(),
        imagetools(),
        imagemin({
            webp: {
                quality: 80
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src/', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://api.rawg.io/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
})
