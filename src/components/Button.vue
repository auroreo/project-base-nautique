<script setup>
const props = defineProps(['onclick', 'text', 'type'])
</script>

<template>
  <button :type="props.type ?? 'button'" @click="props.onclick">{{ props.text }}</button>
</template>
