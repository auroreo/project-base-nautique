<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const navigate = () => {
  router.replace('/home')
}
</script>
<template>
  <main>
    <div class="full_screen_tl" @click="navigate">
      <div class="contour_logo_tl">
        <img src="../assets/logo_pic.png" alt="" class="logo_pic_tl" />
      </div>
      <h1 class="titre_veille_tl">touchez l'écran</h1>
    </div>
  </main>
</template>
