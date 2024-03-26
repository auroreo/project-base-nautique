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
    delete: true
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
    id: 'lastname'
  },
  {
    label: 'Prénom',
    type: 'text',
    name: 'firstname',
    id: 'firstname'
  },
  {
    label: 'Personne 1',
    type: 'text',
    name: 'person',
    id: 'person',
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
    type: 'mail',
    name: 'mail',
    id: 'mail'
  },
  {
    label: 'Savent nager 25 mètres et s’immerger.',
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
  <main>
    <section class="illu">
        <img src="../assets/img/illu_family.png" alt="">
    </section>
    <section id="style-form">
        <div id="head">
            <h2>FAMILLE</h2>
            <RouterLink to="/">
                <img src="../assets/img/cross-back.svg" alt="">
            </RouterLink>
        </div>
        <form action="">
          <Form :inputs="inputs" :addperson="addPersonn" :deleteperson="deletePerson"/>
        </form>
      </section>
  </main>
</template>
