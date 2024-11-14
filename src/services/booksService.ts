import { apiKey, apiService } from './api'

export const getBooks = async (query: {}) => {
    const { data } = await apiService.get('/volumes', {
        params: {
            ...query,
            key: apiKey
        }
    })

    return data
}
