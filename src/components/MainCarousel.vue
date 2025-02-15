<script setup lang="ts">
import { ref } from 'vue'
import CardFullscreen from '@/components/cards/CardFullscreen.vue'
import { useSwiper } from '@/hooks/useSwiper'
import { Pagination } from 'swiper/modules'

const mainContent = [
    {
        descr: 'In the open world of Wild Hunt, you chart your own path to adventure. You play as a bounty hunter, a man of the road. You set your own goals and choose your own destinations. Go after the bounty on the head of a nasty monster pestering a village or help a scheming prince who needs a dirty job done -- no matter what style of epic questing you crave, The Witcher will provide it.',
        img: 'witcher',
        date: '18.05.2015'
    },
    {
        descr: 'Atomic Heart is an adventure role-playing action game with a closed world, which takes place in an alternative Soviet Union of 1955. Science, equality and fraternity are the main symbols of Freedom in this reality. But what kind of effort does it take to build an ideal society?',
        img: 'atomic',
        date: '21.02.2023'
    },
    {
        descr: 'Forge your own path through the corrupted lands of Sanctuary in the critically-acclaimed dark fantasy action-RPG. Explore the corrupted open world teeming with immersive quests, vicious enemies, and mighty loot waiting to be discovered.',
        img: 'diablo',
        date: '05.06.2023'
    },
    {
        descr: 'Set some time after the events of the 2016 game, the story follows the Doom Slayer once again, on a mission to end Hells consumption of Earth and foil the alien Khan Maykrs plans to exterminate humanity. Along with the single-player campaign, a multiplayer mode, Battlemode, was introduced.',
        img: 'doom',
        date: '20.03.2020'
    }
]

const swiperFullscreen = ref<HTMLElement | null>(null)
useSwiper(swiperFullscreen, {
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    speed: 1000,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    }
})
</script>

<template>
    <div class="swiper mainCarousel" ref="swiperFullscreen">
        <div class="swiper-wrapper">
            <CardFullscreen v-for="game, index in mainContent" :data="game" :id="index" class="swiper-slide" />
            
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<style lang="scss" scoped>
.mainCarousel {
    margin-bottom: 86px;
}
</style>
