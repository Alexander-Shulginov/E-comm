<script setup lang="ts">
import GamePromoCard from './GamePromoCard.vue'
import { useSwiper } from '../hooks/useSwiper'
import { ref } from 'vue'

const swiperPromo = ref<HTMLElement | null>(null)
useSwiper(swiperPromo, {
    loop: true,
    spaceBetween: 16,
    speed: 800,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
    },
})
</script>

<template>
    <div class="promo">
        <div class="swiper" ref="swiperPromo">
            <div class="swiper-wrapper">
                <GamePromoCard v-for="i in 4" class="swiper-slide" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
