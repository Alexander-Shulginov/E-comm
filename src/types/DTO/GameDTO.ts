export interface PlatformDTO {
    id: number
    name: string
}

export interface GameDTO {
    id: number
    name: string
    background_image: string
    rating: number
    parent_platforms: {
        platform: PlatformDTO
    }[]
}

export interface GamesResponseDTO {
    results: GameDTO[]
}
