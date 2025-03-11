import { GameScreenShotsDTO } from '@/types/DTO/GameScreenDTO'
import { IListGamesScreens } from '@/types/interfaces/IGameScreens'

export const GameScreensModel = (dto: GameScreenShotsDTO): IListGamesScreens => ({
    id: dto.id,
    img: dto.image,
    width: dto.width,
    height: dto.height
})
