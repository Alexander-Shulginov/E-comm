import { api } from './api'
import { Game } from '@/types/models/Game'
import { GamesResponseDTO } from '@/types/DTO/GameDTO'
import { CategoryResponseDTO } from '@/types/DTO/CategoryDTO'
import { Category } from '@/types/models/GenresModel'

export const fetchGames = async (args: string, params?: {}) => {
    const response = await api.get<GamesResponseDTO>(args, { params })
    return response.data.results.map((dto) => new Game(dto))
}

export const fetchCategory = async (params?: {}) => {
    const response = await api.get<CategoryResponseDTO>('/genres', {params})
    return response.data.results.map((dto) => new Category(dto))
}
