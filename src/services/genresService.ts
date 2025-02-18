import { api } from './api'
import { GenresResponseDTO } from '@/types/DTO/GenresDTO'
import { Genres } from '@/types/models/GenresModel'

export const fetchGenres = async (params?: {}) => {
    const response = await api.get<GenresResponseDTO>('/genres', { params })
    return response.data.results.map((dto) => new Genres(dto))
}
