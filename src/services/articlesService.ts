import { supabase } from '@/supabase/init'
import { IBlogCard } from '@/types/interfaces/IBlogCard'
import { BlogItemModel } from '@/types/models/BlogItemModel'

export const fetchArticles = async (): Promise<IBlogCard[]> => {
    const { data } = await supabase.from('article_cards').select('*')
    return (data ?? []).map(BlogItemModel)
}
