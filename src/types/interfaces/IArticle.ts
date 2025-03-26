interface ArticleDetail {
    content: string
}

interface ArticleImage {
    src: string
}
export interface IArticle {
    id: number
    date: string
    type: string
    title: string
    author: string
    img: string
    article_details: ArticleDetail[]
    article_images: ArticleImage[]
}
