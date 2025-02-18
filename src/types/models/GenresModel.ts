import { CategoryDTO } from '@/types/DTO/CategoryDTO'

export class Category {
    id: number
    name: string
    img: string
    gameCount: number

    constructor(dto: CategoryDTO) {
        this.id = dto.id
        this.name = dto.name
        this.img = dto.image_background
        this.gameCount = dto.games_count
    }
}
