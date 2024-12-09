import { GameCategory } from '../types/categoryTypes'
import { GamePlatform } from '../types/platformTypes'
import { GameSorted } from '../types/sortedTypes'
import { IGame } from '../types/types'
import { api } from './api'

export const getAllGames = async (): Promise<IGame[]> => {
    const { data } = await api.get('/games')
    return data
}

export const getGameById = async (id: number): Promise<IGame[]> => {
    const { data } = await api.get('/game', {
        params: {
            id: id
        }
    })

    return data

}

export const getGameByPlatform = async (platformType: GamePlatform): Promise<IGame[]> => {
    const { data } = await api.get('/games', {
        params: {
            platform: platformType
        }
    })

    return data
}

export const getGameByCategory = async (categoryType: GameCategory): Promise<IGame[]> => {
    const { data } = await api.get('/games', {
        params: {
            category: categoryType
        }
    })

    return data
}

export const sortGamesBy = async (sortedType: GameSorted): Promise<IGame[]> => {
    const { data } = await api.get('/games', {
        params: {
            'sort-by': sortedType
        }
    })

    return data
}
