<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import CardBase from '@/components/cards/CardBase.vue'
import { useSwiper } from '@/hooks/useSwiper'
import { Games } from '@/types/models/GamesModel'
import BaseLoader from '@/components/base/BaseLoader.vue'
import { Navigation } from 'swiper/modules'

const props = defineProps<{
    data: Games[] | undefined
    isPending: boolean
}>()

const swiperPopular = ref<HTMLElement | null>(null)
const { initSwiper } = useSwiper(swiperPopular, {
    modules: [Navigation],
    loop: true,
    speed: 800,
    spaceBetween: 24,
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 16 },
        460: { slidesPerView: 2, spaceBetween: 18 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

watch([() => props.data, swiperPopular], (newData) => {
    if (newData && swiperPopular.value) {
        nextTick(() => initSwiper())
    }
})
</script>

<template>
    <div class="popularGames__carousel">
        <BaseLoader v-if="isPending" />
        <div v-if="data" class="swiper" ref="swiperPopular">
            <ul class="popularGames__list swiper-wrapper">
                <li v-for="game in data" :key="game.id" class="swiper-slide">
                    <CardBase :game="game" />
                </li>
            </ul>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.popularGames {
    &__carousel {
        position: relative;

        .swiper-button-prev,
        .swiper-button-next {
            margin-top: -56px;
        }
    }

    &__list {
        padding-bottom: 30px;
        @media (max-width: 768px) {
            padding-bottom: 0;
        }
    }
}
</style>
