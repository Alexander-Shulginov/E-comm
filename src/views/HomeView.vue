<script setup lang="ts">
import { useHead } from '@vueuse/head'

import witcherImg from '@/assets/img/main/witcher.webp'

import CatalogGames from '@/components/CatalogGames.vue'
import PopularCategory from '@/components/PopularCategory.vue'
import PromoGame from '@/components/PromoGame.vue'
import GenreList from '@/components/GenreList.vue'
import PopularGames from '@/components/PopularGames.vue'
import MainCarousel from '@/components/MainCarousel.vue'
import BaseScrollToTop from '@/components/base/BaseScrollToTop.vue'
import ProjectInfo from '@/components/ProjectInfo.vue'
import BlogSection from '@/components/BlogSection.vue'

useHead({
    link: [
        {
            rel: 'preload',
            as: 'image',
            href: witcherImg,
        }
        // href: '/assets/witcher-Bp2S4qUw.webp'
    ]
})
</script>

<template>
    <section aria-label="Home page">
        <MainCarousel />
        <GenreList />
        <PopularGames />
        <PopularCategory />
        <CatalogGames />
        <PromoGame />
        <BlogSection />
        <ProjectInfo />
        <BaseScrollToTop />
    </section>
</template>
