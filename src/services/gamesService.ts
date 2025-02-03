import { api } from './api'

export const fetchGames = async (params?: any) => {
    const { data } = await api.get(params)
    return data
}
