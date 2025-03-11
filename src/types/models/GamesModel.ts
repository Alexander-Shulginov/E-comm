import { GamesResponseDTO } from '@/types/DTO/GamesDTO'
import { IListGames } from '@/types/interfaces/IGames'

export const GamesModel = (dto: GamesResponseDTO): IListGames => ({
    count: dto.count,
    next: dto.next ?? null,
    prev: dto.prev ?? null,
    results:
        dto.results.map((result) => ({
            id: result.id,
            name: result.name ?? 'default',
            image: result.background_image ?? 'default',
            rating: result.rating ?? 0,
            platforms:
                result.parent_platforms?.map((platform) => ({
                    id: platform.platform.id,
                    name: platform.platform.name
                })) ?? []
        })) ?? []
})
