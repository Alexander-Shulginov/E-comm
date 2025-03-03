import { GameByIdResponseDTO } from '@/types/DTO/GameByIdDTO'
import { IGameById } from '@/types/interfaces/IGameById'

export const GameByIdModel = (dto: GameByIdResponseDTO): IGameById => ({
    id: dto.id ?? 0,
    name: dto.name ?? '',
    descr: dto.description,
    metacritic: dto.metacritic ?? 0,
    released: dto.released ?? '',
    img: dto.background_image ?? '',
    img_added: dto.background_image_additional,
    website: dto.website,
    rating: dto.rating ?? 0,
    playtime: dto.playtime ?? 0,
    esrb: dto.esrb_rating,
    platforms: dto.platforms.map(({ platform }) => ({
        platform: {
            id: platform.id,
            name: platform.name
        }
    }))
})
