export interface GenresDTO {
    id: number
    name: string
    slug: string
    image_background: string
    games_count: number
}

export interface GenresResponseDTO {
    results: GenresDTO[]
}
