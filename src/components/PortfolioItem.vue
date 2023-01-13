<template>
  <div class="bg-white bg-opacity-5 h-fit p-4 rounded text-center">
    <img :src="src" alt="img" class="rounded">
    <!-- <img src="../assets/img/project1.png" alt="porto image" class="rounded"> -->
    <p class="text-lg font-semibold text-white mt-7 mb-4"><slot name="title"></slot></p>
    <p class="text-xs font-semibold text-slate-400"><slot name="desc"></slot></p>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: ['src']
}
</script>