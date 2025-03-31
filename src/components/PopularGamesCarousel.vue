<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { Navigation } from 'swiper/modules'
import { useSwiper } from '@/hooks/useSwiper'
import { IListGames } from '@/types/interfaces/IGames'
import CardBase from '@/components/cards/CardBase.vue'
import BaseLoader from '@/components/base/BaseLoader.vue'

const props = defineProps<{
    data: IListGames | undefined
    isPending: boolean
}>()

const swiperPopular = ref<HTMLElement | null>(null)

const { initSwiper } = useSwiper(swiperPopular, {
    modules: [Navigation],
    loop: true,
    speed: 800,
    spaceBetween: 14,
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 8 },
        460: { slidesPerView: 2, spaceBetween: 10 },
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
                <li v-for="game in data.results" :key="game.id" class="swiper-slide">
                    <CardBase :game="game" :to="{ name: 'Game', params: { id: game.id } }" />
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
        .swiper-slide {
            padding: 4px 4px 30px 4px;
        }
    }
}
</style>
