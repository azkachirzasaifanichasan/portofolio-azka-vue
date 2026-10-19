<script setup>
const timeline = [
    {
        period: '2025 — present',
        title: 'On SMK N 1 Bantul',
        description: 'Era masuknya saya ke dunia pendidikan yang jauh berbeda dengan pengalaman sebelumnya. bukan hnya rpl melainkan hingga ke dunia filsafat dangkal dan bahkan teolog. masa dimana pengetahuan bukan diperoleh namun dipertanyakan kebenarannya.',
        active: true,
    },
    {
        period: '2024 — 2025',
        title: 'Masa Kebodohan',
        description: 'Masa dimana kemajuan sempat terhenti akibat percintaan wkwkw.',
        active: false,
    },
    {
        period: '2023 — 2024',
        title: 'Robotics',
        description: 'Pernah mengikuti beberapa lomba robotic seperti maze solving dan line follower. baru menang satu kali awokawk',
        active: false,
    },
]

const techStack = ['Laravel Blade', 'Tailwind CSS', 'PHP', 'JavaScript', 'MySQL']
</script>

<template>
    <div class="lg:col-span-7 flex flex-col items-start z-10 pr-0 lg:pr-8 mr-24">
        <div class="flex items-center gap-2 text-xs tracking-widest font-bold text-slate-500 uppercase mb-6">
            <span class="w-6 h-[2px] bg-slate-400"></span>
            <span>About & Background</span>
        </div>

        <h1 class="dark:text-white text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Bagaimana perjalanku di <span class="text-[#ff2b56]">dunia </span>yang<span class="text-[#ff2b56]"> absurd</span> ini.
        </h1>

        <p class="text-xs md:text-sm text-slate-500 leading-relaxed mb-8 max-w-lg">
            Good outcomes are rarely accidental—they come from patience and iteration. I focus on creating simple, fast, and accessible web experiences with minimal bloat.
        </p>

        <div class="mb-8">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Core Tech Stack</span>
            <div class="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span
                    v-for="tech in techStack"
                    :key="tech"
                    class="bg-slate-200/60 dark:bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-300/50 dark:border-slate-700"
                >
                    {{ tech }}
                </span>
            </div>
        </div>

        <RouterLink to="/work" class="bg-[#ff2b56] hover:bg-[#e02047] text-white text-xs font-bold tracking-widest px-8 py-3 shadow-md transition">
            See My Projects
        </RouterLink>
    </div>

    <div class="lg:col-span-5 relative flex flex-col justify-center pr-12 lg:pr-16 mt-10 lg:mt-0] ml-auto">
        <h3 class="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">Experience Highlights</h3>

        <div class="relative border-l border-slate-300 dark:border-slate-700 ml-2 space-y-8 pl-6">
            <div v-for="item in timeline" :key="item.title" class="relative group">
                <span
                    class="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-[#f4f5f8] dark:ring-slate-900"
                    :class="item.active ? 'bg-[#ff2b56]' : 'bg-slate-300 dark:bg-slate-700'"
                ></span>
                <span class="text-[10px] font-bold tracking-wider uppercase" :class="item.active ? 'text-[#ff2b56]' : 'text-slate-400'">
                    {{ item.period }}
                </span>
                <h4 class="text-base font-bold mt-0.5" :class="item.active ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'">
                    {{ item.title }}
                </h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>
