<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useHead } from '@vueuse/head'

import witcherImg from '@/assets/img/main/witcher.webp'

import MainCarousel from '@/components/MainCarousel.vue'
import GenreList from '@/components/GenreList.vue'

const CatalogGames = defineAsyncComponent(() => import('@/components/CatalogGames.vue'))
const PopularCategory = defineAsyncComponent(() => import('@/components/PopularCategory.vue'))
const PromoGame = defineAsyncComponent(() => import('@/components/PromoGame.vue'))
const PopularGames = defineAsyncComponent(() => import('@/components/PopularGames.vue'))
const BaseScrollToTop = defineAsyncComponent(() => import('@/components/base/BaseScrollToTop.vue'))
const ProjectInfo = defineAsyncComponent(() => import('@/components/ProjectInfo.vue'))
const BlogSection = defineAsyncComponent(() => import('@/components/BlogSection.vue'))

useHead({
    link: [
        {
            rel: 'preload',
            as: 'image',
            href: witcherImg
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
