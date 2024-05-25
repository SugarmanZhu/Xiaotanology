<template>
    <div class="grid grid-cols-1 min-h-dvh content-center bg-light dark:bg-dark text-gray-600 text-center space-y-6 place-content-center">
        <h1 class="text-9xl font-bold">{{ error.statusCode }}</h1>
        <p class="text-4xl">{{ error.message }}</p>
        <NuxtLink to="/" class="mx-auto w-fit text-dark-200 dark:text-light-200 border-2 py-4 px-8 border-slate-800 hover:bg-light-200 dark:hover:bg-dark-200">Return to Homepage</NuxtLink>
    </div>
</template>

<script setup>
defineProps(['error']);
</script>

<style>
/* Additional styling can go here if needed */
</style>
