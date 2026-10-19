<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Sama seperti logika active class di header layouts/app.blade.php
const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Work', to: '/work' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
]

const isActive = computed(() => {
    return (to) => (to === '/' ? route.path === '/' || route.path === '/home' : route.path === to)
})

function toggleTheme() {
    // toggleTheme() didefinisikan di index.html (script inline)
    window.toggleTheme()
}
</script>

<template>
    <header class="w-full flex items-center justify-between shrink-0">
        <div class="w-32 h-10 bg-slate-400 dark:bg-slate-700 flex items-center pl-2 pb-2">
            <span class="dark:text-white text-sm">.</span><span class="dark:text-white"> ???</span>
        </div>

        <nav class="hidden md:flex items-center gap-14 text-xs font-bold tracking-widest uppercase">
            <RouterLink
                v-for="link in links"
                :key="link.to"
                :to="link.to"
                class="transition"
                :class="isActive(link.to) ? 'text-[#ff2b56]' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'"
            >
                {{ link.label }}
            </RouterLink>
        </nav>

        <div class="text-[10px] font-bold tracking-wider text-slate-400">
            <button type="button" @click="toggleTheme" class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition focus:outline-none">
                <svg class="w-5 h-5 dark:hidden text-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
                <svg class="w-5 h-5 hidden dark:block text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/><path d="M12 20v2"/>
                    <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
                    <path d="M2 12h2"/><path d="M20 12h2"/>
                    <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                </svg>
            </button>
        </div>
    </header>
</template>
