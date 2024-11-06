import { defineStore } from 'pinia'
import { BooksResponse } from '../types/BookInterface'

export const useBooksStore = defineStore('booksStore', {
    state: () => ({
        books: null as BooksResponse | null
    }),

    actions: {},

    getters: {}
})
