<script setup>
const props = defineProps(['input'])
</script>

<template>
  <input
    :type="props.input.type"
    :name="props.input.name"
    :id="props.input.id"
    class="input-checkbox"
  />
  <label :for="props.input.name" class="label-checkbox"> {{ props.input.label }} </label>
</template>
