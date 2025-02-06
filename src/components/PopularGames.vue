<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import CardBase from '@/components/UI/cards/CardBase.vue'
import { fetchGames } from '@/services/gamesService'
// import { useSwiper } from '@/hooks/useSwiper'
// import { ref } from 'vue'

const { isPending, data } = useQuery({
    queryKey: ['getGames'],
    queryFn: () => fetchGames('/games', { page_size: 10, page: 1 })
})

// const swiperPopular = ref<HTMLElement | null>(null)
// useSwiper(swiperPopular, {
//     loop: true,
//     spaceBetween: 16,
//     speed: 800,
//     breakpoints: {
//         320: {
//             slidesPerView: 2
//         },
//         768: {
//             slidesPerView: 3
//         },
//         1024: {
//             slidesPerView: 4
//         }
//     }
// })
</script>

<template>
    <section class="swiper popularGames" ref="swiperPopular">
        <ul class="popularGames__list swiper-wrapper" v-if="data">
            <li v-for="game in data.results" class="swiper-slide">
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
</template>

<style lang="scss" scoped>
.popularGames {
    margin-bottom: 48px;
    &__list {
        display: flex;
        gap: 16px;
        align-items: center;
    }
}
</style>
