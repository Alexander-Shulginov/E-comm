<script setup lang="ts">
import { IGameById } from '@/types/interfaces/IGameById'
// import BaseRating from './base/BaseRating.vue'
import { formatDate } from '@/utils/formatDate'

defineProps<{
    info: IGameById
}>()
</script>

<template>
    <div class="gameDetails">
        <!-- <div class="gameDetails__item">
            <span class="gameDetails__key">Rating</span>
            <span class="gameDetails__value">
                <BaseRating :rating="info.rating" />
            </span>
        </div> -->
        <div class="gameDetails__item">
            <span class="gameDetails__key">Genre</span>
            <span v-for="genre in info.genres">
                {{ genre.name }}
            </span>
        </div>
        <div class="gameDetails__item">
            <span class="gameDetails__key">Developer</span>
            <span v-for="developer in info.developers">
                {{ developer.name }}
            </span>
        </div>
        <div class="gameDetails__item">
            <span class="gameDetails__key">Publisher</span>
            <span v-for="publisher in info.publishers">
                {{ publisher.name }}
            </span>
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
