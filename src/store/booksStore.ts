import { defineStore } from 'pinia'
import { BookDetails, BooksResponse } from '../types/BookInterface'
import { getBooks } from '../services/booksService'

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
        async fetchBooks() {
            try {
                this.startLoadind
                this.books = await getBooks(this.searchQuery)
            } catch (error) {
                console.log(error)
            } finally {
                this.stopLoading
            }
        }
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
