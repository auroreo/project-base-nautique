<script setup>
const props = defineProps(['onclick', 'text'])
</script>

<template>
  <button type="submit" @click.prevent="props.onclick">{{ props.text }}</button>
</template>
