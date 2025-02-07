<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import CardBase from '@/components/UI/cards/CardBase.vue'
import { fetchGames } from '@/services/gamesService'
import { useSwiper } from '@/hooks/useSwiper'
import { nextTick, ref, watch } from 'vue'

const { isPending, data } = useQuery({
    queryKey: ['getGames'],
    queryFn: () => fetchGames('/games', { page_size: 12, page: 1 })
})

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

watch([data, swiperPopular], (newData) => {
    if (newData && swiperPopular.value) {
        nextTick(() => {
            initSwiper()
        })
        console.log(newData)
    }
})
</script>

<template>
    <div v-if="data">
        <section class="swiper popularGames" ref="swiperPopular">
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
        </section>
    </div>
</template>

<style lang="scss" scoped>
.popularGames {
    margin-bottom: 48px;
    // &__list {
    //     display: flex;
    //     gap: 16px;
    //     align-items: center;
    // }
}
</style>
