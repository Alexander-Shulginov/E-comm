import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const APP_NAME = import.meta.env.VITE_APP_NAME

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/genres',
        name: 'Genres',
        meta: { title: 'Genres' },
        component: () => import('@/views/GenresView.vue')
    },
    {
        path: '/game/:id',
        name: 'Game',
        props: true,
        meta: { title: 'Game' },
        component: () => import('@/views/GameView.vue')
    },
    {
        path: '/wishlist',
        name: 'WishList',
        meta: { title: 'Wish List' },
        component: () => import('@/views/WishlistView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        meta: { title: '404' },
        component: () => import('@/views/NotFoundView.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to) => {
    const pageTitle = to.meta.title ? `${APP_NAME} | ${to.meta.title}` : APP_NAME
    document.title = pageTitle
})
