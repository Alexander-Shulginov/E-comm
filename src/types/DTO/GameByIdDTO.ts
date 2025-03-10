export interface GameByIdResponseDTO {
    id: number
    name: string
    slug: string
    metacritic: number
    released: string
    background_image: string
    background_image_additional: string
    description_raw: string
    website: string
    rating: number
    playtime: number
    ratings: {
        id: number
        title: string
        count: number
        percent: number
    }[]
    esrb_rating: {
        id: number
        name: string
    }
    platforms: {
        platform: {
            id: number
            name: string
        }
    }[]
    developers: {
        id: number
        name: string
    }[]
    publishers: {
        id: number
        name: string
    }[]
    tags: {
        id: number
        name: string
    }[]
    genres: {
        id: number
        name: string
    }[]

}
