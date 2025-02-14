<script setup lang="ts">
import CatalogGamesItem from '@/components/CatalogGamesItem.vue'
import { fetchGames } from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'

const { data, isPending } = useQuery({
    queryKey: ['getGamesByCategory'],

    queryFn: () => fetchGames('/games', { page_size: 5, page: 1, ordering: 'released' })
})
</script>

<template>
    <div class="catalogGames">
        <CatalogGamesItem :games="data" :title="'New Releases '" />
    </div>
</template>

<style lang="scss" scoped>
.catalogGames {
    margin-bottom: 80px;
}
</style>
