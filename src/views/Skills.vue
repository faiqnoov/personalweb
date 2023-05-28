<template>
  <div class="">
    <h1 class="text-[40px] font-bold text-white mb-12">Skills</h1>

    <h2 class="text-xl text-slate-300 text-center mb-4">Web Basic</h2>
    <div class="flex justify-center gap-5 mb-4">
      <SkillItem :src="iconPreUrl + 'html5/html5-plain.svg'">HTML</SkillItem>
      <SkillItem :src="iconPreUrl + 'css3/css3-plain.svg'">CSS</SkillItem>
    </div>

    <h2 class="text-xl text-slate-300 text-center mb-4">Programming Languages</h2>
    <div class="flex justify-center gap-5 mb-4">
      <SkillItem :src="iconPreUrl + 'javascript/javascript-plain.svg'">JavaScript</SkillItem>
      <SkillItem :src="iconPreUrl + 'php/php-plain.svg'">PHP</SkillItem>
      <SkillItem :src="iconPreUrl + 'java/java-original.svg'">Java</SkillItem>
    </div>

    <h2 class="text-xl text-slate-300 text-center mb-4">DBMS</h2>
    <div class="flex justify-center gap-5 mb-4">
      <SkillItem :src="iconPreUrl + 'mysql/mysql-plain.svg'">MySQL</SkillItem>
      <SkillItem :src="iconPreUrl + 'postgresql/postgresql-plain.svg'">PostgreSQL</SkillItem>
    </div>

    <h2 class="text-xl text-slate-300 text-center mb-4">Framework/Library</h2>
    <div class="flex justify-center gap-5 mb-4">
      <SkillItem :src="iconPreUrl + 'vuejs/vuejs-original.svg'">Vue.js</SkillItem>
      <SkillItem :src="iconPreUrl + 'tailwindcss/tailwindcss-plain.svg'">Tailwind CSS</SkillItem>
      <SkillItem :src="iconPreUrl + 'laravel/laravel-plain.svg'">Laravel</SkillItem>
    </div>

    <h2 class="text-xl text-slate-300 text-center mb-4">Others</h2>
    <div class="flex justify-center gap-5 mb-4">
      <SkillItem :src="iconPreUrl + 'firebase/firebase-plain.svg'">Firebase</SkillItem>
      <SkillItem :src="iconPreUrl + 'git/git-plain.svg'">Git</SkillItem>
      <SkillItem :src="iconPreUrl + 'nodejs/nodejs-plain.svg'">Node.js</SkillItem>
      <SkillItem :src="iconPreUrl + 'figma/figma-original.svg'">Figma</SkillItem>
      <SkillItem :src="iconPreUrl + 'googlecloud/googlecloud-original.svg'">Google Cloud</SkillItem>
    </div>

    <!-- 
    web Basic - html,css
    PL - js, php, java, c
    DBMS - mysql, postgre
    Framework/Library - vue, tailwind, laravel
    Design Tool - figma
    Others - firebase, git, node
    -->


  </div>
</template>

<script>
import SkillItem from '../components/SkillItem.vue'

export default {
  components: { SkillItem },
  data() {
    return {
      iconPreUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'
    }
  }
}
</script>