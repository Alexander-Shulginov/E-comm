import { defineStore } from 'pinia'
import { getProductById, getProducts } from '../services/productService'
import { Product } from '../types/productType'

export const shopStore = defineStore('shotStore', {
    state: () => ({
        products: [] as Product[],
        product: null as Product | null,
        loading: false,
        error: null as null | string
    }),

    actions: {
        async loadProducts() {
            this.loading = true
            try {
                const response = await getProducts()
                this.products = response
            } catch (error) {
                if (error instanceof Error) {
                    this.error = error.message
                } else {
                    this.error = String(error)
                }
            } finally {
                this.loading = false
            }
        },

        async loadProductById(id: number) {
            this.loading = true
            try {
                const response = await getProductById(id)
                this.product = response.data as Product
            } catch (error) {
                if (error instanceof Error) {
                    this.error = error.message
                } else {
                    this.error = String(error)
                }
            } finally {
                this.loading = false
            }
        }
    },

    getters: {}
})
