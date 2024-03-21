<script setup>

const props = defineProps(['input'])

</script>

<template>

<label :for="props.input.name"> {{ props.input.label }} </label>&nbsp
<input :type="props.input.type" :name="props.input.name" :id="props.input.id">

</template>