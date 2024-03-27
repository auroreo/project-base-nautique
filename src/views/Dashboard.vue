<script setup>
import { onBeforeMount, onMounted, onUnmounted, onUpdated, ref, watch } from 'vue'
import { deleteData, readData, connect, logout } from '../firebase.js'
import Button from '@/components/Button.vue'
import exportFromJSON from 'export-from-json'
import InputText from '@/components/InputText.vue'
import { RouterLink } from 'vue-router'
let allData = []
const logged = ref(false)
const logUser = async () => {
  let login = document.querySelector('#login').value
  let password = document.querySelector('#password').value
  let user = await connect(login, password)
  if (user.auth) {
    logged.value = true
  } else {
    console.log('mauvais compte')
  }
}
onUnmounted(() => {
  logout()
})
onUpdated(() => {
  read()
})

const read = () => {
  readData('family').then((data) => {
    allData.push(data)
  })
  readData('individual').then((data) => {
    allData.push(data)
  })
  readData('group').then((data) => {
    allData.push(data)
  })
}
const exportArray = (data) => {
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth() + 1
  let day = today.getDate()
  const fileName = `visiteur-du-${day}-${month}-${year}`
  const exportType = exportFromJSON.types.xls
  exportFromJSON({ data, fileName, exportType })
  deleteData()
}
let inputs = [
  {
    name: 'login',
    type: 'email',
    id: 'login',
    label: 'Login',
    placeholder: 'ex: Admin@mail.com'
  },
  {
    name: 'password',
    type: 'password',
    id: 'password',
    label: 'Mot de passe',
    placeholder: 'ex: 1234'
  }
]
</script>

<template>
  <main id="dashboard">
    <div v-if="!logged">
      <form @submit.prevent="logUser">
        <InputText v-for="input in inputs" :input="input" />
        <Button text="Se connecter" type="submit" />
      </form>
    </div>
    <div v-else>
      <Button
        text="Exporter et supprimer les données"
        type="button"
        :onclick="
          () => {
            exportArray(allData.flat(1))
          }
        "
      />
    </div>
    <div id="cross">
      <RouterLink to="/">
        <img src="../assets/img/cross-back.svg" alt="" />
      </RouterLink>
    </div>
  </main>
</template>
