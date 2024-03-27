<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.replace('/')
  }, 5000)
})
</script>
<template>
  <main class="merci">
    <h1 class="titre_merci">
      Merci, et bonne<br />
      Navigation !
    </h1>
  </main>
</template>
