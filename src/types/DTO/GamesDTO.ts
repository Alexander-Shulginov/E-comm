export interface PlatformDTO {
    id: number
    name: string
}

export interface GamesDTO {
    id: number
    name: string
    background_image: string
    rating: number
    parent_platforms: {
        platform: PlatformDTO
    }[]
}

export interface GamesResponseDTO {
    results: GamesDTO[]
}
