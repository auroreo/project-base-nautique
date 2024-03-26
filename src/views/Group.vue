
<script setup>
import Form from '../components/Form.vue'
import { onMounted, ref } from 'vue'

const inputs = ref([
  {
    label: 'Nom du groupe',
    type: 'text',
    name: 'groupname',
    id: 'groupname',
    placeholder: 'Kayak team'
  },
  {
    label: 'Adresse électronique (Pas obligatoire)',
    type: 'mail',
    name: 'email',
    id: 'email',
    placeholder: 'mail@kayak.com'
  },
  {
    label: 'Je, soussigné ',
    label2: 'responsable du groupe,',
    type: 'text',
    name: 'manager',
    id: 'manager',
    placeholder: 'Mr, Mme'
  },
  {
    label: 'J’atteste savoir nager 25 mètres et s’immerger.',
    type: 'checkbox',
    name: 'disclaimer',
    id: 'disclaimer'
  },
  {
    label:
      'En pratiquant les activités sur la base nautique, vous nous permettez d’utiliser votre droit à l’image à des fins promotionnelles.',
    type: 'checkbox',
    name: 'img-right',
    id: 'img-right'
  },
  {
    label:
      'L’association Loeuilly kayak décline toutes responsabilité en cas de perte/vole de vos affaires personnelles.',
    type: 'checkbox',
    name: 'responsability',
    id: 'responsability'
  }
])
</script>

<template>
  <form action="">
    <Form :inputs="inputs"></Form>
  </form>
  <RouterLink to="/">X</RouterLink>
</template>
