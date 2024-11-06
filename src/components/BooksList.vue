<script setup lang="ts">
import { useBooksStore } from '../store/booksStore'
import BooksCard from './BooksCard.vue'
const booksStore = useBooksStore()
</script>

<template>
    <div v-if="booksStore.books" class="books-list">
        <BooksCard v-for="book in booksStore.books.items" :book="book":key="book.id" />
    </div>
</template>

<style lang="scss" scoped>
.books-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 12px;
    }
}
</style>
