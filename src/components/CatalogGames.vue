<script setup lang="ts">
import CatalogGamesItem from '@/components/CatalogGamesItem.vue'
import { fetchGames } from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'

const { data: releasedGames, isPending: releasedGamesLoaded } = useQuery({
    queryKey: ['released'],

    queryFn: () =>
        fetchGames('/games', {
            page_size: 5,
            ordering: '-added',
            dates: '2025-02-01,2025-12-31'
        })
})

const { data: oldGames, isPending: oldGamesLoaded } = useQuery({
    queryKey: ['old'],

    queryFn: () =>
        fetchGames('/games', {
            page_size: 5,
            ordering: '-added',
            dates: '1980-01-01,2000-12-31'
        })
})

const { data: playstationGames, isPending: playStationLoaded } = useQuery({
    queryKey: ['playstation'],
    queryFn: () =>
        fetchGames('/games', {
            page_size: 5,
            platforms: '187',
            ordering: '-rating',
            platforms_count: 1
        })
})

const { data: xboxGames, isPending: xboxGamesLoaded } = useQuery({
    queryKey: ['xbox'],
    queryFn: () =>
        fetchGames('/games', {
            page_size: 5,
            platforms: '1',
            ordering: '-rating',
            platforms_count: 1
        })
})
</script>

<template>
    <div class="catalogGames">
        <CatalogGamesItem
            :games="releasedGames"
            :title="'New Releases'"
            :loading="releasedGamesLoaded"
        />
        <CatalogGamesItem
            :games="playstationGames"
            :title="'PlayStation'"
            :loading="playStationLoaded"
        />
        <CatalogGamesItem :games="xboxGames" :title="'Xbox'" :loading="xboxGamesLoaded" />
        <CatalogGamesItem
            :games="oldGames"
            :title="'Old school'"
            :loading="oldGamesLoaded"
        />
    </div>
</template>

<style lang="scss" scoped>
.catalogGames {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 80px;
    overflow: hidden;
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
}
</style>
