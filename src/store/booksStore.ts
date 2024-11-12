import { defineStore } from 'pinia'
import { BookDetails, BooksResponse } from '../types/BookInterface'

export const useBooksStore = defineStore('booksStore', {
    state: () => ({
        searchQuery: '',
        selectedCategory: '',
        selectedOrder: '',
        resultCounter: 0,
        isLoading: false,
        error: null as string | null,
        book: null as BookDetails | null,
        books: null as BooksResponse | null
    }),

    actions: {
        async fetchBooks() {},

        async getBookById() {}
    },

    getters: {
        startLoadind() {
            this.isLoading = true
        },

        stopLoading() {
            this.isLoading = false
        }
    }
})
