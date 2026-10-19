import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WorkView from '@/views/WorkView.vue'
import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'
import QrisView from '@/views/QrisView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/home',
        redirect: '/',
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/work',
        name: 'work',
        component: WorkView,
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogView,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
    },
    {
        path: '/qris',
        name: 'qris',
        component: QrisView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router
