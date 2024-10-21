import axios from 'axios';

const url = 'https://fakestoreapi.com';

export const apiService = axios.create({
    baseURL: url,
    timeout: 5000,
    responseType: 'json',
});

apiService.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);
