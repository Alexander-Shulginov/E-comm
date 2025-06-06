<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { Navigation } from 'swiper/modules'
import { IListGames } from '@/types/interfaces/IGames'
import CardPopular from '@/components/cards/CardPopular.vue'
import { useSwiper } from '@/hooks/useSwiper'
import BaseLoader from '@/components/base/BaseLoader.vue'

const props = defineProps<{
    data: IListGames | undefined
    isLoading: boolean
}>()

const swiperCategory = ref<HTMLElement | null>(null)
const { initSwiper, swiperInstance, destroySwiper } = useSwiper(swiperCategory, {
    modules: [Navigation],
    loop: true,
    speed: 800,
    spaceBetween: 14,
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 16 },
        460: { slidesPerView: 2, spaceBetween: 18 },
        860: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 }
    },
    navigation: {
        nextEl: '.swiper-button-next.btn-popular',
        prevEl: '.swiper-button-prev.btn-popular'
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
        <div class="swiper popularCarousel__swiper" ref="swiperCategory" v-if="data">
            <div class="swiper-wrapper">
                <CardPopular
                    class="swiper-slide"
                    v-for="game in data.results"
                    :key="game.id"
                    :data="game"
                />
            </div>
        </div>
        <div class="swiper-button-next btn-popular"></div>
        <div class="swiper-button-prev btn-popular"></div>
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

    &__swiper {
        padding: 4px;
    }
}
</style>
