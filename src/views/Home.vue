<template>
  <div class="">
    <!-- intro -->
    <div class="mt-10 md:w-1/2">
      <h1 class="text-4xl text-white">Hi, my name is</h1>
      <h1 class="text-4xl font-bold text-white mt-2">Muhammad <span class="text-myGreen">Fa'iq</span> Novriadi</h1>
      <p class="text-slate-300 mt-7 text-lg">An Informatics Engineering student who focuses on web development, especially on the Front-End side using some of the latest frameworks such as TailwindCSS, VueJs, and Laravel. I have experienced as a programmerin about a year. Currently I am also interested in learning about Back-end and cloud computing technology. I'mlooking for opportunities to have new experiences and be able to collaborate on real projects with many people tocreate valuable products.</p>
      <router-link to="/portfolio" class="flex items-center font-medium text-white mt-10 mb-16 group">
        See my portfolio
        <span class="inline-block rounded-full bg-slate-600 ml-3 group-hover:translate-x-2 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </router-link>
      <div class="flex gap-10">
        <div>
          <h3 class="text-slate-300 text-xs font-medium">PROJECTS</h3>
          <h4 class="text-white text-2xl font-semibold">10+</h4>
        </div>
        <div>
          <h3 class="text-slate-300 text-xs font-medium">EXPERIENCE</h3>
          <h4 class="text-white text-2xl font-semibold">1+ yr</h4>
        </div>
        <div>
          <h3 class="text-slate-300 text-xs font-medium">NATIONALITY</h3>
          <h4 class="text-white text-2xl font-semibold">IDN</h4>
        </div>
      </div>
    </div>

    <!-- img -->
    <div class="md:w-1/2">
      <!-- <div class="absolute w-40 h-40 bg-myGreen animate-pulse"></div> -->
    </div>
  </div>
</template>