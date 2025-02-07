<script setup lang="ts">
import CardBase from '@/components/UI/cards/CardBase.vue'
import { useSwiper } from '@/hooks/useSwiper'
import { nextTick, ref, watch } from 'vue'

const props = defineProps<{
    data: any
    isPending: boolean
}>()

const swiperPopular = ref<HTMLElement | null>(null)
const { initSwiper } = useSwiper(swiperPopular, {
    loop: true,
    speed: 800,
    breakpoints: {
        320: { slidesPerView: 1.2, spaceBetween: 18 },
        440: { slidesPerView: 2.2, spaceBetween: 18 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4, spaceBetween: 24 },
        1280: { slidesPerView: 5 }
    }
})

watch([() => props.data, swiperPopular], (newData) => {
    if (newData && swiperPopular.value) {
        nextTick(() => initSwiper())
    }
})
</script>

<template>
    <div v-if="data" class="swiper" ref="swiperPopular">
        <ul class="popularGames__list swiper-wrapper">
            <li v-for="game in data.results" :key="game.id" class="swiper-slide">
                <CardBase
                    :loading="isPending"
                    :name="game.name"
                    :img="game.background_image"
                    :rating="game.rating"
                    :platforms="game.parent_platforms"
                />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>
