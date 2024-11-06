import { apiKey, apiService } from './api'

const errorHandler = (error: unknown) => {
    console.error(error)
    throw error
}

export const getBooksBySearch = async (searchQuery: string) => {
    try {
        const { data } = await apiService.get('/volumes', {
            params: {
                q: `${searchQuery}+intitle:${searchQuery}`,
                key: apiKey,
                maxResults: 20
            }
        })
        return data
    } catch (error) {
        errorHandler(error)
    }
}
