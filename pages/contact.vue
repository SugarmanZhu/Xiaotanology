<template>
  <div class="flex flex-col justify-center items-center">
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
      <p class="text-lg">Feel free to reach out to us through the following methods.</p>
    </div>

    <div class="max-w-4xl mx-auto bg-white dark:bg-dark-200 rounded-lg overflow-hidden md:flex flex-col-reverse md:flex-row w-5/6 md:w-11/12">
      <div class="md:w-1/2 p-5">
        <h2 class="text-xl font-semibold mb-4">Send a Message</h2>
        <form>
          <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium">Name</label>
            <input type="text" name="name" id="name" placeholder="Your Name" class="w-full p-3 rounded bg-white dark:bg-dark-200 border border-gray-300/50">
          </div>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium">Email</label>
            <input type="email" name="email" id="email" placeholder="Your Email" class="w-full p-3 rounded bg-white dark:bg-dark-200 border border-gray-300/50">
          </div>
          <div class="mb-5">
            <label for="message" class="block mb-2 text-sm font-medium">Message</label>
            <textarea rows="4" name="message" id="message" placeholder="Your Message" class="w-full p-3 rounded bg-white dark:bg-dark-200 border border-gray-300/50"></textarea>
          </div>
          <button type="submit" class="w-full p-3 text-sm font-semibold tracking-wider text-white bg-blue-500 rounded hover:bg-blue-600">Send</button>
        </form>
      </div>
      <div class="md:w-1/2 bg-blue-900/10 p-5">
        <h2 class="text-xl font-semibold mb-4">Contact Information</h2>
        <div class="space-y-3">
          <div>
            <span class="font-bold">Email:</span>
            <p>contact@example.com</p>
          </div>
          <div>
            <span class="font-bold">Phone:</span>
            <p>+00 123 456 7890</p>
          </div>
          <div>
            <span class="font-bold">Address:</span>
            <p>Some Street, Some City, Mars</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact Us - Xiaotanology',
  meta: [
    {
      name: 'description',
      content: 'Contact us page'
    }
  ]
});
</script>

<style scoped>
/* Additional styling as needed */
</style>
