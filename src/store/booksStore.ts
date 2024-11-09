import { defineStore } from 'pinia'
import { BookDetails, BooksResponse } from '../types/BookInterface'
import { getBookById, getBooksBySearch } from '../services/booksService'

export const useBooksStore = defineStore('booksStore', {
    state: () => ({
        lastQuery: '',
        error: null as string | null,
        isLoading: false,
        resultCounter: 0,
        book: null as BookDetails | null,
        books: null as BooksResponse | null
    }),

    actions: {
        async fetchBooksBySearch(searchQuery: string) {
            this.isLoading = true
            try {
                this.books = await getBooksBySearch(searchQuery)
            } catch (error) {
                this.error = error as string
            } finally {
                this.isLoading = false
            }
        },

        async getBookById(id: string) {
            this.book = await getBookById(id)
        }
    },

    getters: {}
})
