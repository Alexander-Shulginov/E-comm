import { defineStore } from 'pinia'
import { BooksResponse } from '../types/BookInterface'
import { getBooksBySearch } from '../services/booksService'

export const useBooksStore = defineStore('booksStore', {
    state: () => ({
        books: null as BooksResponse | null
    }),

    actions: {
        async getBooksBySearch(searchQuery: string) {
            this.books = await getBooksBySearch(searchQuery)
        }
    },

    getters: {}
})
