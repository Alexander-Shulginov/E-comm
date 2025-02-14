<script setup lang="ts">
import CatalogGames from '@/components/CatalogGames.vue';
import PopularCategory from '@/components/PopularCategory.vue';
import GamePromo from '@/components/GamePromo.vue'
import GenreList from '@/components/GenreList.vue'
import PopularGames from '@/components/PopularGames.vue'
</script>

<template>
    <CatalogGames />
    <PopularCategory />
    <GenreList />
    <PopularGames />
    <GamePromo />
</template>

<style lang="scss" scoped></style>
