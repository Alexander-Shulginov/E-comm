export interface IGameById {
    id: number
    name: string
    descr: string
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
        platform: {
            id: number
            name: string
        }
    }[]
}
