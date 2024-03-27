<script setup>
import { onMounted, watch, ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
let timer = 300000 /*5min*/
const router = useRouter()
const resetTimer = () => {
  setTimeout(() => {
    router.replace('/')
  }, timer)
}
const firstTouch = ref(false)
const secondTouch = ref(false)
onMounted(() => {
  document.addEventListener('click', () => {
    timer = 300000
    resetTimer()
  })
})

window.onpointerdown = (e) => {
  if (e.clientX < 100 && e.clientY < 100) {
    firstTouch.value = true
  }
}
window.onpointerup = (e) => {
  if (e.clientX < 100 && e.clientY < 100) {
    firstTouch.value = false
  }
}
document.onpointerdown = (e) => {
  if (e.clientX > window.screen.width - 100 && e.clientY > window.screen.height - 100) {
    secondTouch.value = true
  }
}
document.onpointerup = (e) => {
  if (e.clientX > window.screen.width - 100 && e.clientY > window.screen.height - 100) {
    secondTouch.value = false
  }
}
watch([firstTouch, secondTouch], ([newA, newB], [prevA, prevB]) => {
  let count = 0
  if (newA && newB) {
    setInterval(() => {
      count += 1000
      if (count === 3000) {
        router.replace('dashboard')
      }
    }, 1000)
  }
})
</script>

<template>
  <div id="test"></div>
  <RouterView />
  <div id="test2"></div>
</template>

<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
