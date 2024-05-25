<template>
  <li class="bg-white dark:bg-dark-200 shadow overflow-hidden rounded-md p-4">
    <p class="font-semibold">{{question}}</p>
    <p class="font-light">{{answer}}</p>
  </li>
</template>
  
  <script setup>  
  const props = defineProps({
    question: String,
    answer: String
  })
  </script>
  