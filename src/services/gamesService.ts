import { api } from './api'

export const fetchGames = async (args: string, params?: {}) => {
    const { data } = await api.get(args, { params })
    return data
}
