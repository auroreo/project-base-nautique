<script setup>
import InputText from './InputText.vue'
import InputCheckbox from './InputCheckbox.vue'
import Button from './Button.vue'

const props = defineProps(['inputs', 'addperson', 'deleteperson'])
</script>

<template>
  <div v-for="(item, index) in props.inputs" :key="index">
    <InputCheckbox :input="item" v-if="item.type == 'checkbox'" />
    <Button
      :text="item.label"
      v-else-if="item.type == 'button' && item.id == 'addperson'"
      :onclick="props.addperson"
    />
    <InputText :input="item" v-else-if="item.type == 'text'" />
    <Button
      :text="item.label"
      v-else-if="item.type == 'button' && item.id == 'deleteperson'"
      :onclick="props.deleteperson"
    />
  </div>
  <div>
    <Button text="Valider" />
  </div>
</template>
