<script setup lang="ts">
const props = defineProps<{
    title: string
    rate: number
    authorName: string
    publishDate: number
    url: string
}>()
</script>

<template>
    <div class="card" style="margin-bottom: 26px; border: 1px solid white; padding: 12px">
        <h4>{{ title }}</h4>
        <div>{{ rate }}</div>
        <div>{{ authorName }}</div>
        <div>{{ publishDate }}</div>
        <a :href="url" target="_blank">Link</a>
    </div>
</template>

<style lang="scss" scoped></style>
