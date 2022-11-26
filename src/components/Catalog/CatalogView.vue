<template>
    <CatalogButtons 
        :categories="categories" 
        :currentCategory="currentCategory" 
        :currentMode="currentMode"
        @changeMode="changeMode" 
        @changeCategory="changeCategory" 
    />
    <CatalogItems 
        v-on:openFullItem="openFullItem" 
        :items="items" 
        :currentCategory="currentCategory" 
        v-if="currentMode.mode=='Частным клиентам'" 
    />
    <CatalogCorporate v-else />
    <CatalogItemPage 
        v-on:closeFullItem="closeFullItem" 
        v-if="currentFullItem.active" 
        :item="currentFullItem.item" 
    />
</template>

<script setup>
import { reactive, ref } from "vue";
import CatalogButtons from "@/components/Catalog/CatalogButtons.vue";
import CatalogItems from "@/components/Catalog/CatalogItems.vue";
import CatalogCorporate from "@/components/Catalog/CatalogCorporate.vue";
import CatalogItemPage from "@/components/Catalog/CatalogItemPage.vue";
import { useInfoStore } from "../../stores/infoStore";

var infoStore = useInfoStore()
var items = await infoStore.getItems()

items.forEach((el) => {
    el.amount = 1
    el.additions.forEach((el) => {
        el.selected = el.price==0
    })
})
// ref([{
//     like: false,
//     category: 'Закуски',
//     imageSource: 'src/assets/item-image.jpg',
//     peculiarities: [{
//         name: 'Острый',
//         imageSource: 'src/assets/spicy.svg'
//     },
//     {
//         name: 'Не очень острый',
//         imageSource: 'src/assets/spicy.svg'
//     }],
//     name: 'Картофель с луком и белыми грибами',
//     info: {
//         weight: '320 г',
//         calories: '1 040 ккал',
//         price: 430
//     },
//     additions: [{
//         name: 'Побольше лука',
//         price: 20,
//         selected: false
//     },
//     {
//         name: 'По домашнему',
//         price: 0,
//         selected: true
//     },
//     {
//         name: 'Грибов побольше',
//         price: 300,
//         selected: false
//     }],
//     description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.',
//     amount: 1
// },
// {
//     like: false,
//     category: 'Салаты',
//     imageSource: 'src/assets/item-image2.jpg',
//     peculiarities: [{
//         name: 'Острый',
//         imageSource: 'src/assets/spicy.svg'
//     }],
//     name: 'Картофель с луком и белыми грибами',
//     info: {
//         weight: '320 г',
//         calories: '1 040 ккал',
//         price: 430
//     },
//     additions: [{
//         name: 'Побольше лука',
//         price: 20,
//         selected: false
//     },
//     {
//         name: 'По домашнему',
//         price: 0,
//         selected: true
//     },
//     {
//         name: 'Грибов побольше',
//         price: 300,
//         selected: false
//     }],
//     description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.',
//     amount: 1
// },
// {
//     like: false,
//     category: 'Детское',
//     imageSource: 'src/assets/item-image3.jpg',
//     peculiarities: [{
//         name: 'Острый',
//         imageSource: 'src/assets/spicy.svg'
//     }],
//     name: 'Картофель с луком и белыми грибами',
//     info: {
//         weight: '320 г',
//         calories: '1 040 ккал',
//         price: 430
//     },
//     additions: [{
//         name: 'Побольше лука',
//         price: 20,
//         selected: false
//     },
//     {
//         name: 'По домашнему',
//         price: 0,
//         selected: true
//     },
//     {
//         name: 'Грибов побольше',
//         price: 300,
//         selected: false
//     }],
//     description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.',
//     amount: 1
// }])

var categories = ref(['Все', 'Любимое', 'Закуски', 'Салаты', 'Горячее', 'Суши и роллы', 'Супы', 'Детское', 'Десерты', 'Напитки'])
var currentMode = reactive({mode: 'Частным клиентам'})
var currentFullItem = reactive({active: false, item: {}})
var currentCategory = reactive({category: 'Все'})

function changeMode(mode) {
    currentMode.mode = mode
}
function changeCategory(category) {
    currentCategory.category = category
}
function openFullItem(item) {
    currentFullItem.active = true
    currentFullItem.item = item
    document.body.style.paddingBottom = '2000px'
}
function closeFullItem() {
    currentFullItem.active = false
    document.body.style.paddingBottom = '0px'
}
</script>