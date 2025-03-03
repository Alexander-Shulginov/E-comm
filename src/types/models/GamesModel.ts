import { GamesDTO } from '@/types/DTO/GamesDTO'
import { IGame } from '@/types/interfaces/IGames'

export const GameModel = (dto: GamesDTO): IGame => ({
    id: dto.id,
    name: dto.name ?? 'default',
    image: dto.background_image ?? 'default',
    rating: dto.rating ?? 0,
    platforms: dto.parent_platforms.map(({ platform }) => ({
        id: platform.id,
        name: platform.name
    }))
})
