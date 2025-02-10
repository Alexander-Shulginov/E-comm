<script setup lang="ts">
import { genreList } from '@/types/genres'
import BaseTitle from '@/components/UI/BaseTitle.vue'
import { onMounted, ref } from 'vue'
import { nextTick } from 'vue'

const navBtn = ref<NodeList | null>(null)
const clickedItem = ref<HTMLElement | null>(null)

onMounted(() => {
    nextTick(() => {
        if (navBtn.value) {
            clickedItem.value = navBtn.value[0]
            navBtn.value[0].classList.add('categoryNav__btn--active')
        }
    })
})

const highLightItem = (event: Event) => {
    if (event.target instanceof HTMLElement) {
        clickedItem.value?.classList.remove('categoryNav__btn--active')

        event.target.classList.add('categoryNav__btn--active')

        clickedItem.value = event.target
    }
}
</script>

<template>
    <nav class="categoryNav">
        <BaseTitle :tag="'h3'" :is-bold="true" class="categoryNav__title">
            Popular By Category
        </BaseTitle>
        <ul class="categoryNav__list">
            <li class="categoryNav__item" v-for="(genre, index) in genreList" :key="index">
                <button @click="highLightItem" ref="navBtn" class="categoryNav__btn" type="button">
                    {{ genre.genreName }}
                </button>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.categoryNav {
    background-color: var(--color-dark-second);
    padding: 16px;
    flex-shrink: 0;

    &__title {
        margin-bottom: 20px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__item {
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
