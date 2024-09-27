<template>
    <div class="relative overflow-hidden aspect-video w-full 2xl:aspect-[16/5] grid content-center">
        <NuxtImg src="/cover.webp" class="blur-sm w-full scale-105" alt="Background Cover Image" />
        <div class="absolute inset-0 flex justify-center items-center">
            <div class="relative w-5/6 m-auto drop-shadow-sm grid content-center aspect-video 2xl:aspect-[16/5] overflow-hidden">
                <NuxtImg src="/cover.webp" class="relative w-full" alt="Foreground Image" />
                <div class="absolute bottom-0 inset-x-0 text-left p-4 sm:p-6 md:p-8 backdrop-blur-md backdrop-opacity-90 backdrop-brightness-50 text-gray-50">
                    <h1 class="text-lg sm:text-2xl md:text-4xl font-bold">Welcome to Xiaotanology.</h1>
                    <p class="text-sm mt-2 md:mt-3 hidden sm:inline-block">We are committed to providing high-quality products and services to meet your needs.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col justify-center items-center w-5/6 m-auto space-y-8 md:space-y-12 lg:space-y-16">
        <div class="w-4/5 text-center space-y-8 text-pretty">
            <h1 class="text-4xl text-center my-8">Xiaotanology</h1>
            <p class="text-balance">Your One-Stop Shop for Electronics, Jewelry, and Fashion!</p>
            <p class="text-balance">Welcome to Xiaotanology, where we offer a wide range of high-quality products to meet all your shopping needs.</p>
            <NuxtLink to="/about" class="h-fit border-2 p-4 block w-fit mx-auto border-slate-800 dark:border-slate-200 hover:bg-gray-600/50 dark:hover:bg-gray-200/50">About Us</NuxtLink>
        </div>

        <div v-if="isCategoryLoading">
            <Loading
                content = "Loading..."
            />
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 w-full">
            <div v-for="c in categories">
                <CategoryCard
                    :category="c"
                />
            </div>
        </div>

        <div v-if="isHighlightLoading">
            <Loading
                content = "Loading..."
            />
        </div>
        <div v-else class="grid grid-cols-1 2xl:grid-cols-2 gap-4">
            <div v-for="p in products">
                <ProductCardWide
                    :product="p"
                />
            </div>
        </div>
    </div>
</template>
  
<script setup>
    useHead({
        title: 'Home - Xiaotanology',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Welcome to Xiaotanology, where we offer a wide range of high-quality products to meet all your shopping needs.'
            }
        ]
    });

    const isCategoryLoading = ref(true);
    const isHighlightLoading = ref(true);

    const { data: categories } = await useFetch('https://fakestoreapi.com/products/categories');
    isCategoryLoading.value = false;

    const { data: products } = await useFetch('https://fakestoreapi.com/products?limit=2');
    isHighlightLoading.value = false;
</script>

<style>
</style>
