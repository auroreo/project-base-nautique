<script setup>
const props = defineProps(['input'])

console.log(props.input)
</script>

<template>
  <label :for="props.input.name"> {{ props.input.label }} </label
  ><br v-if="props.input.id != 'manager'" />
  <input
    :type="props.input.type"
    :name="props.input.name"
    :id="props.input.id"
    :placeholder="props.input.placeholder"
  />
  <label :for="props.input.name" v-if="props.input.id == 'manager'">
    {{ props.input.label2 }}
  </label>
</template>
