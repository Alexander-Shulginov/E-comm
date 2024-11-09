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
    totalItems?: number
    items: BookInfo[]
}

export interface BookDetails {
    volumeInfo: {
        title: string
        publisher: string
        publishedDate: string
        description: string
        pageCount: number
        language: string
        imageLinks: {
            large: string
        }
        authors: string | string[]
        categories: string | string[]
    }
}
