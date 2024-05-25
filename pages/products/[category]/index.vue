<template>
    <div class="w-5/6 mx-auto">
        <div class="max-w-4xl mx-auto px-4">
            <h1 class="text-3xl font-bold text-center mb-12 text-balance capitalize">{{ category }}</h1>
        </div>
    
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-32">
            <div v-for="(p, index) in products" :key="p.id">
                <ProductHighlight
                    :product="p"
                    :reverseOrder="index % 2 !== 0"
                />
            </div>
        </div>
      </div>
    </div>
  </template>


<script setup>
    const { category } = useRoute().params
    const { data: products } = await useFetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);

    if (!products?.value?.length) {
        throw createError({statusCode: 404, statusMessage: 'Category Not Found', fatal: true});
    }

    useHead({
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} - Xiaotanology`,
        meta: [
            {
                name: 'description',
                content: `We offer a variety of high-quality ${category} products.`
            }
        ]
    });
</script>