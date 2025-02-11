<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { Game } from '@/types/models/Game'
import CardPopular from './UI/cards/CardPopular.vue'
import { useSwiper } from '@/hooks/useSwiper'

const props = defineProps<{
    data: Game[] | undefined
}>()

const swiperCategory = ref<HTMLElement | null>(null)
const { initSwiper } = useSwiper(swiperCategory, {
    loop: true,
    speed: 800,
    spaceBetween: 18,
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 16 },
        460: { slidesPerView: 2, spaceBetween: 18 },
        860: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 }
    }
})

watch([() => props.data, swiperCategory], (newData) => {
    if (newData && swiperCategory.value) {
        nextTick(() => initSwiper())
    }
})
</script>

<template>
    <div class="swiper" ref="swiperCategory" v-if="data">
        <div class="swiper-wrapper">
            <CardPopular class="swiper-slide" v-for="game in data" :key="game.id" :data="game" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
