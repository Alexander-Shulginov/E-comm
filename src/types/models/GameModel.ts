import { Game } from '@/types/DTO/GameByIdDTO'

export class GameById {
    id: number
    name: string
    descr: string
    metacritic: number
    released: string
    img: string
    img_additional?: string
    website?: string
    rating: number
    playtime: number

    constructor(dto: Game) {
        this.id = dto.id ?? 0
        this.name = dto.name ?? ''
        this.descr= dto.description
        this.metacritic = dto.metacritic ?? 0
        this.released = dto.released ?? ''
        this.img = dto.background_image ?? ''
        this.img_additional = dto.background_image_additional
        this.website = dto.website
        this.rating = dto.rating ?? 0
        this.playtime = dto.playtime ?? 0
    }
}
