import { defineStore } from 'pinia'
import { BooksResponse } from '../types/BookInterface'
import { getBooks } from '../services/booksService'

export const useBooksStore = defineStore('booksStore', {
    state: () => ({
        books: null as BooksResponse | null
    }),

    actions: {
        async getBooksBySearch(searchQuery: string) {
            this.books = await getBooks(searchQuery)
        }
    },

    getters: {}
})
