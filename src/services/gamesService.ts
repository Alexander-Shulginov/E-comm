import { api } from '@/services/api'

import { IGame } from '@/types/interfaces/IGames'
import { IGameById } from '@/types/interfaces/IGameById'
import { IGameScreens } from '@/types/interfaces/IGameScreens'

import { GameModel } from '@/types/models/GamesModel'
import { GameScreensModel } from '@/types/models/GameScreenModel'
import { GameByIdModel } from '@/types/models/GameByIdModel'

import { GamesResponseDTO } from '@/types/DTO/GamesDTO'
import { GameScreenResponseDTO } from '@/types/DTO/GameScreenDTO'
import { GameByIdResponseDTO } from '@/types/DTO/GameByIdDTO'

const ENDPOINT = '/games'

export const fetchGames = async (params?: {}): Promise<IGame[]> => {
    const response = await api.get<GamesResponseDTO>(ENDPOINT, { params })
    return response.data.results.map(GameModel)
}

export const fetchGameById = async (id: number): Promise<IGameById> => {
    const response = await api.get<GameByIdResponseDTO>(`${ENDPOINT}/${id}`)
    return GameByIdModel(response.data)
}

export const fetchScreenShootsById = async (id: number): Promise<IGameScreens[]> => {
    const response = await api.get<GameScreenResponseDTO>(`${ENDPOINT}/${id}/screenshots`)
    return response.data.results.map(GameScreensModel)
}

export const fetchGameSeries = async (id: number): Promise<IGame[]> => {
    const response = await api.get<GamesResponseDTO>(`${ENDPOINT}/${id}/game-series`)
    return response.data.results.map(GameModel)
}

export const fetchGameDLC = async (id: number): Promise<IGame[]> => {
    const response = await api.get<GamesResponseDTO>(`${ENDPOINT}/${id}/additions`)
    return response.data.results.map(GameModel)
}
