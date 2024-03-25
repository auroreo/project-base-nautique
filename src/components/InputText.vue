<script setup>

const props = defineProps(['input'])

</script>

<template>

<label :for="props.input.name" class="label-text"> {{ props.input.label }} </label>
<input :type="props.input.type" :name="props.input.name" :id="props.input.id" class="input-text">

</template>