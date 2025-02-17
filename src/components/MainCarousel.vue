<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'swiper/modules'
import CardFullscreen from '@/components/cards/CardFullscreen.vue'
import { useSwiper } from '@/hooks/useSwiper'
import { mainContent } from '@/data/mainContent'

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
            <CardFullscreen
                v-for="(game, index) in mainContent"
                :data="game"
                :id="index"
                class="swiper-slide"
            />
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<style lang="scss" scoped>
.mainCarousel {
    margin-bottom: 80px;

    @media (max-width: 1024px) {
        margin-bottom: 60px;
    }

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }
}
</style>
