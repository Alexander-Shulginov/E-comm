<script setup lang="ts">
import { useBooksStore } from '../store/booksStore'

const bookStore = useBooksStore()
</script>

<template>
    <div v-if="bookStore.books?.totalItems" class="mb-10">
        Result: {{ bookStore.books?.totalItems }}
    </div>
</template>

<style scoped></style>
