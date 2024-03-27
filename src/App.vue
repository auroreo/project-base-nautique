<script setup>
import { onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
let timer = 300000 /*5min*/
const router = useRouter()
const resetTimer = () => {
  setTimeout(() => {
    router.replace('veille')
  }, timer)
}
onMounted(() => {
  document.addEventListener('click', () => {
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
