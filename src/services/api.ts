import axios from 'axios'

const url = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const api = axios.create({
    baseURL: '/api', //vite.config.ts CORS proxy
    timeout: 10000,
    responseType: 'json',
    params: {
        key: apiKey
    },
})
