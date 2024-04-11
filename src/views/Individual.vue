<script setup>
// *** IMPORTS ***
import Form from '../components/Form.vue'
import { ref } from 'vue'

// *** DATAS ***
// ref permet de créer une variable qui pourra être utilisée dans d'autres components en tant que props
const inputs = ref([
  {
    label: 'Nom',
    type: 'text',
    name: 'lastname',
    id: 'lastname',
    placeholder: 'Votre nom'
  },
  {
    label: 'Prénom',
    type: 'text',
    name: 'firstname',
    id: 'firstname',
    placeholder: 'Votre prénom'
  },
  {
    label: 'Adresse mail',
    type: 'email',
    name: 'mail',
    id: 'mail',
    placeholder: 'Votre email'
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
    name: 'droit-image',
    id: 'droit-image'
  }
])
</script>

<template>
  <main id="individual">
    <section class="illu">
      <img src="../assets/img/illu-indiv.png" alt="" />
    </section>
    <section id="style-form">
      <div id="head">
        <h2>INDIVIDUEL</h2>
        <RouterLink to="/home">
          <img src="../assets/img/cross-back.svg" alt="" />
        </RouterLink>
      </div>
      <Form :inputs="inputs" />
    </section>
  </main>
</template>
