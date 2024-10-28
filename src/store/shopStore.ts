import { defineStore } from 'pinia'
import { getProductById, getProducts, getProductSortedBy } from '../services/productService'
import { Category, Product, SortDirection } from '../types/productType'
import { getCategory } from '../services/categoryService'

export const shopStore = defineStore('shotStore', {
    state: () => ({
        products: [] as Product[],
        product: <Product | null>(null),
        loading: false,
        error: null as null | string
    }),

    actions: {
        async handleRequest(callback: Function) {
            this.loading = true
            try {
                await callback()
            } catch (error) {
                this.error = error instanceof Error ? error.message : String(error)
            } finally {
                this.loading = false
            }
        },

        async loadProducts() {
            await this.handleRequest(async () => {
                const res = await getProducts()
                this.products = res
            })
        },

        async loadProductById(id: number) {
            await this.handleRequest(async () => {
                const res = await getProductById(id)
                this.products = res
            })
        },

        async sortProduct(direction: SortDirection) {
            await this.handleRequest(async () => {
                const res = await getProductSortedBy(direction)
                this.products = res
            })
        },

        async loadProductByCategory(category: Category) {
            await this.handleRequest(async () => {
                const res = await getCategory(category)
                this.products = res
            })
        }
    },

    getters: {}
})
