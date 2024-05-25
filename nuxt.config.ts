// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  app: {
    head: {
      title: 'Xiaotanology',
      meta: [
        { name: 'decscription', content: 'Xiaotanology' }
      ]
    }
  },
  runtimeConfig: {
  }
})
