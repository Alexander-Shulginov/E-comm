export interface Game {
    id: number
    name: string
    description: string
    metacritic: number
    released: string
    background_image: string
    background_image_additional: string
    esrb_rating: { id: number, name: string}
    website: string
    rating: number
    playtime: number
    platforms: {
        platform: {
            id: number
            name: string
        }
        requirements: {
            minimum: string
            recommended: string
        }
    }[]
}
