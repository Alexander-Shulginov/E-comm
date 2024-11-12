import axios from 'axios'

const url = import.meta.env.VITE_BASE_URL
export const apiKey = import.meta.env.VITE_API_KEY

export const apiService = axios.create({
    baseURL: url,
    timeout: 10000,
    responseType: 'json'
})

apiService.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error)
        return Promise.reject(error)
    }
)
