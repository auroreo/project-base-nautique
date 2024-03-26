<script setup>
// *** IMPORTS ***
import { writeData, deleteData, readData } from '../firebase'
import Form from '../components/Form.vue'
import { ref } from 'vue'

// console.log(writeData);
// console.log(deleteData);
// console.log(readData);

// *** DATAS ***
// ref permet de créer une variable qui pourra être utilisée dans d'autres components en tant que props
const inputs = ref([
  {
    label: 'Nom',
    type: 'text',
    name: 'lastname',
    id: 'lastname'
  },
  {
    label: 'Prénom',
    type: 'text',
    name: 'firstname',
    id: 'firstname'
  },
  {
    label: 'Adresse électronique',
    type: 'mail',
    name: 'mail',
    id: 'mail'
  },
  {
    label: 'J’atteste savoir nager 25 mètres et s’immerger.',
    type: 'checkbox',
    name: 'attestation',
    id: 'attestation'
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
      'L’association Loeuilly kayak décline toute responsabilité en cas de perte/vol de vos affaires personnelles.',
    type: 'checkbox',
    name: 'responsability',
    id: 'responsability'
  }
])
</script>

<template>
  <form action="">
    <!-- !!! component formulaire -->
    <Form :inputs="inputs" />
    <!-- récupération de la variable inputs -->
  </form>

  <!-- test croix qui ferme -->
  <RouterLink to="/">X</RouterLink>
</template>
