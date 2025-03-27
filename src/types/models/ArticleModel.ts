import { ArticleResponseDTO } from '@/types/DTO/ArticleDTO'
import { IArticle } from '@/types/interfaces/IArticle'

export const articleModel = (dto: ArticleResponseDTO): IArticle => ({
    id: dto.id,
    date: dto.date,
    type: dto.type,
    title: dto.title,
    author: dto.author,
    img: dto.img,
    article_details: dto.article_details.map((i) => ({
        content: i.content
    }))
})
