import { PromoGamesDTO } from '@/types/DTO/PromoGamesDTO'
import { IPromoGames } from '@/types/interfaces/IPromoGames'

export const PromoGamesModel = (dto: PromoGamesDTO): IPromoGames => ({
    id: dto.item_id,
    title: dto.title,
    descr: dto.descr,
    img: dto.img
})
