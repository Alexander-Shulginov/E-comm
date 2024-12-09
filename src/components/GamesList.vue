<script setup lang="ts">
import { onMounted } from 'vue'
import { useGameStore } from '../store/gameStore'

const store = useGameStore()
onMounted(async () => {
    await store.fetchAllGames()
})
</script>

<template></template>

<style lang="scss" scoped></style>
