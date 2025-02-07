import { GameDTO } from "@/types/DTO/GameDTO"

export class Game {
    name: string
    img: string
    rating: number
    platforms: { id: number; name: string }[]

    constructor(dto: GameDTO) {
        this.name = dto.name
        this.img = dto.image
        this.rating = dto.rating
        this.platforms = dto.platforms.map((p) => ({
            id: p.platform.id,
            name: p.platform.name
        }))
    }
}