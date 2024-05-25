<template>
    <div class="relative overflow-clip aspect-square md:aspect-[2/1] grid grid-cols-1 md:grid-cols-2 content-end md:content-center rounded-md m-2 transition-shadow duration-500 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-600/50">
      <NuxtImg format="webp" class="absolute top-0 w-full" :src="product.image" :alt="product.title" loading="lazy" />  
      <div class="md:ml-8 md:mt-0 p-4 rounded-b-md md:rounded-none backdrop-blur-md backdrop-opacity-90 backdrop-brightness-[.3] w-fit space-y-4">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-50 text-balance">{{ product.title }}</h2>
            <p class="text-sm my-2 text-pretty text-gray-50 line-clamp-6">{{product.description}}</p>
            <NuxtLink :to="`/products/${encodeURIComponent(product.category)}/${encodeURIComponent(product.title)}`" class="p-2 bg-gray-50 hover:bg-gray-200 text-dark w-fit rounded-md inline-block border-2">Learn More</NuxtLink>
        </div>
    </div>
  </template>
  
  <script setup>  
  const props = defineProps({
    product: Object
  })
  </script>
  