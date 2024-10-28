import { apiService } from './api'
import { Category } from '../types/productType'

const errorHandler = (error: unknown) => {
    console.error(error)
    throw error
}

export const getAllCategory = async () => {
    try {
        const { data } = await apiService.get('/products/categories')
        return data
    } catch (error) {
        errorHandler(error)
    }
}

export const getCategory = async (category: string) => {
    try {
        const { data } = await apiService.get(`/products/category/${category}`)
        return data
    } catch (error) {
        errorHandler(error)
    }
}
