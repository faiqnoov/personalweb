<template>
  <nav class="flex bg-bgcolor items-center justify-between px-4 min-h-[100px] relative">
    <div class="">
      <router-link to="/" class="px-4 py-2 bg-slate-300 font-bold rounded animate-pulse">F</router-link>
      <!-- <span class="text-white">{{ size }}</span> -->
    </div>
    <div class="flex items-center">
      <button type="button" class="block text-slate-300 md:hidden" @click="isOpen = !isOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-if="!isOpen">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-else>
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div :class="{ hidden: !isOpen }" class="absolute top-full right-4 p-3 bg-white rounded flex flex-col gap-2 text-center font-medium md:static md:flex-row md:items-center md:gap-10 md:bg-transparent z-50">
        <router-link to="/" class="text-slate-900 rounded py-2 px-4 hover:bg-slate-100 md:text-slate-300 md:hover:text-slate-900">Overview</router-link>
        <router-link to="/skills" class="text-slate-900 rounded py-2 px-4 hover:bg-slate-100 md:text-slate-300 md:hover:text-slate-900">Skills</router-link>
        <router-link to="/portfolio" class="text-slate-900 rounded py-2 px-4 hover:bg-slate-100 md:text-slate-300 md:hover:text-slate-900">Portfolio</router-link>
        <router-link to="/contact" class="text-slate-900 rounded py-2 px-4 hover:bg-slate-100 md:text-slate-300 md:hover:text-slate-900">Contact</router-link>
        <router-link to="" class="px-8 py-3 bg-myGreen text-white rounded">Have a Project?</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      size: window.innerWidth
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
    // this.myEventHandler;
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      this.size = window.innerWidth;
      if(window.innerWidth < 768) {
        this.isOpen = false;
      }
      if(window.innerWidth >= 768) {
        this.isOpen = true;
      }
    }
  }
}
</script>