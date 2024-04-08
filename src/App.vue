<script setup>
import { onMounted, watch, ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
let timer = 300000 /*5min*/
const router = useRouter()
let timeout
const resetTimer = () => {
  timeout = setTimeout(() => {
    router.replace('/')
  }, timer)
}
const firstTouch = ref(false)
const secondTouch = ref(false)
onMounted(() => {
  document.addEventListener('click', () => {
    timer = 300000
    clearTimeout(timeout)
    resetTimer()
  })
})

window.onpointerdown = (e) => {
  if (e.clientX < 200 && e.clientY < 200) {
    firstTouch.value = true
  }
}
window.onpointerup = (e) => {
  if (e.clientX < 200 && e.clientY < 200) {
    firstTouch.value = false
  }
}
document.onpointerdown = (e) => {
  if (e.clientX > window.screen.width - 200 && e.clientY > window.screen.height - 200) {
    secondTouch.value = true
  }
}
document.onpointerup = (e) => {
  if (e.clientX > window.screen.width - 200 && e.clientY > window.screen.height - 200) {
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
  } else {
    count = 0
  }
})
</script>

<template>
  <RouterView />
</template>
