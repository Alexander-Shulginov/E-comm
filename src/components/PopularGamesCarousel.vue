<script setup lang="ts">
import CardBase from '@/components/UI/cards/CardBase.vue'
import { useSwiper } from '@/hooks/useSwiper'
import { Game } from '@/types/models/Game'
import { nextTick, ref, watch } from 'vue'

const props = defineProps<{
    data: Game[] | undefined
    isPending: boolean
}>()

const swiperPopular = ref<HTMLElement | null>(null)
const { initSwiper } = useSwiper(swiperPopular, {
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
})

watch([() => props.data, swiperPopular], (newData) => {
    if (newData && swiperPopular.value) {
        nextTick(() => initSwiper())
    }
})
</script>

<template>
    <div v-if="data" class="swiper popularGames__carousel" ref="swiperPopular">
        <ul class="popularGames__list swiper-wrapper">
            <li v-for="game in data" :key="game.id" class="swiper-slide">
                <CardBase :game="game" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.popularGames {
    &__carousel {
        padding-bottom: 30px;
    }
}
</style>
