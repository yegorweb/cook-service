<template>
    <div class="container">
        <TitleAndBack :onBackClick="'home'">
            {{items.length}} 
            блюд 
            {{  items.length != 0 ? 
                    items.map(item => 
                        y += (item.amount * (item.info.price + item.additions.map(i => i.selected ? x+=i.price : x+=0, x=0).reverse()[0], x=0)), y=0
                    ).reverse()[0]
                    : ''
            }}</TitleAndBack>
        <div class="items-cont container">
            <template v-if="items.length!=0">
                <ShoppingCartItem :info="info" v-on:openFullItem="openFullItem" v-for="item in items" :key="item" :item="item" />
                <ShoppingCartPersons :info="info" :persons="persons" />
                <ShoppingCartDelivery :info="info" :delivery="delivery" />
            </template>
            <div v-else class="no">Отсутсвуют 😱</div>
        </div>
        <CatalogItemPage 
            v-on:closeFullItem="closeFullItem" 
            v-if="currentFullItem.active" 
            :item="currentFullItem.item" 
        />
    </div>
</template>

<script setup>
import TitleAndBack from '@/components/TitleAndBack.vue';
import { reactive, ref } from 'vue';
import ShoppingCartItem from '@/components/ShoppingCart/ShoppingCartItem.vue';
import ShoppingCartPersons from '@/components/ShoppingCart/ShoppingCartPersons.vue';
import ShoppingCartDelivery from '@/components/ShoppingCart/ShoppingCartDelivery.vue';
import CatalogItemPage from "@/components/Catalog/CatalogItemPage.vue";
import axios from 'axios';
import { showToast, showToastFromServerResponse } from '../../assets/show-toast';

var items 
axios.get('http://localhost:3000/get-cart/?id=635692d5dc2f8a2f4a5358cb')
    .then((res) => {
        items = res.data
    })
    .catch((err) => {
        if (err.response) {
            showToastFromServerResponse(err.response.data)
        } else if (err.request) {
            showToastFromServerResponse(err.request)
        } else {
            showToast('Нет соединения с сервером. Проверьте подключение к интернету.', 'error')
        }
    })
console.log(items)
var currentFullItem = reactive({active: false, item: {}})
function openFullItem(item) {
    currentFullItem.active = true
    currentFullItem.item = item
    document.body.style.paddingBottom = '2000px'
}
function closeFullItem() {
    currentFullItem.active = false
    document.body.style.paddingBottom = '0px'
}
var info = (await axios.get('http://localhost:3000/info')).data
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
// }])
var test = ref('')
var persons = ref(1)
var delivery = ref(info.delivery)
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.items-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: rem(10);
}
.no {
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: rem(22);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
</style>