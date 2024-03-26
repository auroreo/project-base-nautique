<script setup>

import { deleteData, readData } from '../firebase.js';

let allData;

readData('family').then((data) => {
    allData = data;
});

</script>

<template>
    <main id="dashboard">
        <div class="search-container">
            <form id="search_bar" action="" method="get">
                <input type="text" class="search-box" name="q" placeholder="Recherche...">
                <button type="submit" class="search-button">
                    <img class="icon_loupe" src="../assets/img/loupe.png" alt="loupe image">
                </button>
            </form>
        </div>
        <div class="item" v-for="(value, key) in allData" :key="key">
            <h3 class="title_h3">{{ value['firstname'] }}</h3>
        </div>
    </main>
</template>