<script setup>
import Form from '../components/Form.vue'
import { onMounted, ref } from 'vue'

const inputs = ref([
  {
    label: 'Nom du groupe',
    type: 'text',
    name: 'lastname',
    id: 'lastname',
    placeholder: 'Les vachettes'
  },
  {
    label: 'Adresse mail',
    type: 'mail',
    name: 'mail',
    id: 'mail',
    placeholder: 'email@gmail.com'
  },
  {
    label: 'Je, soussigné ',
    label2: 'responsable du groupe,',
    type: 'text',
    name: 'resp',
    id: 'resp',
    placeholder: 'Mr, Mme'
  },

  {
    label:
      "En renseignant mon adresse mail, j'accepte que celle-ci soit utilisée dans le cadre de la newsletter.",
    type: 'checkbox',
    name: 'newsletter',
    id: 'newsletter'
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
  <main>
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
      <form action="">
        <Form :inputs="inputs" />
      </form>
    </section>
  </main>
</template>
