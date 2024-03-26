<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <span>BASE NAUTIQUE DE LOEUILLY</span>
      <h1>NOS FORMULES</h1>
    </div>
    <nav>
      <RouterLink to="/individual">
        <img src="../assets/img/illu-home-indiv.png" alt="" />
        <h2>INDIVIDUEL</h2>
      </RouterLink>
      <RouterLink to="/family">
        <img src="../assets/img/illu-home-family.png" alt="" />
        <h2>FAMILLE</h2>
      </RouterLink>
      <RouterLink to="/group">
        <img src="../assets/img/illu-home-group.png" alt="" />
        <h2>GROUPE</h2>
      </RouterLink>
      <RouterLink to="/dashboard">
        <h2>Dashboard</h2>
      </RouterLink>
    </nav>
  </header>
</template>
