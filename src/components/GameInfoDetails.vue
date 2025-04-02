<script setup lang="ts">
import { IGameById } from '@/types/interfaces/IGameById'
import BaseRating from '@/components/base/BaseRating.vue'
import { formatDate } from '@/utils/formatDate'

defineProps<{
    info: IGameById
}>()
</script>

<template>
    <div class="gameDetails">
        <div class="gameDetails__item">
            <span class="gameDetails__key">Rating</span>
            <div class="gameDetails__value">
                <BaseRating :rating="info.rating" />
            </div>
        </div>

        <div v-if="info.genres.length" class="gameDetails__item">
            <span class="gameDetails__key">Genre</span>
            <div class="gameDetails__values">
                <router-link
                    :to="{ name: 'Games', query: { genres: genre.id } }"
                    v-for="genre in info.genres"
                    class="gameDetails__value"
                >
                    {{ genre.name }}
                </router-link>
            </div>
        </div>

        <div class="gameDetails__item">
            <span class="gameDetails__key">Released</span>
            <span class="gameDetails__value">{{
                info.released ? formatDate(info.released) : 'Not announced'
            }}</span>
        </div>

        <div v-if="info.website" class="gameDetails__item">
            <span class="gameDetails__key"> Website</span>
            <a
                :href="info.website"
                target="_blank"
                class="gameDetails__value gameDetails__value--link"
                >{{ info.name }}</a
            >
        </div>

        <div v-if="info.developers.length" class="gameDetails__item">
            <span class="gameDetails__key">Developer</span>
            <div class="gameDetails__values">
                <router-link
                    :to="{
                        name: 'Games',
                        query: {
                            developers: developer.id
                        }
                    }"
                    v-for="developer in info.developers"
                    class="gameDetails__value"
                >
                    {{ developer.name }}
                </router-link>
            </div>
        </div>

        <div v-if="info.publishers.length" class="gameDetails__item">
            <span class="gameDetails__key">Publisher</span>
            <div class="gameDetails__values">
                <router-link
                    :to="{
                        name: 'Games',
                        query: {
                            publishers: publisher.id
                        }
                    }"
                    v-for="publisher in info.publishers"
                    class="gameDetails__value"
                >
                    {{ publisher.name }}
                </router-link>
            </div>
        </div>
        <div v-if="info.platforms" class="gameDetails__item">
            <span class="gameDetails__key">Platforms</span>
            <div class="gameDetails__values">
                <router-link
                    :to="{ name: 'Games', query: { platforms: platform.id } }"
                    v-for="(platform, index) in info.platforms"
                    :key="index"
                    class="gameDetails__value"
                >
                    {{ platform.name }}
                </router-link>
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
    
    @media (max-width: 768px){
        padding: 12px;
    }

    &__item {
        display: flex;
        gap: 16px;
    }

    &__key {
        min-width: 90px;
        font-weight: 700;

        @media (max-width: 768px){
            font-size: 15px;
        }
    }

    &__values {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 10px;
        row-gap: 4px;

    }

    &__value {
        color: rgba(255, 255, 255, 0.85);
        font-size: 15px;
        @media (max-width: 768px){
            font-size: 14px;
        }
    }

    a {
        @media (any-hover: hover) {
            &:hover {
                color: var(--color-accent);
            }
        }
    }

    &__value--link {
        text-decoration: underline;
    }
}
</style>
