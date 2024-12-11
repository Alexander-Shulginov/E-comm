import axios from 'axios'
import { retryWithExponentialBackoff } from '../utils/retryWithExponentialBackoff'

const baseUrl = import.meta.env.VITE_BASE_URL

export const api = axios.create({
    baseURL: '/api', // proxy, see vite.config.ts
    timeout: 10000,
    responseType: 'json'
})

api.interceptors.response.use(
    (response) => response, // Если нет ошибки, возвращаем ответ как есть
    async (error) => {
        const config = error.config

        // Убедимся, что это серверная ошибка и запрос не повторялся ранее
        if (
            error.response &&
            error.response.status >= 500 &&
            error.response.status < 600 &&
            !config._retry
        ) {
            config._retry = true // Добавляем флаг, чтобы избежать зацикливания

            // Используем ретрай с экспоненциальным бэкоффом
            try {
                return await retryWithExponentialBackoff(() => api.request(config), 5, 100)
            } catch (retryError) {
                // Если ретрай не удался, прокидываем исходную ошибку
                return Promise.reject(retryError)
            }
        }

        // Для всех других ошибок возвращаем ошибку как есть
        return Promise.reject(error)
    }
)
