import { api } from './api'
import { GameModel } from '@/types/models/GamesModel'
import { GamesResponseDTO } from '@/types/DTO/GamesDTO'
import { Game } from '@/types/DTO/GameByIdDTO'
import { GameById } from '@/types/models/GameModel'
import { GameScreenResponse } from '@/types/DTO/GameScreenDTO'
import { GameScreens } from '@/types/models/GameScreenModel'
import { IGame } from '@/types/interfaces/IGames'

const ENDPOINT = '/games'

export const fetchGames = async (params?: {}): Promise<IGame[]> => {
    const response = await api.get<GamesResponseDTO>(ENDPOINT, { params })
    return response.data.results.map(GameModel)
}

export const fetchGameById = async (id: number) => {
    const response = await api.get<Game>(`${ENDPOINT}/${id}`)
    return new GameById(response.data)
}

export const fetchScreenShootsById = async (id: number) => {
    const response = await api.get<GameScreenResponse>(`${ENDPOINT}/${id}/screenshots`)
    return response.data.results.map((dto) => new GameScreens(dto))
}

export const fetchGameSeries = async (id: number) => {
    const response = await api.get<GamesResponseDTO>(`${ENDPOINT}/${id}/game-series`)
    return response.data.results.map(GameModel)
}
