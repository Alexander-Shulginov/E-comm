<script setup lang="ts">
import CardFullscreen from './cards/CardFullscreen.vue'
import { useSwiper } from '@/hooks/useSwiper'
import { ref } from 'vue'
import { Pagination } from 'swiper/modules'

const swiperFullscreen = ref<HTMLElement | null>(null)
useSwiper(swiperFullscreen, {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    speed: 1000,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    }
})
</script>

<template>
    <div class="swiper mainCarousel" ref="swiperFullscreen">
        <div class="swiper-wrapper">
            <CardFullscreen class="swiper-slide" />
            <CardFullscreen class="swiper-slide" />
            <CardFullscreen class="swiper-slide" />
            <CardFullscreen class="swiper-slide" />
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<style lang="scss" scoped>
.mainCarousel {
    margin-bottom: 86px;
}
</style>
