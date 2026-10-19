<script setup>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
    <div class="w-full h-full flex flex-col justify-between px-8 lg:px-32 py-14 box-border">
        <SiteHeader />

        <main class="relative w-full my-auto flex-grow flex items-center justify-center px-40">
            <RouterView />

            <div class="hidden xl:flex absolute right-1 top-1/2 -translate-y-1/2 items-center gap-3 text-[10px] font-bold tracking-widest text-slate-400 uppercase [writing-mode:vertical-rl] z-10">
                <span>still skeptism</span>
                <span class="h-8 w-[1px] bg-slate-400"></span>
            </div>
        </main>

        <SiteFooter />
    </div>
</template>
