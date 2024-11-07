<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBooksStore } from '../store/booksStore'

const route = useRoute()
const bookStore = useBooksStore()

onMounted(async () => {
    await bookStore.getBookById(String(route.params.id))
})
</script>

<template>
    <div v-if="bookStore.book" style="display: flex; flex-direction: column; gap: 26px;">
        <img width="300px" :src="bookStore.book.volumeInfo.imageLinks.large" alt="" />
        <h2>{{ bookStore.book.volumeInfo.title }}</h2>
        <p>{{ bookStore.book.volumeInfo.description }}</p>
        <div class="d-flex ga-2">
            <p>{{ bookStore.book.volumeInfo.publisher }}</p>
            <p>{{ bookStore.book.volumeInfo.publishedDate }}</p>
        </div>
        <p>Page count - {{ bookStore.book.volumeInfo.pageCount }}</p>
        <p>Language - {{ bookStore.book.volumeInfo.language }}</p>
        <div v-for="author in bookStore.book.volumeInfo.authors">{{ author }}</div>
        <div v-for="categorie in bookStore.book.volumeInfo.categories">{{ categorie }}</div>
    </div>
</template>

<style scoped></style>
