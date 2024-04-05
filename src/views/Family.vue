<script setup>
import Form from '../components/Form.vue'
import { onMounted, ref } from 'vue'
let index_personne = 0
let count = 1

onMounted(() => {
  index_personne = inputs.value.map((item, index) => item.label).indexOf('Personne 1')
})

const addPersonn = () => {
  index_personne += 1
  count += 1
  let newPerson = {
    label: 'Personne ' + count,
    type: 'text',
    name: 'person',
    id: 'person'
  }
  inputs.value.splice(index_personne, 0, newPerson)
}

const deletePerson = () => {
  if (!(index_personne === inputs.value.map((item, index) => item.label).indexOf('Personne 1'))) {
    inputs.value.splice(index_personne, 1)
    index_personne -= 1
    count -= 1
  }
}

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
    label: 'Personne 1',
    type: 'text',
    name: 'person',
    id: 'person',
    placeholder: 'Nom, Prénom'
  },
  {
    label: 'Ajouter une personne',
    type: 'button',
    name: 'addPerson',
    id: 'addperson'
  },
  {
    label: 'Supprimer',
    type: 'button',
    name: 'deletePerson',
    id: 'deleteperson'
  },
  {
    label: 'Adresse électronique (Pas obligatoire)',
    type: 'email',
    name: 'mail',
    id: 'mail',
    placeholder: 'Votre mail'
  },
  {
    label: 'Atteste que les personnes ci-dessus savent nager 25 mètres et s’immerger.',
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
  <main>
    <section class="illu">
      <img src="../assets/img/illu_family.png" alt="" />
    </section>
    <section id="style-form">
      <div id="head">
        <h2>FAMILLE</h2>
        <RouterLink to="/home">
          <img src="../assets/img/cross-back.svg" alt="" />
        </RouterLink>
      </div>
      <Form :inputs="inputs" :addperson="addPersonn" :deleteperson="deletePerson" />
    </section>
  </main>
</template>
