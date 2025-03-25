<script setup lang="ts">
import GamePromoCard from '@/components/PromoGameCard.vue'
import { useSwiper } from '@/hooks/useSwiper'
import { onMounted, ref } from 'vue'
import { Pagination } from 'swiper/modules'
import { supabase } from '@/supabase/init'

export interface promoGame {
    item_id: number
    title: string
    descr: string
    img: string
}

const promoItems = ref<promoGame[] | null>([])

async function getPromoContent() {
    const { data, error } = await supabase.from('Promo-content').select('*')
    promoItems.value = data
}

const swiperPromo = ref<HTMLElement | null>(null)

useSwiper(swiperPromo, {
    modules: [Pagination],
    loop: true,
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

onMounted(() => {
    getPromoContent()
})
</script>

<template>
    <section class="promo">
        <div class="swiper promo__swiper" ref="swiperPromo">
            <div class="swiper-wrapper">
                <GamePromoCard
                    v-for="promo in promoItems"
                    :key="promo.item_id"
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

    &__swiper {
        padding-bottom: 40px;
    }
}
</style>
