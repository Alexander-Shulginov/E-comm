import { GenresDTO } from '@/types/DTO/GenresDTO'

export class Genres {
    id: number
    name: string
    img: string
    gameCount: number

    constructor(dto: GenresDTO) {
        this.id = dto.id
        this.name = dto.name
        this.img = dto.image_background
        this.gameCount = dto.games_count
    }
}
