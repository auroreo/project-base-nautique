<script setup>
import { onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import Home from './views/Home.vue'
let timer=300000
const router = useRouter()
const resetTimer = () =>{
  setTimeout(()=>{
    router.replace('veille')
  },timer)
}
onMounted(()=>{

  document.addEventListener('click',()=>{
    timer = 300000
    resetTimer()
  })
})
</script>

<template>
  <RouterView />
</template>

<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
