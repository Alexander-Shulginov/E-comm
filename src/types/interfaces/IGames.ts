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
