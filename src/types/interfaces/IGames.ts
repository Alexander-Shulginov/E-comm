export interface IGame {
    id: number
    name: string
    image: string
    rating: number
    platforms: {
        id: number
        name: string
    }[]
}

export interface IListGames {
    count: number
    next: string
    prev: string
    results: {
        id: number
        name: string
        image: string
        rating: number
        platforms: {
            id: number
            name: string
        }[]
    }[]
}
