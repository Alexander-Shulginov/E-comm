import { apiKey, apiService } from './api'

export const getBooksBySearch = async (searchQuery: string) => {
    const { data } = await apiService.get('/volumes', {
        params: {
            q: `${searchQuery}+intitle:${searchQuery}`,
            key: apiKey,
            maxResults: 20
        }
    })

    return data
}

export const getBookById = async (id: string) => {
    const { data } = await apiService.get(`/volumes/${id}?key=${apiKey}`)
    return data
}
