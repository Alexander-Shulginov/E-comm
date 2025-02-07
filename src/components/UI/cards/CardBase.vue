<script setup lang="ts">
import BaseTitle from '@/components/UI/BaseTitle.vue'
import BaseImg from '@/components/UI/BaseImg.vue'
import CardBasePlatforms from '@/components/UI/cards/CardBasePlatforms.vue'
import CardBaseRating from '@/components/UI/cards/CardBaseRating.vue'

defineProps<{
    name: string
    img: string
    loading: boolean
    rating: number
    platforms: {
        platform: {
            id: number
            name: string
        }
    }[]
}>()
</script>

<template>
    <div class="cardBase">
        <div class="cardBase__img-wrap">
            <BaseImg :src="img" :alt="name" :width="300" :height="400" class="cardBase__img" />
        </div>
        <BaseTitle :tag="'h4'" :is-bold="true" class="cardBase__name">
            {{ name ? name : 'No name' }}
        </BaseTitle>

        <div class="cardBase__wrap">
            <CardBasePlatforms :platforms="platforms" />
            <CardBaseRating :rating="rating" />
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
