<script setup lang="ts">
import { ref } from 'vue'
import { genreList } from '@/types/genres'

const clickedItem = ref<number>(0)
</script>

<template>
    <ul class="categoryNav__list">
        <li class="categoryNav__item" v-for="(genre, index) in genreList" :key="index">
            <button
                class="categoryNav__btn"
                :class="{ 'categoryNav__btn--active': clickedItem === index }"
                @click="clickedItem = index"
                type="button"
            >
                {{ genre.genreName }}
            </button>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.categoryNav {
    &__list {
        display: grid;
        gap: 8px;

        @media (max-width: 768px) {
            gap: 16px;
            justify-items: center;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &__btn {
        cursor: pointer;
        color: var(--color-light);
        font-size: 16px;
        background-color: transparent;
    }

    &__btn--active {
        color: var(--color-accent);
        font-weight: 700;
    }
}
</style>
