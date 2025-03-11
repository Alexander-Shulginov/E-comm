import { api } from '@/services/api'

import { IListGames } from '@/types/interfaces/IGames'
import { IListGamesScreens } from '@/types/interfaces/IGameScreens'
import { IGameById } from '@/types/interfaces/IGameById'

import { GamesModel } from '@/types/models/GamesModel'
import { GameScreensModel } from '@/types/models/GameScreenModel'
import { GameByIdModel } from '@/types/models/GameByIdModel'

import { GamesResponseDTO } from '@/types/DTO/GamesDTO'
import { GameScreenResponseDTO } from '@/types/DTO/GameScreenDTO'
import { GameByIdResponseDTO } from '@/types/DTO/GameByIdDTO'

const ENDPOINT = '/games'

export const fetchGames = async (params?: {}): Promise<IListGames> => {
    const response = await api.get<GamesResponseDTO>(ENDPOINT, { params })
    return GamesModel(response.data)
}

export const fetchGameById = async (id: number): Promise<IGameById> => {
    const response = await api.get<GameByIdResponseDTO>(`${ENDPOINT}/${id}`)
    return GameByIdModel(response.data)
}

export const fetchScreenShootsById = async (id: number): Promise<IListGamesScreens[]> => {
    const response = await api.get<GameScreenResponseDTO>(`${ENDPOINT}/${id}/screenshots`)
    return response.data.results.map(GameScreensModel)
}

export const fetchGameSeries = async (id: number): Promise<IListGames> => {
    const response = await api.get<GamesResponseDTO>(`${ENDPOINT}/${id}/game-series`)
    return GamesModel(response.data)
}

export const fetchGameDLC = async (id: number): Promise<IListGames> => {
    const response = await api.get<GamesResponseDTO>(`${ENDPOINT}/${id}/additions`)
    return GamesModel(response.data)
}
