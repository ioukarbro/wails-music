import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/main/index'
    },
    {
        path: '/main',
        name: 'index',
        component: () => import('@/pages/Main.vue'),
        children: [
            {
                path: 'index',
                component: () => import('@/pages/Index.vue')
            },
            {
                path: 'list',
                component: () => import('@/pages/List.vue')
            },
            {
                path: 'search',
                component: () => import('@/pages/Search.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
