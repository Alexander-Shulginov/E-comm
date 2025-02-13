<script setup lang="ts">
import BaseTitle from '@/components/UI/BaseTitle.vue'
import BaseImg from '@/components/UI/BaseImg.vue'
import CardBasePlatforms from '@/components/cards/CardBasePlatforms.vue'
import CardBaseRating from '@/components/cards/CardBaseRating.vue'
import { computed } from 'vue'
import { Game } from '@/types/models/Game'
import BtnAddToFavorites from '@/components/UI/buttons/BtnAddToFavorites.vue'

const props = defineProps<{
    game: Game,
    showPlatforms?: boolean,
    showRating?: boolean
}>()

const displayName = computed(() => {
    return props.game.name ? props.game.name : 'No name'
})
</script>

<template>
    <a href="#" v-if="game" class="cardBase">
        <div class="cardBase__img-wrap">
            <BaseImg
                :src="game.image"
                :alt="game.name"
                :width="300"
                :height="400"
                class="cardBase__img"
            />
            <BtnAddToFavorites class="cardBase__favorite" />
        </div>
        <BaseTitle :tag="'h4'" :is-bold="true" class="cardBase__name">
            {{ displayName }}
            {{ showPlatforms }}
        </BaseTitle>

        <div class="cardBase__wrap">
            <div v-if="showPlatforms" class="cardBase__platforms">
                <CardBasePlatforms :platforms="game.platforms" />
            </div>
            <CardBaseRating v-if="showRating" :rating="game.rating" />
        </div>
    </a>
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

        @media (max-width: 460px){
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

    &__favorite {
        position: absolute;
        top: 12px;
        right: 12px;
        visibility: hidden;
        opacity: 0;
        transition:
            visibility 0.3s ease-in-out,
            opacity 0.3s ease-in-out;
    }

    &__wrap {
        display: flex;
        // align-items: center;
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
