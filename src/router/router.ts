import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/wishlist',
        name: 'WishList',
        component: () => import('@/views/WishlistView.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
