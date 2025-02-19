<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { Game } from '@/types/models/GamesModel'
import CardPopular from '@/components/cards/CardPopular.vue'
import { useSwiper } from '@/hooks/useSwiper'
import BaseLoader from '@/components/base/BaseLoader.vue'
import { Navigation } from 'swiper/modules'

const props = defineProps<{
    data: Game[] | undefined
    isLoading: boolean
}>()

const swiperCategory = ref<HTMLElement | null>(null)
const { initSwiper, swiperInstance, destroySwiper } = useSwiper(swiperCategory, {
    modules: [Navigation],
    loop: true,
    speed: 800,
    spaceBetween: 18,
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 16 },
        460: { slidesPerView: 2, spaceBetween: 18 },
        860: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

watch([() => props.data, swiperCategory], async (newData) => {
    if (newData && swiperCategory.value) {
        await nextTick()
        if (swiperInstance) {
            destroySwiper()
        }
        initSwiper()
    }
})
</script>

<template>
    <div class="popularCarousel">
        <BaseLoader v-if="isLoading" />
        <div class="swiper" ref="swiperCategory" v-if="data">
            <div class="swiper-wrapper">
                <CardPopular
                    class="swiper-slide"
                    v-for="game in data"
                    :key="game.id"
                    :data="game"
                />
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.popularCarousel {
    width: 100%;
    flex-grow: 2;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
        min-height: 160px;
    }
}
</style>
