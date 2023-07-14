<template>
  <div>
    <h1 class="text-xl font-bold text-white mb-1">Portfolio</h1>
    <h2 class="text-[40px] font-bold text-white mb-1">{{ portfolio.name }}</h2>
    <p class="italic mb-8 text-slate-300">{{ portfolio.year }}</p>
    <div>
      <img v-if="portfolio.thumbnail" :src="portfolio.thumbnail" alt="thumbnail image" class="rounded-xl">
      <img v-else src="../assets/img/project1.png" alt="thumbnail image" class="rounded-xl">
    </div>
    <div class="text-slate-300">
      <h2 class="text-2xl mt-4 italic">Description</h2>
      <p>{{ portfolio.description }}</p>
      <h2 class="text-2xl mt-4 italic">Technologies</h2>
      <ul v-if="portfolio.techs" class="list-disc pl-8">
        <li v-for="tech in portfolio.techs" :key="tech">{{ tech }}</li>
      </ul>
      <p v-else>Not Available</p>

      <h2 class="text-2xl mt-4 italic">Repository</h2>
      <a v-if="portfolio.repo_url" :href="portfolio.repo_url" target="_blank">{{ portfolio.repo_url }}</a>
      <p v-else>Not Available</p>

      <h2 class="text-2xl mt-4 italic">Public Link</h2>
      <a v-if="portfolio.public_url" :href="portfolio.public_url" target="_blank">{{ portfolio.public_url }}</a>
      <p v-else>Not Available</p>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import getDoc from '../composables/getDoc'

export default {
  props: ['id'],
  setup() {
    const route = useRoute()

    const { document: portfolio } = getDoc('portfolios', route.params.id)

    return { portfolio }
  }
}

</script>