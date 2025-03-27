interface ArticleDetail {
    content: string
}

export interface ArticleResponseDTO {
    id: number
    date: string
    type: string
    title: string
    author: string
    img: string
    article_details: ArticleDetail[]
}
