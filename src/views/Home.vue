<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="head-title">
      <span>BASE NAUTIQUE DE LOEUILLY</span>
      <h1>NOS FORMULES</h1>
    </div>
    <nav>
      <RouterLink class="choices" to="/individual">
        <div>
          <img src="../assets/img/illu-home-indiv.png" alt="" />
        </div>
        <h2>INDIVIDUEL</h2>
      </RouterLink>
      <RouterLink class="choices" to="/family">
        <div>
          <img src="../assets/img/illu-home-family.png" alt="" />
        </div>
        <h2>FAMILLE</h2>
      </RouterLink>
      <RouterLink class="choices" to="/group">
        <div>
          <img src="../assets/img/illu-home-group.png" alt="" />
        </div>
        <h2>GROUPE</h2>
      </RouterLink>
    </nav>
  </header>
</template>
