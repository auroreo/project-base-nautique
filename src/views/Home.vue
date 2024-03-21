<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
      <nav>
        <RouterLink to="/individual">Individuel</RouterLink>
        <RouterLink to="/group">Groupe</RouterLink>
        <RouterLink to="/family">Famille</RouterLink>
      </nav>
  </header>

</template>