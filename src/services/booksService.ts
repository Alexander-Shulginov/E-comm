import { apiKey, apiService } from './api'

const errorHandler = (error: unknown) => {
    console.error(error)
    throw error
}

export const getBooksBySearch = async (searchQuery: string) => {
    try {
        const { data } = await apiService.get(
            `/volumes?q=${searchQuery}+intitle:${searchQuery}&key=${apiKey}&maxResults=10`
        )
        return data
    } catch (error) {
        errorHandler(error)
    }
}

export const getBookById = async (id: string) => {
    try {
        const { data } = await apiService.get(
            `/volumes/${id}?key=${apiKey}`
        )
        return data
    } catch (error) {
        errorHandler(error)
    }
}
