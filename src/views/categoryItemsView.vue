<script setup lang="ts">
import CategoryListItems from '../components/CategoryListItems.vue'
import TheBreadcrumbs from '../components/TheBreadcrumbs.vue'
</script>
<template>
    <TheBreadcrumbs :current-category="$route.params.name as string" />
    <CategoryListItems />
</template>

<style scoped></style>
