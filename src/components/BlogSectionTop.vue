<script setup lang="ts">
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseLink from '@/components/UI/BaseLink.vue'
</script>

<template>
    <BaseTitle :tag="'h2'">Our Latest Articles</BaseTitle>
    <BaseLink :size="'compact'" :text="'More Articles'" to="/" />
</template>
