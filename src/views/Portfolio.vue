<template>
  <div class="lg:flex gap-5">
    <!-- kiri -->
    <div class="mb-10 lg:w-4/12">
      <h1 class="text-[40px] font-bold text-white mb-12">Projects</h1>
      <p class="text-lg text-slate-300">Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya buat, yang terdiri dari:</p>
      <ul class="list-disc pl-6 text-lg text-slate-300 mt-6">
        <li>UI Design</li>
        <li>Web App</li>
        <li>Mobile App</li>
      </ul>
    </div>

    <!-- kanan -->
    <div class="lg:w-8/12 flex flex-wrap gap-5 justify-center">
      <div class="bg-white bg-opacity-5 h-fit p-4 rounded text-center">
        <img src="../assets/img/project1.png" alt="" class="rounded">
        <p class="text-lg font-semibold text-white mt-7 mb-4">Nameera</p>
        <p class="text-xs font-semibold text-slate-400">Web Application</p>
      </div>
      <div class="bg-white bg-opacity-5 h-fit p-4 rounded text-center">
        <img src="../assets/img/project1.png" alt="" class="rounded">
        <p class="text-lg font-semibold text-white mt-7 mb-4">Penslab</p>
        <p class="text-xs font-semibold text-slate-400">Web Application</p>
      </div>
      <div class="bg-white bg-opacity-5 h-fit p-4 rounded text-center">
        <img src="../assets/img/project1.png" alt="" class="rounded">
        <p class="text-lg font-semibold text-white mt-7 mb-4">MovieMaster</p>
        <p class="text-xs font-semibold text-slate-400">Web Application</p>
      </div>
      <div class="bg-white bg-opacity-5 h-fit p-4 rounded text-center">
        <img src="../assets/img/project1.png" alt="" class="rounded">
        <p class="text-lg font-semibold text-white mt-7 mb-4">Buku Tamu</p>
        <p class="text-xs font-semibold text-slate-400">Web Application</p>
      </div>
      <div class="bg-white bg-opacity-5 h-fit p-4 rounded text-center">
        <img src="../assets/img/project1.png" alt="" class="rounded">
        <p class="text-lg font-semibold text-white mt-7 mb-4">Login Page UI Design</p>
        <p class="text-xs font-semibold text-slate-400">UI DESIGN</p>
      </div>
      <!-- <PortfolioItem src="../assets/img/project1.png">
        <template #title>Ini komponen</template>
        <template #desc>Ini deskripsinya</template>
      </PortfolioItem> -->
    </div>
  </div>
</template>

<script>
import PortfolioItem from '../components/PortfolioItem.vue'

export default {
  components: {PortfolioItem},
}
</script>