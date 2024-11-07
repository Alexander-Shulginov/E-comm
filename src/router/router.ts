import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/homeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },

    {
        path: '/book/:id',
        name: 'Book',
        component: () => import('../views/bookView.vue')
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
