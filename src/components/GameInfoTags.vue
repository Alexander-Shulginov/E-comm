<script setup lang="ts">
defineProps<{
    tags: {
        id: number
        name: string
    }[]
}>()
</script>

<template>
    <div class="tags" v-if="tags">
        <div class="tags__item" v-for="tag in tags">
            {{ tag.name }}
        </div>
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
        transition: border-color .3s  ease-in-out;

        @media (any-hover:hover) {
            &:hover {
                border-color: var(--color-accent);
            }
        }
    }
}
</style>
