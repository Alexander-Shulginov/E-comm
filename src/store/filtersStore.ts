import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filtersStore', {
    state: () => ({
        activeCategory: '',
        defaultCategoryValue: 'all',

        activeOrder: '',
        defaultOrderValue: 'newest'
    }),

    actions: {
        async resetFilters() {
            this.activeCategory = this.defaultCategoryValue
            this.activeOrder = this.defaultOrderValue
        }
    },

    getters: {
        getCategoryOptions() {
            return [
                { text: 'All', value: 'all' },
                { text: 'Art', value: 'art' },
                { text: 'Biography', value: 'biography' },
                { text: 'Computers', value: 'computers' },
                { text: 'History', value: 'history' },
                { text: 'Medical', value: 'medical' },
                { text: 'Poetry', value: 'poetry' }
            ]
        },
        getOrderOptions() {
            return [
                { text: 'New', value: 'newest' },
                { text: 'Old', value: 'oldest' }
            ]
        }
    }
})
