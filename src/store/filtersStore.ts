import { reactive } from 'vue'

export const filtersState = reactive({
    isOpen: true
})

export const showFilters = () => {
    filtersState.isOpen = true
}

export const hideFilters = () => {
    filtersState.isOpen = false
}