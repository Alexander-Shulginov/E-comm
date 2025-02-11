<script setup lang="ts">
import BaseTitle from '@/components/UI/BaseTitle.vue'
import PopularCategoryNavList from '@/components/PopularCategoryNavList.vue'

const emit = defineEmits(['getSlugActiveItem'])

const getSlugActiveItem = (slug: string) => {
    emit('getSlugActiveItem', slug)
}
</script>

<template>
    <div class="categoryNav">
        <BaseTitle :tag="'h3'" :is-bold="true" class="categoryNav__title">
            Popular By Category
        </BaseTitle>
        <PopularCategoryNavList v-on:get-slug-active-item="getSlugActiveItem" />
    </div>
</template>

<style lang="scss" scoped>
.categoryNav {
    background-color: var(--color-dark-second);
    padding: 16px;
    flex-shrink: 0;

    &__title {
        margin-bottom: 20px;

        @media (max-width: 768px) {
            text-align: center;
        }
    }
}
</style>
