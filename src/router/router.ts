import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/genres',
        name: 'Genres',
        component: () => import('@/views/GenresView.vue')
    },
    {
        path: '/wishlist',
        name: 'WishList',
        component: () => import('@/views/WishlistView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/NotFoundView.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
