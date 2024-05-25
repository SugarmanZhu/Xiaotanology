<template>
    <div class="w-11/12 sm:w-5/6 mx-auto">
        <div class="max-w-4xl mx-auto px-4">
            <h1 class="text-3xl font-bold text-center mb-12">Our Products</h1>
        </div>
    

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="isLoading">
            <Loading
                content = "Loading..."
            />
          </div>
        <div v-else>
          <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
            <ProductCard
              v-for="product in products"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    useHead({
        title: 'Our Products - Xiaotanology',
        meta: [
            {
                name: 'description',
                content: 'We offer a variety of high-quality products.'
            }
        ]
    });

    const isLoading = ref(true);

    const { data: products } = await useFetch('https://fakestoreapi.com/products/');

    if (!products.value) {
        throw createError({statusCode: 404, statusMessage: 'Product Not Found', fatal: true});
    }

    isLoading.value = false;
  </script>
  