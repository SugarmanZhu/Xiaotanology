<template>
    <div class="w-5/6 mx-auto">
        <div class="max-w-4xl mx-auto px-4">
            <h1 class="hidden sm:block text-3xl font-bold text-center mb-12 text-balance">{{ item }}</h1>
        </div>
    
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDetail
            :product="product"
        />
      </div>
    </div>
  </template>


<script setup>
    const route = useRoute();
    const category = route.params.category;
    const item = route.params.item;
    const { data: products } = await useFetch(`https://fakestoreapi.com/products/category/${category}`);

    let product = null;
    for (const p of products.value) {
        if (p.title === item) {
            product = p;
            break;
        }
    }
    if (!product) {
        throw createError({statusCode: 404, statusMessage: 'Product Not Found', fatal: true});
    }
    
    useHead({
        title: `${product.title} - Xiaotanology`,
        meta: [
            {
                name: 'description',
                content: product.description
            }
        ]
    });
</script>