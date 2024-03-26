<script setup>
const props = defineProps(['input'])
</script>

<template>
  <div>
    <label :for="props.input.name" class="label-text"> {{ props.input.label }} </label>
    <span
      class="red-required"
      v-if="
        props.input.label === 'Nom' ||
        props.input.label === 'Prénom' ||
        props.input.label === 'Nom du groupe'
      "
      >*</span
    >
  </div>
  <input
    :type="props.input.type"
    :name="props.input.name"
    :id="props.input.id"
    class="input-text"
  />
</template>
