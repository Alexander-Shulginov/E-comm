import { apiKey, apiService } from './api'

export const getBooks = async (
    searchQuery: string,
    categoryQuery: string = '',
    orderBy: string = 'newest'
) => {
    const { data } = await apiService.get('/volumes', {
        params: {
            q: `${searchQuery}+intitle:${searchQuery}+subject:${categoryQuery}`,
            orderBy: orderBy,
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
