export interface BookInfo {
    id: string
    volumeInfo: {
        title: string
        subtitle?: string
        authors?: string[]
        categories?: string[]
        imageLinks: {
            thumbnail?: string
        }
        description?: string
    }
}

export interface BooksResponse {
    items: BookInfo[]
}
