<script setup>
import Form from '../components/Form.vue'
import { onMounted, ref } from 'vue'

const inputs = ref([
  {
    label: 'Nom du groupe',
    type: 'text',
    name: 'nom_du_groupe',
    id: 'group_name',
    placeholder: 'Les vachettes'
  },
  {
    label: 'Responsable',
    type: 'text',
    name: 'responsable',
    id: 'resp',
    placeholder: 'Mr, Mme'
  },
  {
    label: 'Adresse mail',
    type: 'email',
    name: 'mail',
    id: 'mail',
    placeholder: 'votre email'
  },
  {
    label: 'J\'atteste que toutes les personnes du groupes savent nager 25 mètres et s’immerger.',
    type: 'checkbox',
    name: 'attestation',
    id: 'attestation'
  },
  {
    label:
      'En pratiquant les activités sur la base nautique, vous nous permettez d’utiliser votre droit à l’image à des fins promotionnelles.',
    type: 'checkbox',
    name: 'droitImg',
    id: 'droitImg'
  }
])
</script>

<template>
  <main id="group">
    <section class="illu">
      <img src="../assets/img/illu-grp.png" alt="" />
    </section>
    <section id="style-form">
      <div id="head">
        <h2>GROUPE</h2>
        <RouterLink to="/home">
          <img src="../assets/img/cross-back.svg" alt="" />
        </RouterLink>
      </div>
      <Form :inputs="inputs" />
    </section>
  </main>
</template>
