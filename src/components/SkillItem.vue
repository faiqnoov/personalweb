<template>
  <div class="flex flex-col items-center group hover:bg-white hover:bg-opacity-5 h-fit w-fit p-4 rounded">
    <img :src="src" class="w-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform"/>
    <p class="mt-2 text-transparent group-hover:text-slate-200"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    src: String,
  },
}
</script>