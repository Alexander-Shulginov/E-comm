import { PlatformsResponseDTO } from '../DTO/PlatformsDTO'
import { IPlatforms } from '../interfaces/IPlatforms'

export const PlatformsModel = (dto: PlatformsResponseDTO): IPlatforms => ({
    count: dto.count,
    results: dto.results
})
