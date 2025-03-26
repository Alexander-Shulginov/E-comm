<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useSwiper } from '@/hooks/useSwiper'
import { Pagination } from 'swiper/modules'
import GamePromoCard from '@/components/PromoGameCard.vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchPromoContent } from '@/services/promoService'
import BaseLoader from './base/BaseLoader.vue'

const { data: promoGames, isFetching } = useQuery({
    queryKey: ['fetchPromoGames'],
    queryFn: () => fetchPromoContent()
})

const swiperPromo = ref<HTMLElement | null>(null)

const { initSwiper } = useSwiper(swiperPromo, {
    modules: [Pagination],
    // loop: true,
    spaceBetween: 16,
    speed: 800,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
    pagination: {
        el: '.swiper-pagination'
    }
})

watch([() => promoGames, swiperPromo], (newData) => {
    if (newData && swiperPromo.value) {
        nextTick(() => initSwiper())
    }
})
</script>

<template>
    <section class="promo">
        <BaseLoader v-if="isFetching" />
        <div v-else class="swiper promo__swiper" ref="swiperPromo">
            <div class="swiper-wrapper">
                <GamePromoCard
                    v-for="promo in promoGames"
                    :key="promo.id"
                    :data="promo"
                    class="swiper-slide"
                />
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.promo {
    margin-bottom: 40px;
    position: relative;
    min-height: 300px;

    &__swiper {
        padding-bottom: 40px;
    }
}
</style>
