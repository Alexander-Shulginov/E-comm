import { supabase } from '@/supabase/init'
import { IArticle } from '@/types/interfaces/IArticle'
import { IBlogCard } from '@/types/interfaces/IBlogCard'
import { articleModel } from '@/types/models/ArticleModel'
import { BlogItemModel } from '@/types/models/BlogItemModel'

export const fetchArticles = async (): Promise<IBlogCard[]> => {
    const { data } = await supabase.from('article_cards').select('*')
    return (data ?? []).map(BlogItemModel)
}

export const fetchArticleById = async (id: number): Promise<IArticle> => {
    const { data } = await supabase
        .from('article_cards')
        .select(`*, article_details(content), article_images(src)`)
        .eq('id', id)
        .single()

    return articleModel(data)
}
