import { apiKey, apiService } from './api'

export interface IRequestConf {
    maxResult: 3
}

const errorHandler = (error: unknown) => {
    console.error(error)
    throw error
}

export const getBooks = async (searchQuery: string) => {
    try {
        const { data } = await apiService.get(
            `/volumes?q=${searchQuery}+intitle:${searchQuery}&key=${apiKey}&maxResults=3`
        )
        return data
    } catch (error) {
        errorHandler(error)
    }
}
