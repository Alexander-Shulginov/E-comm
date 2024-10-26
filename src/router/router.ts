import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/homeView.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/product/:id',
        component: () => import('../views/productView.vue')
    },
    {
        path: '/cart',
        component: () => import('../views/cartView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/404View.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
