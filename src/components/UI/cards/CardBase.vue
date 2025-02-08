<script setup lang="ts">
import BaseTitle from '@/components/UI/BaseTitle.vue'
import BaseImg from '@/components/UI/BaseImg.vue'
import CardBasePlatforms from '@/components/UI/cards/CardBasePlatforms.vue'
import CardBaseRating from '@/components/UI/cards/CardBaseRating.vue'
import { computed } from 'vue'
import { Game } from '@/types/models/Game'

const props = defineProps<{
    game: Game
}>()

const displayName = computed(() => {
    return props.game.name ? props.game.name : 'No name'
})
</script>

<template>
    <div v-if="game" class="cardBase">
        <div class="cardBase__img-wrap">
            <BaseImg
                :src="game.image"
                :alt="game.name"
                :width="300"
                :height="400"
                class="cardBase__img"
            />
        </div>
        <BaseTitle :tag="'h4'" :is-bold="true" class="cardBase__name">
            {{ displayName }}
        </BaseTitle>

        <div class="cardBase__wrap">
            <CardBasePlatforms :platforms="game.platforms" />
            <CardBaseRating :rating="game.rating" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cardBase {
    overflow: hidden;

    &__img {
        aspect-ratio: 3 / 4;
        object-fit: cover;
        border-radius: 8px;
        overflow: hidden;

        margin-bottom: 12px;
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

    &__wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
    }
}
</style>
