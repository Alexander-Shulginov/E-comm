import { apiService } from './api'

export const getProducts = async () => {
    try {
        const { data } = await apiService.get('/products')
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const getProductById = async (id: number) => {
    try {
        const { data } = await apiService.get(`/products/${id}`)
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}
