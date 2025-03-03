export interface GamesDTO {
    id: number
    name: string
    background_image: string
    rating: number
    parent_platforms: {
        platform: {
            id: number
            name: string
        }
    }[]
}

export interface GamesResponseDTO {
    results: GamesDTO[]
}
