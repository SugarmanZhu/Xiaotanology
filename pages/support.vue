<template>
  <div>
    <div class="max-w-4xl mx-auto px-4 w-5/6">
      <h1 class="text-3xl font-bold text-center mb-12">Support Center</h1>
      
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <ul class="space-y-3">
          <FAQCard
            question="How should I contact customer support?"
            answer="You can use the contact form below to send us a message directly, or reach out to us via email."
          />
          <FAQCard
            question="What delivery options are available?"
            answer="We offer various delivery options, including standard and expedited shipping. Please check the specific delivery methods and fees when placing your order."
          />
          <FAQCard
            question="How can I track my order?"
            answer="After shipping, you will receive a notification email with a tracking number. You can use this tracking number to track your order on the courier's website."
          />
          <FAQCard
            question="What payment methods are accepted?"
            answer="We support various payment methods, including but not limited to credit cards, debit cards, Alipay, WeChat Pay, etc."
          />
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <form class="bg-white dark:bg-dark-200 shadow overflow-hidden rounded-md p-4">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium">Name</label>
            <input type="text" id="name" name="name" class="mt-1 p-2 w-full border border-gray-300/50 rounded-md bg-white dark:bg-dark-200" placeholder="Your Name">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" class="mt-1 p-2 w-full border border-gray-300/50 rounded-md bg-white dark:bg-dark-200" placeholder="Your Email">
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows="4" class="mt-1 p-2 w-full border border-gray-300/50 rounded-md bg-white dark:bg-dark-200" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Support Center - Xiaotanology',
  meta: [
    {
      name: 'description',
      content: 'Support center page'
    }
  ]
});
</script>

<style scoped>
/* Custom styles if needed */
</style>
