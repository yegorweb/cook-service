<template>
    <CatalogButtons v-bind:categories="categories" />
    <CatalogItems v-bind:items="items" v-if="currentMode=='Частным клиентам'" />
</template>

<script setup>
import { ref } from "vue";
import CatalogButtons from "./CatalogButtons.vue";
import CatalogItems from "./CatalogItems.vue";

var categories = ref(['Закуски', 'Салаты', 'Горячее', 'Суши и роллы', 'Супы', 'Детское', 'Десерты', 'Напитки'])
var currentMode = ref('Частным клиентам')
var items = ref([{
    like: false,
    imageSource: 'src/assets/item-image.png',
    peculiarities: [{
        name: 'Острый',
        imageSource: 'src/assets/spicy.svg'
    }],
    name: 'Картофель с луком и белыми грибами',
    info: {
        weight: '320 г',
        calories: '1 040 ккал',
        price: '430₽'
    },
    description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.',
    amount: 1
}])
</script>