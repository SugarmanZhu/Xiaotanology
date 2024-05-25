<template>
    <div class="relative overflow-clip m-2 rounded-md aspect-square grid content-end space-y-4 transition-shadow duration-500 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-600/50">
      <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-start w-full h-full bg-white">
        <NuxtImg format="webp" class="w-auto h-full" :src="product.image || '/loading.webp'" :alt="product.title" loading="lazy" />
        <NuxtImg format="webp" class="w=auto h-full" :src="product.image || '/loading.webp'" :alt="product.title" loading="lazy" />
        <NuxtImg format="webp" class="w-auto h-full" :src="product.image || '/loading.webp'" :alt="product.title" loading="lazy" />
      </div>

      <div class="backdrop-blur-md backdrop-opacity-90 backdrop-brightness-[.3] p-4 space-y-4 rounded-b-md">
        <h2 class="text-lg lg:text-2xl font-bold text-balance text-light text-balance capitalize">{{ category }}</h2>
        <NuxtLink :to="`/products/${category}`" class="p-2 bg-light text-dark hover:bg-light-200 w-fit rounded-md inline-block border-2 capitalize">Explore {{ category }}</NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>  
  const props = defineProps({
    category: String // Assuming category is a string
    })

    const product = ref({ image: '', title:'', description: '' })

onMounted(async () => {
  // Make sure to handle the case when the category prop might not be provided or is null.
  if (props.category) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(props.category)}?limit=1`)
    const data = await response.json()
    if (data && data.length > 0) {
      product.value = data[0]
    }
  }
})  
</script>
  