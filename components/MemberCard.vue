<template>
  <div class="bg-white dark:bg-dark-200 shadow overflow-hidden rounded-lg p-4">
      <NuxtImg format="webp" class="w-32 h-32 rounded-full mx-auto mb-4" :alt="person.name.first" :src="`${person.image}`" loading="lazy" />
      <h3 class="text-lg font-bold text-center">{{ person.name }}</h3>
      <p class="text-sm text-center">{{ person.position }}</p>
  </div>
</template>
  
<script setup>  
  const props = defineProps({
    person: Object
  })
</script>
  