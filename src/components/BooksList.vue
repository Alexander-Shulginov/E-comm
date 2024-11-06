<script setup lang="ts">
import { useBooksStore } from '../store/booksStore'
import BooksCard from './BooksCard.vue'
const booksStore = useBooksStore()
</script>

<template>
    <v-row v-if="booksStore.books">
        <v-col
            class="v-col-12 v-col-sm-6 v-col-md-4 v-col-lg-3 v-col-xl-2"
            v-for="book in booksStore.books.items"
            :key="book.id"
        >
            <BooksCard :book="book" />
        </v-col>
    </v-row>
</template>
