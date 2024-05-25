<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col lg:flex-row items-center gap-8">
      <div :class="{ 'lg:order-last': reverseOrder }" class="w-full lg:w-1/2 shadow-2xl bg-white shadow-gray-400/20">
        <NuxtImg class="m-auto w-full" :src="product.image" :alt="product.title" />
      </div>
      <div class="text-center lg:text-left lg:w-1/2 space-y-4">
        <h2 class="text-2xl font-bold text-balance">{{ product.title }}</h2>
        <p class="capitalize">Category: {{ product.category }}</p>
        <p class="capitalize">Rating: {{ product.rating.rate }} / 5 ({{ product.rating.count }} Reviews)</p>
        <p>Price: {{ product.price }}</p>
        <p class="text-pretty">{{ product.description }}</p>
      </div>
    </div>
    
    <!-- <div class="max-w-4xl mx-auto px-4 py-8">
      <h4 class="text-xl font-bold text-center mt-8 mb-4">产品描述</h4>
      <ul class="space-y-4 text-lg text-dark-200 dark:text-light-200">
          <li><span class="font-semibold">型号：</span>XWZ-2024</li>
          <li><span class="font-semibold">颜色：</span>炫酷黑 / 纯净白</li>
          <li>
              <span class="font-semibold">特点：</span>
              <ul class="list-disc pl-8">
                  <li>高清音质，带给您无与伦比的音乐体验。</li>
                  <li>长达24小时的续航能力，满足您全天候的听音乐需求。</li>
                  <li>快速充电功能，10分钟充电可提供4小时使用时间。</li>
                  <li>IPX7级防水，运动出汗或小雨中也可安心使用。</li>
                  <li>智能触控操作，轻松控制播放、暂停、接听电话等功能。</li>
              </ul>
          </li>
          <li><span class="font-semibold">适用范围：</span>运动健身、日常通勤、游戏娱乐、在线学习等。</li>
          <li><span class="font-semibold">建议零售价：</span>¥599.00</li>
          <li><span class="font-semibold">促销价：</span>¥499.00 (限时优惠)</li>
      </ul>
      <h4 class="text-xl font-bold text-center mt-8 mb-4">包装清单</h4>
      <ul class="space-y-2 text-lg text-dark-200 dark:text-light-200">
          <li>超级无线耳机 * 1</li>
          <li>充电盒 * 1</li>
          <li>USB-C充电线 * 1</li>
          <li>不同尺寸耳塞 * 3对（S/M/L）</li>
          <li>用户手册 * 1</li>
      </ul>
      <h4 class="text-xl font-bold text-center mt-8 mb-4">售后服务</h4>
      <ul class="space-y-2 text-lg text-dark-200 dark:text-light-200">
          <li>产品享受两年质保服务。</li>
          <li>7天无理由退货，15天免费换货。</li>
          <li>24小时在线客服支持。</li>
      </ul>
  </div> -->

    <div>
      <h4 class="text-xl font-bold text-center my-8">Related Products</h4>
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div v-for="p in products.filter(p => p.title !== product.title).slice(0, 3)">
          <ProductCard
            :product="p"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps({
      product: Object
    })

    const { data: products } = await useFetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(props.product.category)}?limit=4`);
</script>
