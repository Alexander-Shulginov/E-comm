import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/homeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: () => import('../views/productView.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/cartView.vue')
    },
    {
        path: '/category',
        name: 'AllCategory',
        component: () => import('../views/allCategoryView.vue')
    },
    {
        path: '/category/:name',
        name: 'CategoryItems',
        component: () => import('../views/categoryItemsView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/404View.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
