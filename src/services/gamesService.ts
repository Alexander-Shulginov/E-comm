import { api } from './api'
import { Games } from '@/types/models/GamesModel'
import { GamesResponseDTO } from '@/types/DTO/GamesDTO'
import { Game } from '@/types/DTO/GameByIdDTO'
import { GameById } from '@/types/models/GameModel'

export const fetchGames = async (args: string, params?: {}) => {
    const response = await api.get<GamesResponseDTO>(args, { params })
    return response.data.results.map((dto) => new Games(dto))
}

export const fetchGameById = async (id: number) => {
    const response = await api.get<Game>(`/games/${id}`)
    return  new GameById(response.data)
}
