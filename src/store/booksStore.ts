import { defineStore } from 'pinia'
import { BookDetails, BooksResponse } from '../types/BookInterface'
import { getBookById, getBooksBySearch } from '../services/booksService'

export const useBooksStore = defineStore('booksStore', {
    state: () => ({
        lastQuery: "",
        resultCounter: 0,
        book: null as BookDetails | null,
        books: null as BooksResponse | null
    }),

    actions: {
        async getBooksBySearch(searchQuery: string) {
            this.books = await getBooksBySearch(searchQuery)
        },

        async getBookById(id: string) {
            this.book = await getBookById(id)
        }
    },

    getters: {}
})
