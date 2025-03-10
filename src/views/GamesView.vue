<script setup lang="ts">
import ListGames from '@/components/ListGames.vue'
import TheFilters from '@/layouts/TheFilters/TheFilters.vue'
</script>

<template>
    <section aria-label="Games page" class="filters-wrapper">
        <TheFilters />
        <ListGames />
    </section>
</template>

<style lang="scss" scoped>
.filters-wrapper {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 36px;
    margin-bottom: 36px;
}
</style>
