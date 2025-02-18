<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import CardGenre from './cards/CardGenre.vue'
import { fetchGenres } from '@/services/genresService'

const { data } = useQuery({
    queryKey: ['getGenres'],
    queryFn: fetchGenres
})
</script>

<template>
    <ul v-if="data" class="genresList">
        <li v-for="genre in data" :key="genre.id">
            <CardGenre :data="genre" />
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.genresList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
}
</style>
