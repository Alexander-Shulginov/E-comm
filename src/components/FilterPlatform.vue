<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { GamePlatform } from '../types/platformTypes'
import { useGameStore } from '../store/gameStore'

const router = useRouter()
const route = useRoute()
const store = useGameStore()

const selectValue = ref<GamePlatform>('all')

const items = [
    { key: 'All', value: 'all' },
    { key: 'PC', value: 'pc' },
    { key: 'Browser', value: 'browser' }
] as const

// Синхронизация selectValue с URL при монтировании
onMounted(() => {
    const platformParam = route.query.platform as GamePlatform
    if (platformParam) {
        selectValue.value = platformParam
    }
})

// Отслеживание изменений selectValue и обновление URL + данных
watch(
    () => selectValue.value,
    (newValue) => {
        const newQuery = { ...route.query, platform: newValue }
        router.push({ query: newQuery }).then(() => {
            store.fetchGames(newQuery)
        })
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
