import { apiKey, apiService } from './api'

export const getBooks = async (query: string) => {
    const { data } = await apiService.get('/volumes', {
        params: {
            q: query,
            key: apiKey
        }
    })

    return data
}
