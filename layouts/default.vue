<template>
    <div class="flex flex-col min-h-screen space-y-4 bg-light dark:bg-dark text-dark dark:text-light">
      <header>
        <nav class="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between w-11/12 md:w-5/6">
            <div class="flex-1 flex justify-start">
                <!-- Hamburger Icon for Small Screens -->
                <div class="lg:hidden flex justify-end">
                  <button @click="toggleMenu($event)" class="p-4">
                      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                  </button>
                </div>

                <!-- Dropdown Side Menu -->
                <transition name="menu-slide">
                  <div v-if="isMenuOpen" ref="menu" class="flex flex-col lg:hidden bg-zinc-100 dark:bg-zinc-900 shadow-lg shadow-gray-900/30 absolute top-0 left-0 h-dvh z-50 w-fit lg:w-2/5 min-w-fit py-8 px-10 md:px-20">
                      <button @click="toggleMenu($event)" class="p-4 w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <div class="flex flex-col duration-500">
                          <NuxtLink v-for="(item, index) in menuItems" :key="index" @click="toggleMenu($event)" :to="item.path" class="menu-item hover:text-blue-700 p-4 w-fit text-dark dark:text-light">{{ item.name }}</NuxtLink>
                          <DarkModeButton class="mt-4"/>
                      </div>
                  </div>
              </transition>

                <!-- Original Links for Larger Screens -->
                <div class="hidden lg:flex flex-1 justify-start space-x-8">
                    <NuxtLink v-for="(item, index) in menuItems" :key="index" @click="toggleMenu($event)" :to="item.path" class="hover:text-blue-700 underline-animation text-dark dark:text-light">{{ item.name }}</NuxtLink>
                </div>
            </div>

            <div class="sm:flex-none">
                Xiaotanology
            </div>

            <div class="flex-1 flex justify-end items-center space-x-8">
                <NuxtLink to="/contact" class="h-fit sm:border-2 p-4 border-slate-800 hover:bg-gray-200/50 dark:border-slate-200 dark:hover:bg-gray-600/50">Contact<span class="hidden sm:inline"> Us</span></NuxtLink>
                <DarkModeButton class="hidden lg:block" />
            </div>
        </nav>
      </header>
  
      <div class="flex-grow bg-light text-dark dark:bg-dark dark:text-light">
        <slot />
      </div>
  
      <footer class="text-center text-xs w-full text-dark dark:text-light">
        <div class="border-t-2 w-5/6 mx-auto p-4 border-light-200 dark:border-dark-200">
            <p>© Copyright Xiaotanology {{currentYear}}</p>
            <div class="mt-2 flex space-x-4 justify-center">
                <NuxtLink to="/contact" class="hover:text-blue-700">Contact Us</NuxtLink>
                <NuxtLink to="/privacy" class="hover:text-blue-700">Privacy Policy</NuxtLink>
                <NuxtLink to="/terms" class="hover:text-blue-700">Terms of Use</NuxtLink>
            </div>
        </div>
      </footer>
    </div>
    <SpeedInsights />
  </template>
  
  <script setup>
    import { SpeedInsights } from '@vercel/speed-insights/vue';
  </script>

  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
        isMenuOpen: false,
        menuItems: [
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          { name: 'Products', path: '/products' },
          { name: 'Support', path: '/support' },
        ],
      };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        handleClickOutside(event) {
            if (this.isMenuOpen && this.$refs.menu && !this.$refs.menu.contains(event.target)) {
            this.isMenuOpen = false;
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside, true);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside, true);
    },
  };
  </script>

<style scoped>
.underline-animation::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease-in-out;
  margin: auto;
}

.underline-animation:hover::after {
  width: 100%;
}

.menu-slide-enter-active, .menu-slide-leave-active {
  @apply transition-transform duration-300 ease-in-out;
}
.menu-slide-enter-from, .menu-slide-leave-to {
  @apply -translate-x-full;
}
.menu-slide-enter-to, .menu-slide-leave-from {
  @apply translate-x-0;
}
</style>
