<script setup lang="ts">
import { GameById } from '@/types/models/GameModel'
import BaseRating from './base/BaseRating.vue'
import { formatDate } from '@/utils/formatDate'

defineProps<{
    info: GameById
}>()
</script>

<template>
    <div class="gameDetails">
        <div class="gameDetails__item">
            <span class="gameDetails__key">Rating</span>
            <span class="gameDetails__value">
                <BaseRating :rating="info.rating" />
            </span>
        </div>
        <div v-if="info.metacritic > 0" class="gameDetails__item">
            <span class="gameDetails__key">Metacritic</span>
            <span class="gameDetails__value">{{ info.metacritic }}</span>
        </div>
        <div class="gameDetails__item">
            <span class="gameDetails__key">Released</span>
            <span class="gameDetails__value">{{
                info.released ? formatDate(info.released) : 'Not announced'
            }}</span>
        </div>

        <div class="gameDetails__item">
            <span class="gameDetails__key"> Website</span>
            <a
                :href="info.website"
                target="_blank"
                class="gameDetails__value gameDetails__value--link"
                >{{ info.name }}</a
            >
        </div>
        <div class="gameDetails__item">
            <span class="gameDetails__key">Platforms</span>
            <div class="gameDetails__value--platforms">
                <span v-for="(platform, index) in info.platforms" :key="index">
                    {{ platform.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.gameDetails {
    padding: 26px;
    background-color: var(--color-dark-second);

    display: flex;
    flex-direction: column;
    gap: 16px;

    &__item {
        display: flex;
        align-items: flex-start;
        gap: 26px;
    }

    &__key {
        min-width: 100px;
    }

    &__value--link {
        text-decoration: underline;
    }

    &__value--platforms {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }
}
</style>
