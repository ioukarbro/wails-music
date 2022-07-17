import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/search',
        name: 'search',
        component: () => import('@/pages/Search.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/library',
        name: 'library',
        component: () => import('@/pages/Library.vue')
    },
    {
        path: '/createPlaylist',
        name: 'createPlaylist',
        component: () => import('@/pages/CreatePlaylist.vue')
    },
    {
        path: '/likedSongs',
        name: 'likedSongs',
        component: () => import('@/pages/LikedSongs.vue')
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('@/pages/Setting.vue')
    },
    {
        path: '/account',
        name: 'account',
        component: () => import('@/pages/Account.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router