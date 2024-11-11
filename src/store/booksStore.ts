import { defineStore } from 'pinia'
import { BookDetails, BooksResponse } from '../types/BookInterface'
import { getBookById, getBooks } from '../services/booksService'

export const useBooksStore = defineStore('booksStore', {
    state: () => ({
        lastQuery: '',
        categoryQuery: '',
        error: null as string | null,
        isLoading: false,
        resultCounter: 0,
        book: null as BookDetails | null,
        books: null as BooksResponse | null
    }),

    actions: {
        async fetchBooks(searchQuery: string, categoryQuery?: string) {
            this.isLoading = true
            try {
                this.books = await getBooks(searchQuery, categoryQuery)
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
