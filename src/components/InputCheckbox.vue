<script setup>
const props = defineProps(['input'])
</script>

<template>
  <input :type="props.input.type" :name="props.input.name" :id="props.input.id" />
  <label :for="props.input.name"> {{ props.input.label }} </label>
</template>
