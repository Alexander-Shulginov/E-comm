export interface GameScreenShotsDTO {
    id: number
    image: string
    width: number
    height: number
}

export interface GameScreenResponse {
    results: GameScreenShotsDTO[]
}
