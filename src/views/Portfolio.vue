<template>
  <div class="lg:flex gap-5">
    <!-- kiri -->
    <div class="mb-10 lg:w-4/12">
      <h1 class="text-[40px] font-bold text-white mb-12">Projects</h1>
      <p class="text-lg text-slate-300">On this page you will find some of the projects I've worked on, which consist of:</p>
      <ul class="list-disc pl-6 text-lg text-slate-300 mt-6">
        <li>Web Application</li>
        <li>API</li>
        <li>Slicing Practice</li>
      </ul>
    </div>

    <!-- kanan -->
    <div class="lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-5">

      <router-link :to="{ name: 'PortfolioDetail', params: { id: portfolio.id }}" v-for="portfolio in portfolios" :key="portfolio.id" class="block bg-white bg-opacity-5 h-fit p-4 rounded text-center w-full">
        <img v-if="portfolio.thumbnail" :src="portfolio.thumbnail" alt="thumbnail" class="rounded mx-auto">
        <img v-else src="../assets/img/project1.png" alt="thumbnail" class="rounded mx-auto">
        <p class="text-lg font-semibold text-white mt-5 mb-2">{{ portfolio.name }}</p>
        <p class="text-xs font-semibold text-slate-400">{{ portfolio.category }}</p>
      </router-link>

      <!-- <PortfolioItem src="../assets/img/project1.png">
        <template #title>Ini komponen</template>
        <template #desc>Ini deskripsinya</template>
      </PortfolioItem> -->
    </div>
  </div>
</template>

<script>
import PortfolioItem from '../components/PortfolioItem.vue'
import getCollection from '@/composables/getCollections'

export default {
  components: {PortfolioItem},
  setup() {
    const { documents: portfolios } = getCollection('portfolios')

    return { portfolios }
  }
}
</script>