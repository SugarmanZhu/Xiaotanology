<template>
  <div class="relative bg-white overflow-clip m-2 rounded-md aspect-square grid content-end space-y-4 transition-shadow duration-500 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-600/50">
    <NuxtImg format="webp" class="absolute top-0 w-full" :src="product.image" :alt="product.title" loading="lazy" />
    <div class="backdrop-blur-md backdrop-opacity-90 backdrop-brightness-[.3] p-4 space-y-4 rounded-b-md">
      <h2 class="text-lg lg:text-2xl font-bold text-balance text-gray-50 text-balance line-clamp-3 text-pretty">{{ product.title }}</h2>
      <p class="text-pretty text-gray-50 line-clamp-3">{{ product.description }}</p>
      <NuxtLink :to="`/products/${encodeURIComponent(product.category)}/${encodeURIComponent(product.title)}`" class="p-2 bg-gray-50 hover:bg-gray-200 w-fit rounded-md inline-block border-2 text-gray-900">Learn More</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object
})
</script>
