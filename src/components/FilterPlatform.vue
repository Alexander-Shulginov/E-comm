<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { GameSort, GameSorted } from '../types/sortedTypes'
import { useGameStore } from '../store/gameStore'
import { useRoute, useRouter } from 'vue-router'
import { GamePlatform } from '../types/platformTypes'

const router = useRouter()
const route = useRoute()

const store = useGameStore()
const selectValue = ref<GamePlatform>('all')

const items = [
    { key: 'All', value: 'all' },
    { key: 'PC', value: 'pc' },
    { key: 'Browser', value: 'browser' }
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
        router.push({ query: { ...route.query, platform: newValue } })
        store.sortGamesByPlatform(newValue)
    }
)
</script>

<template>
    <v-select
        v-model="selectValue"
        label="Platform"
        :items="items"
        item-title="key"
        item-value="value"
    />
</template>
