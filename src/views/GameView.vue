<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGameStore } from '../store/gameStore'
import { onMounted } from 'vue'

const store = useGameStore()
const route = useRoute()

onMounted(() => {
    store.fetchGameById(Number(route.params.id))
})
</script>

<template>
    <div>{{ store.gameInfo }}</div>
</template>

<style lang="scss" scoped></style>
