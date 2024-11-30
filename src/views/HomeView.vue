<script setup lang="ts">
import { onMounted } from 'vue'
import { appStore } from '../store/appStore'
import NewsList from '../components/NewsList.vue'

const store = appStore()

onMounted(async () => {
    store.fetchNewStories()
})
</script>

<template>
    <div v-if="store.isLoading">Loading</div>
    <div v-else-if="store.isError">Error</div>
    <NewsList v-else />
</template>

<style lang="scss" scoped></style>
