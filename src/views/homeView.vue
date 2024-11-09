<script setup lang="ts">
import BaseTitle from '../components/BaseTitle.vue'
import BooksList from '../components/BooksList.vue'
import BooksResultCounter from '../components/BooksResultCounter.vue';
import BooksSearch from '../components/BooksSearch.vue'
</script>

<template>
    <BaseTitle variant="h1" text="Search books" />
    <BooksSearch />
    <BooksResultCounter />
    <BooksList />
</template>
