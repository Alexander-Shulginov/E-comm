import { GameByIdResponseDTO } from '@/types/DTO/GameByIdDTO'
import { IGameById } from '@/types/interfaces/IGameById'

export const GameByIdModel = (dto: GameByIdResponseDTO): IGameById => ({
    id: dto.id ?? 0,
    name: dto.name ?? '',
    slug: dto.slug ?? '',
    descr: dto.description_raw,
    metacritic: dto.metacritic ?? 0,
    released: dto.released ?? '',
    img: dto.background_image ?? '',
    img_added: dto.background_image_additional,
    website: dto.website,
    rating: dto.rating ?? 0,
    playtime: dto.playtime ?? 0,
    esrb: dto.esrb_rating,
    ratings: dto.ratings,
    publishers: dto.publishers,
    tags: dto.tags,
    genres: dto.genres,
    developers: dto.developers,
    platforms: dto.platforms.map(({ platform }) => ({
        id: platform.id,
        name: platform.name
    }))
})
