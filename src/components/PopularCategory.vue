<script setup lang="ts">
import { genreList } from '@/types/genres'
import BaseTitle from '@/components/UI/BaseTitle.vue'
import CardBase from '@/components/UI/cards/CardBase.vue'
import { useQuery } from '@tanstack/vue-query'
import { fetchGames } from '@/services/gamesService'

const { isPending, data } = useQuery({
    queryKey: ['getGamesByCategory'],
    queryFn: () => fetchGames('/games', { page_size: 5, page: 1, genres: 'strategy' })
})
</script>

<template>
    <div class="popularCategory">
        <div class="popularCategory__block">
            <BaseTitle :tag="'h3'" :is-bold="true" class="popularCategory__title">
                Popular By Category
            </BaseTitle>

            <ul class="popularCategory__list">
                <li class="popularCategory__item" v-for="genre in genreList">
                    {{ genre.genreName }}
                </li>
            </ul>
        </div>
        <div class="popularCategory__games" v-if="data">
            <div v-for="game in data">
                <img :src="game.image" :alt="game.name" />
                <p>{{ game.name }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.popularCategory {
    display: flex;
    margin-bottom: 68px;
    gap: 18px;

    &__block {
        background-color: var(--color-dark-second);
        padding: 16px;
        flex-shrink: 0;
    }

    &__title {
        margin-bottom: 20px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__item {
        cursor: pointer;
    }

    &__games {
        display: flex;
        gap: 12px;

        div {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        img {
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 12px;
        }

        p {
            font-weight: 700;
            font-size: 18px;
            overflow: hidden;
            display: -webkit-box;

            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
    }
}
</style>
