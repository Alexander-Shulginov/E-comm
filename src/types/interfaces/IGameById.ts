export interface IGameById {
    id: number
    name: string
    descr: string
    slug: string
    metacritic: number
    released: string
    img: string
    img_added: string
    esrb: {
        id: number
        name: string
    }
    website: string
    rating: number
    playtime: number
    platforms: {
        id: number
        name: string
    }[]
    ratings: {
        id: number
        title: string
        count: number
        percent: number
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
        slug: string
        name: string
    }[]
    genres: {
        id: number
        name: string
    }[]
}
