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
        padding: 10px 16px;
        border-radius: 10px;
        background-color: var(--color-dark-second);
    }
}
</style>
