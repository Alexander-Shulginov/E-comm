export interface Product {
    id: number
    title: string
    image: string
    price: number
    category: string
    description: string
    rating: {
        rate: number
        count: number
    }
}

export type SortDirection = 'desc' | 'asc'

export type Category = 'electronics' | 'jewelery' | "men's clothing" | "women's clothing"
