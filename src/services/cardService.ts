import { apiService } from './api';

export const getProducts = async () => {
    try {
        const response = await apiService.get('/products');
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getProductById = async (id: number) => {
    try {
        const response = await apiService.get(`/products/${id}`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
