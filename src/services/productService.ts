import { apiService } from './api'
import { SortDirection } from '../types/productType'

const errorHandler = (error: unknown) => {
    console.error(error)
    throw error
}

export const getProducts = async () => {
    try {
        const { data } = await apiService.get('/products')
        return data
    } catch (error) {
        errorHandler(error)
    }
}

export const getProductById = async (id: number) => {
    try {
        const { data } = await apiService.get(`/products/${id}`)
        return data
    } catch (error) {
        errorHandler(error)
    }
}

export const getProductSortedBy = async (direction: SortDirection = 'desc') => {
    try {
        const { data } = await apiService.get(`/products?sort=${direction}`)
        return data
    } catch (error) {
        errorHandler(error)
    }
}
