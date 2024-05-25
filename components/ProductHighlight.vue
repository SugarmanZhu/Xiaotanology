<template>
  <div class="flex flex-col lg:flex-row items-center gap-8">
    <div :class="{ 'lg:order-last': reverseOrder }" class="w-full lg:w-1/2 shadow-2xl shadow-gray-600/50 bg-white">
      <NuxtImg class="m-auto w-full" :src="product.image" :alt="product.title" loading="lazy" />
    </div>
    <div class="text-center lg:text-left lg:w-1/2 space-y-4">
      <h2 class="text-2xl font-bold line-clamp-3">{{ product.title }}</h2>
      <p class="text-pretty">{{ product.description }}</p>
      <NuxtLink :to="`/products/${encodeURIComponent(product.category)}/${encodeURIComponent(product.title)}`" class="p-2 bg-light hover:bg-gray-100 w-fit rounded-md inline-block border-2 text-dark">Learn More</NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    product: Object,
    reverseOrder: Boolean
  });
</script>
