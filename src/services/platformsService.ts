import { api } from '@/services/api'

import { IPlatforms } from '@/types/interfaces/IPlatforms'
import { PlatformsResponseDTO } from '@/types/DTO/PlatformsDTO'
import { PlatformsModel } from '@/types/models/PlatformsModel'

const ENDPOINT = '/platforms/lists/parents'

export const fetchPlatforms = async (): Promise<IPlatforms> => {
    const response = await api.get<PlatformsResponseDTO>(ENDPOINT)
    return PlatformsModel(response.data)
}
