interface ArticleDetail {
    content: string
}

export interface IArticle {
    id: number
    date: string
    type: string
    title: string
    author: string
    img: string
    article_details: ArticleDetail[]
}
