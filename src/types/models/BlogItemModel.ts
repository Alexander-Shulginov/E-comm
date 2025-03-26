import { IBlogCard } from '@/types/interfaces/IBlogCard'
import { BlogItemResponseDTO } from '@/types/DTO/BlogItemDTO'

export const BlogItemModel = (dto: BlogItemResponseDTO): IBlogCard => ({
    id: dto.id,
    date: dto.date,
    type: dto.type,
    title: dto.title,
    author: dto.author,
    img: dto.img
})
