<script setup lang="ts">
import IconGameAtomic from '../icons/IconGameAtomic.vue'
import IconGameDiablo from '../icons/IconGameDiablo.vue'
import IconGameDoom from '../icons/IconGameDoom.vue'
import IconGameWitcher from '../icons/IconGameWitcher.vue'
import BaseBtn from '../UI/buttons/BaseBtn.vue'
</script>

<template>
    <div class="cardFull">
        <div class="cardFull__wrap">
            <div class="cardFull__logo">
                <!-- <IconGameWitcher :width="206" :height="100" /> -->
                <!-- <IconGameAtomic :width="206" :height="100" /> -->
                <!-- <IconGameDiablo :width="950" :height="600" /> -->
                <IconGameDoom :width="160" :height="100" />
            </div>
            <p class="cardFull__descr">
                In the open world of Wild Hunt, you chart your own path to adventure. You play as a
                bounty hunter, a man of the road. You set your own goals and choose your own
                destinations. Go after the bounty on the head of a nasty monster pestering a village
                or help a scheming prince who needs a dirty job done -- no matter what style of epic
                questing you crave, The Witcher will provide it.
            </p>
            <div class="cardFull__block">
                <BaseBtn :as="'a'" :variant="'accent'">Details</BaseBtn>
                <span class="cardFull__date">Release date: 01.02.0003</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardFull {
    aspect-ratio: 16 / 9;

    // background-image: url(../../assets/img/main/witcher.webp);
    // background-image: url(../../assets/img/main/atomic.webp);
    // background-image: url(../../assets/img/main/diablo.webp);
    background-image: url(../../assets/img/main/doom.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;

    border-radius: 12px;

    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        pointer-events: none;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%);
    }

    @media (max-width: 768px) {
        aspect-ratio: 3 / 4;
        max-height: 660px;
    }

    &__wrap {
        max-width: 350px;
        position: absolute;
        left: 36px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;

        @media (max-width: 768px) {
            left: 16px;
            right: 16px;
        }
    }

    &__logo {
        margin-bottom: 18px;
        opacity: 0;
        transition: all 1.1s ease-in-out;
    }

    &__descr {
        margin-bottom: 24px;
        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    &__block {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__date {
        font-family: var(--font-second);
    }
}

.swiper-slide-active {
    .cardFull__logo {
        opacity: 1;
    }
}
</style>
