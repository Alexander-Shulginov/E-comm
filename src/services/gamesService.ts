import { api } from './api'
import { Game } from '@/types/models/Game'
import { GameDTO } from '@/types/DTO/GameDTO'

export const fetchGames = async (args: string, params?: {}) => {
    const response = await api.get<GameDTO[]>(args, { params })
    return response.data.map((dto) => new Game(dto))
}
