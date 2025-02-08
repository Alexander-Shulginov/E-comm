import { api } from './api'
import { Game } from '@/types/models/Game'
import { GamesResponseDTO } from '@/types/DTO/GameDTO'

export const fetchGames = async (args: string, params?: {}) => {
    const response = await api.get<GamesResponseDTO>(args, { params })
    return response.data.results.map((dto) => new Game(dto))
}
