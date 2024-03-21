<script setup>
    import InputText from './InputText.vue'
    import InputCheckbox from './InputCheckbox.vue'
    import Button from './Button.vue'

const props = defineProps(['inputs'])
</script>

<template>
    <div v-for="(item, index) in props.inputs" :key="index">
        <InputCheckbox :input="item" v-if="item.type == 'checkbox'" />
        <InputText :input="item" v-else />
    </div>
    <div>
        <Button />  
    </div>
</template> 