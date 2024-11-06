<script setup lang="ts">
import { BookInfo } from '../types/BookInterface'

defineProps<{ book: BookInfo }>()
</script>

<template>
    <v-card>
        <RouterLink to="">
            <div v-if="book.volumeInfo.imageLinks">
                <v-img
                    :src="book.volumeInfo.imageLinks.thumbnail"
                    :alt="book.volumeInfo.title"
                    contain
                    height="250"
                />
            </div>
            <div v-else class="d-flex align-center justify-center" style="height: 250px">
                no photo
            </div>
            <v-card-title>{{ book.volumeInfo.title }}</v-card-title>
            <v-card-text class="pb-0"> {{ book.volumeInfo.categories?.[0] }}</v-card-text>
            <v-card-text>
                <div class="card-authors">
                    <span
                        class="card-authors__name"
                        v-for="author in book.volumeInfo.authors"
                        :key="author"
                        :title="book.volumeInfo.authors?.join(', ')"
                    >
                        {{ author + ' ' }}
                    </span>
                </div>
            </v-card-text>
        </RouterLink>
    </v-card>
</template>

<style scoped lang="scss">
.card-authors {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 12px;

    overflow: hidden;
    display: -webkit-box;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
</style>
