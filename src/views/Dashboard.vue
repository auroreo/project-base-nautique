<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import { deleteData, readData } from '../firebase.js'
import Button from '@/components/Button.vue'
import exportFromJSON from 'export-from-json'
let allData = []
const logged = ref(false)
onBeforeMount(() => {})
onMounted(() => {
  // readData('family').then((data) => {
  //   allData.push(data)
  // })
  // readData('individual').then((data) => {
  //   allData.push(data)
  // })
  // readData('group').then((data) => {
  //   allData.push(data)
  // })
})

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
</script>

<template>
  <main id="dashboard">
    <div v-if="!logged">
      <form>
        <label> Login : </label>
        <input type="email" />
        <label> Mot de passe : </label>
        <input />
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
  </main>
</template>
