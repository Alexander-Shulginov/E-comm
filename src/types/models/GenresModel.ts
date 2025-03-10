import { GenresDTO } from '@/types/DTO/GenresDTO'
import { IGenres } from '@/types/interfaces/IGenres'

export const GenresModel = (dto: GenresDTO): IGenres => ({
    id: dto.id,
    name: dto.name,
    slug: dto.slug,
    img: dto.image_background,
    gameCount: dto.games_count
})
