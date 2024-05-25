<template>
  <div>
    <div class="max-w-4xl mx-auto px-4 w-5/6">
      <h1 class="text-3xl font-bold text-center mb-12">About Us</h1>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Company Overview</h2>
        <p class="text-dark-200 dark:text-light-200">
          We are a company dedicated to providing high-quality products and services. Since our establishment, we have always adhered to a user-first approach, continuously innovating to offer better experiences and solutions to our users.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
        <p class="text-dark-200 dark:text-light-200">
          Our mission is to make the world a better place through our products and services. We believe that through continuous effort and pursuit, we can achieve this goal.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Team Members</h2>
        <div v-if="isLoading">
          <Loading content="Loading..." />
        </div>
        <div v-else>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="p in people" :key="p.name">
              <!-- Team Member -->
              <MemberCard :person="p" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
  
<script setup>
useHead({
  title: 'About Us - Xiaotanology',
  meta: [
    {
      name: 'description',
      content: 'About our company'
    }
  ]
});

const positions = ['Operations Director', 'Senior Software Engineer', 'Sales Manager', 'HR Manager', 'Product Manager', 'Customer Support Specialist'];

const isLoading = ref(true);

const people = ref([]);

// Assume `useFetch` is a function that returns a Promise
const fetchPeople = async () => {
  for (const position of positions) {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    // Ensure you are referencing the correct properties of the first result
    if (data.results.length > 0) {
      const { name, picture } = data.results[0];
      people.value.push({
        name: name.first + ' ' + name.last,
        image: picture.large, // Assuming you want the large picture
        position
      });
    }
  }
  isLoading.value = false;
};

onMounted(fetchPeople);
</script>

<style scoped>
/* Custom styles if needed */
</style>