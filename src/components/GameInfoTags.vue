<script setup lang="ts">
defineProps<{
    tags: {
        id: number
        slug: string
        name: string
    }[]
}>()
</script>

<template>
    <div class="tags" v-if="tags">
        <router-link
            :to="{ name: 'Games', query: { tags: tag.slug } }"
            v-for="tag in tags"
            :key="tag.id"
            class="tags__item"
        >
            {{ tag.name }}
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.tags {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 8px;

    &__item {
        font-size: 13px;
        cursor: pointer;
        padding: 6px 12px;
        border-radius: 10px;
        background-color: var(--color-dark-second);
        border: 2px solid transparent;
        transition: border-color 0.3s ease-in-out;

        @media (any-hover: hover) {
            &:hover {
                border-color: var(--color-accent);
            }
        }
    }
}
</style>
