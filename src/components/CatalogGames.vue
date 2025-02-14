<script setup lang="ts">
import CatalogGamesItem from '@/components/CatalogGamesItem.vue'
import { fetchGames } from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'

const { data, isPending } = useQuery({
    queryKey: ['released'],

    queryFn: () => fetchGames('/games', { page_size: 5, page: 1, ordering: 'released' })
})

const { data: upcomingGames, isPending: upcomingGamesLoaded } = useQuery({
    queryKey: ['upcoming'],

    queryFn: () => fetchGames('/games', { page_size: 5, page: 1, ordering: 'added' })
})

const { data: playstationGames, isPending: isPlayStationLoading } = useQuery({
    queryKey: ['playstation'],
    queryFn: () => fetchGames('/games', { page_size: 5, page: 1, parent_platforms: '12' })
})

const { data: xboxGames, isPending: xboxGamesLoaded } = useQuery({
    queryKey: ['xbox'],
    queryFn: () => fetchGames('/games', { page_size: 5, page: 1, parent_platforms: '3' })
})
</script>

<template>
    <div class="catalogGames">
        <CatalogGamesItem :games="data" :title="'New Releases'" />
        <CatalogGamesItem :games="upcomingGames" :title="'Upcoming'" />
        <CatalogGamesItem :games="playstationGames" :title="'PlayStation'" />
        <CatalogGamesItem :games="xboxGames" :title="'Xbox'" />
    </div>
</template>

<style lang="scss" scoped>
.catalogGames {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 80px;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
}
</style>
