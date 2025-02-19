<script setup lang="ts">
import CatalogGames from '@/components/CatalogGames.vue'
import PopularCategory from '@/components/PopularCategory.vue'
import GamePromo from '@/components/GamePromo.vue'
import GenreList from '@/components/GenreList.vue'
import PopularGames from '@/components/PopularGames.vue'
import MainCarousel from '@/components/MainCarousel.vue'
import BaseScrollToTop from '@/components/base/BaseScrollToTop.vue'
</script>

<template>
    <div aria-label="Home page">
        <MainCarousel />
        <GenreList />
        <PopularGames />
        <PopularCategory />
        <CatalogGames />
        <GamePromo />
        <BaseScrollToTop />
    </div>
</template>
