<script setup lang="ts">
import BaseImg from '@/components/base/BaseImg.vue'
import CardBasePlatforms from '@/components/cards/CardBasePlatforms.vue'
import CardBaseRating from '@/components/cards/CardBaseRating.vue'
import { computed } from 'vue'
import { IGame } from '@/types/interfaces/IGames'

const props = defineProps<{
    game: IGame
    to?: any
}>()

const displayName = computed(() => {
    return props.game.name ? props.game.name : 'No name'
})
</script>

<template>
    <router-link :to="props.to" v-if="game" class="cardBase">
        <div class="cardBase__img-wrap">
            <BaseImg
                :src="game.image"
                :alt="game.name"
                :width="300"
                :height="400"
                class="cardBase__img"
            />
        </div>
        <p class="cardBase__name">
            {{ displayName }}
        </p>

        <div class="cardBase__wrap">
            <div class="cardBase__platforms">
                <CardBasePlatforms :platforms="game.platforms" />
            </div>
            <CardBaseRating :rating="game.rating" />
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
.cardBase {
    overflow: hidden;

    @media (any-hover: hover) {
        &:hover {
            .cardBase__favorite {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    &__img {
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border-radius: 8px;
        overflow: hidden;

        margin-bottom: 12px;

        @media (max-width: 460px) {
            aspect-ratio: 16 / 9;
        }
    }

    &__name {
        margin-bottom: 8px;

        font-weight: 700;
        font-size: 18px;

        overflow: hidden;
        display: -webkit-box;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    &__img-wrap {
        position: relative;
    }

    &__wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
    }

    &__platforms {
        display: flex;
        align-items: center;
        gap: 6px;
        padding-left: 2px;
    }
}
</style>
