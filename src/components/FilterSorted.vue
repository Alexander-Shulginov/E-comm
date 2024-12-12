<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { GameSort, GameSorted } from '../types/sortedTypes'
import { useGameStore } from '../store/gameStore'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const store = useGameStore()
const selectValue = ref<GameSorted>(GameSort.Release)

const items = [
    { key: 'Release', value: GameSort.Release },
    { key: 'Popularity', value: GameSort.Popularity },
    { key: 'Alphabetical', value: GameSort.Alphabetical },
    { key: 'Relevance', value: GameSort.Relevance }
] as const

onMounted(() => {
    const sortParam = route.query.sort as GameSorted
    if (sortParam) {
        selectValue.value = sortParam
    }
})

watch(
    () => selectValue.value,
    (newValue) => {
        router.push({ query: { ...route.query, sort: newValue } })
        store.sortGamesBy(newValue)
    }
)
</script>

<template>
    <v-select
        v-model="selectValue"
        label="Sorted by"
        :items="items"
        item-title="key"
        item-value="value"
    />
</template>

<style lang="scss" scoped></style>
