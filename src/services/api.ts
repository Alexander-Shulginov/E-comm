import axios from 'axios'

const url = 'https://www.googleapis.com/books/v1'
export const apiKey = import.meta.env.VITE_API_KEY

export const apiService = axios.create({
    baseURL: url,
    timeout: 5000,
    responseType: 'json'
})

apiService.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error)
        return Promise.reject(error)
    }
)
