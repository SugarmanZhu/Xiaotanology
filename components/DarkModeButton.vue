<template>
    <button @click="toggleDarkMode" class="relative lg:absolute lg:right-8 rounded-full w-36 lg:w-12 2xl:w-36 h-12 bg-light-200 dark:bg-dark-200 p-1">
        <div class="flex items-center">
            <div class="transform bg-light dark:bg-dark w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-translate duration-300 translate-x-0 dark:translate-x-24 lg:dark:translate-x-0 2xl:dark:translate-x-24">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-500 block dark:hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-300 hidden dark:block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            </div>
            <span class="absolute left-[3.2rem] ]w-fit text-center text-sm transition-opacity duration-200 opacity-100 dark:opacity-0 lg:opacity-0 lg:dark:opacity-0 2xl:opacity-100 2xl:dark:opacity-0">Light Mode</span>
            <span class="absolute right-[3.2rem] w-fit text-center text-sm transition-opacity duration-200 opacity-0 dark:opacity-100 lg:opacity-0 lg:dark:opacity-0 2xl:opacity-0 2xl:dark:opacity-100">Dark Mode</span>
        </div>
    </button>
</template>

<script>
export default {
    data() {
        return {
            isDark: false,
        };
    },
    methods: {
        toggleDarkMode() {
            this.isDark = !this.isDark;
            this.updateTheme();
            localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
        },
        updateTheme() {
            if (this.isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
        useDarkTheme() {
            const storedTheme = localStorage.getItem('theme');
            this.isDark = storedTheme ? storedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.updateTheme();
        },
    },
    mounted() {
        this.useDarkTheme();
    },
};
</script>
