import { supabase } from '@/supabase/init'
import { IPromoGames } from '@/types/interfaces/IPromoGames'
import { PromoGamesModel } from '@/types/models/PromoGamesModel'

export async function fetchPromoContent(): Promise<IPromoGames[]> {
    const { data } = await supabase
        .from('Promo-content')
        .select('*')
        .order('id', { ascending: true })
    return (data ?? []).map(PromoGamesModel)
}