import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base:
        process.env.NODE_ENV === 'production'
            ? '/https://github.com/Alexander-Shulginov/Games_World/'
            : '/',

    plugins: [vue()],
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
