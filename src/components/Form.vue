<script setup>
    import InputText from './InputText.vue'
    import InputCheckbox from './InputCheckbox.vue'
    import Button from './Button.vue'
import { useRoute } from 'vue-router'

const props = defineProps(['inputs'])

const routeName = useRoute().name;
</script>

<template>
    <div v-for="(item, index) in props.inputs" :key="index" :class="[item.type == 'checkbox' ? 'type-checkbox' : 'type-text']">
        <InputCheckbox :input="item" v-if="item.type == 'checkbox'" />
        <InputText :input="item" v-else />
    </div>
    <p v-if="routeName != 'individual'">En remplissant ce document, vous renoncez à souscrire une assurance individuelle corporelle complémentaire de 8 euros. <br> Si vous souhaitez y adhérer, veuillez vous rendre à l'accueil.</p>
    <p>L’association Loeuilly kayak décline toute responsabilité en cas de perte/vol de vos affaires personnelles.</p>
    <div>
        <Button />  
    </div>
</template> 