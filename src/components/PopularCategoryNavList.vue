<script setup lang="ts">
import { ref } from 'vue'
import { popularCategory } from '@/types/popularCategory'

const emit = defineEmits(['getSlugActiveItem'])

const getSlugActiveItem = (slug: string) => {
    emit('getSlugActiveItem', slug)
}
const clickedItem = ref<number>(0)
const updateClickedItem = (index: number) => {
    clickedItem.value = index
}
</script>

<template>
    <ul class="categoryNav__list">
        <li class="categoryNav__item" v-for="(category, index) in popularCategory" :key="index">
            <button
                class="categoryNav__btn"
                :class="{ 'categoryNav__btn--active': clickedItem === index }"
                @click="
                    updateClickedItem(index);
                    getSlugActiveItem(category.slug)
                "
                type="button"
            >
                {{ category.name }}
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
