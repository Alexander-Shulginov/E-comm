<script setup lang="ts">
import BaseTitle from '../components/BaseTitle.vue'
import BooksFilter from '../components/BooksFilter.vue';
import BooksList from '../components/BooksList.vue'
import BooksResultCounter from '../components/BooksResultCounter.vue';
import BooksSearch from '../components/BooksSearch.vue'
</script>

<template>
    <BaseTitle variant="h1" text="Search books" />
    <BooksSearch />
    <BooksFilter />
    <BooksResultCounter />
    <BooksList />
</template>
