<script setup lang="ts">
import { fetchCategory } from '@/services/gamesService'
import { useQuery } from '@tanstack/vue-query'
import CardGenre from './cards/CardGenre.vue'

const { data } = useQuery({
    queryKey: ['getGenres'],
    queryFn: fetchCategory
})
</script>

<template>
    <ul v-if="data" class="categoryList">
        <li v-for="genre in data" :key="genre.id" class="categoryList__item">
            <CardGenre :data="genre" />
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.categoryList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;

    @media (max-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
}
</style>
