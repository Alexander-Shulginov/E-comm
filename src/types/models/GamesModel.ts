import { GamesDTO } from '@/types/DTO/GamesDTO'

export class Games {
    id: number
    name: string
    image: string
    rating: number
    platforms: { id: number; name: string }[]

    constructor(dto: GamesDTO) {
        this.id = dto.id
        this.name = dto.name
        this.image = dto.background_image
        this.rating = dto.rating
        this.platforms = dto.parent_platforms.map(({ platform }) => ({
            id: platform.id,
            name: platform.name
        }))
    }
}
