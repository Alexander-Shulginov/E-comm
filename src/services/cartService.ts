import { apiService } from './api'

const errorHandler = (error: unknown) => {
    console.error(error)
    throw error
}

export const addProduct = async () => {
    try {
        const { data } = await apiService.get(`/users/`)
        return data
    } catch (error) {
        errorHandler(error)
    }
}
