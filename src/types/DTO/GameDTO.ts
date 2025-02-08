// export interface GameDTO {
//     results: {
//         id: number
//         name: string
//         image: string
//         rating: number
//         platforms: {
//             platform: {
//                 id: number
//                 name: string
//             }
//         }[]
//     }
// }
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
