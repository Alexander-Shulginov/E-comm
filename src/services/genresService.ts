import { api } from '@/services/api'

import { IGenres } from '@/types/interfaces/IGenres'
import { GenresModel } from '@/types/models/GenresModel'
import { GenresResponseDTO } from '@/types/DTO/GenresDTO'

const ENDPOINT = '/genres'

export const fetchGenres = async (params?: {}): Promise<IGenres[]> => {
    const response = await api.get<GenresResponseDTO>(ENDPOINT, { params })
    return response.data.results.map(GenresModel)
}
