import { GameScreenShotsDTO } from '../DTO/GameScreenDTO'

export class GameScreens {
    id: number
    img: string
    width: number
    height: number
    constructor(dto: GameScreenShotsDTO) {
        this.id = dto.id
        this.img = dto.image
        this.width = dto.width
        this.height = dto.height
    }
}
