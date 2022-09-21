<template>
    <CatalogButtons v-bind:categories="categories" v-on:changeMode="changeMode" />
    <CatalogItems v-bind:items="items" v-if="currentMode.mode=='Частным клиентам'" />
    <CatalogCorporate v-else />
</template>

<script setup>
import { reactive, ref } from "vue";
import CatalogButtons from "./CatalogButtons.vue";
import CatalogItems from "./CatalogItems.vue";
import CatalogCorporate from "./CatalogCorporate.vue";

var categories = ref(['Все', 'Любимое', 'Закуски', 'Салаты', 'Горячее', 'Суши и роллы', 'Супы', 'Детское', 'Десерты', 'Напитки'])
var currentMode = reactive({mode: 'Частным клиентам'})
function changeMode(mode) {
    currentMode.mode = mode
}
var items = ref([{
    like: false,
    category: '',
    imageSource: 'src/assets/item-image.jpg',
    peculiarities: [{
        name: 'Острый',
        imageSource: 'src/assets/spicy.svg'
    },
    {
        name: 'Не очень острый',
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
},
{
    like: false,
    category: '',
    imageSource: 'src/assets/item-image2.jpg',
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
},
{
    like: false,
    category: '',
    imageSource: 'src/assets/item-image3.jpg',
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