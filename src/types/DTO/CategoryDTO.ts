export interface CategoryDTO {
    id: number
    name: string
    image_background: string
    games_count: number
}

export interface CategoryResponseDTO {
    results: CategoryDTO[]
}
