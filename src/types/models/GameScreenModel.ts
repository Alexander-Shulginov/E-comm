import { GameScreenShotsDTO } from '@/types/DTO/GameScreenDTO'
import { IGameScreens } from '@/types/interfaces/IGameScreens'

export const GameScreensModel = (dto: GameScreenShotsDTO): IGameScreens => ({
    id: dto.id,
    img: dto.image,
    width: dto.width,
    height: dto.height
})
