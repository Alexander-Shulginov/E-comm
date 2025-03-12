export interface GamesResponseDTO {
    count: number
    next: string
    previous: string
    results: {
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
    }[]
}
