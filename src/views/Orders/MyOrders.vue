<template>
    <div class="container">
        <TitleAndBackVue onBackCick="home">Мои заказы</TitleAndBackVue>
        <CatalogButtons
            :categories="modes" 
            :currentCategory="currentMode" 
            :inCatalog="false"
            @changeCategory="changeCategory" 
        />
        <div class="orders container">
            <template v-for="order in orders" :key="order">
                <MyOrdersItem 
                    v-if="
                        currentMode.category == 'Все' ||
                        (order.status == 'Готовится' &&  currentMode.category == 'Все') || 
                        (order.status == 'Доставлен' &&  currentMode.category == 'Доставлены') || 
                        (order.status == 'Отменен' &&  currentMode.category == 'Отменены')
                    "
                    :order="order"
                />
            </template>
            <div 
                v-if="orders.length == 0 || 
                    (currentMode.category == 'Все' && orders.every(order => order.status != 'Готовится')) ||
                    (currentMode.category == 'Доставлены' && orders.every(order => order.status != 'Доставлен')) ||
                    (currentMode.category == 'Отменены' && orders.every(order => order.status != 'Отменен'))
                " class="no"
            >
                Отсутсвуют 😱
            </div>
        </div>
    </div>    
</template>

<script setup>
import TitleAndBackVue from '@/components/TitleAndBack.vue';
import CatalogButtons from "@/components/Catalog/CatalogButtons.vue";
import MyOrdersItem from "@/components/Orders/MyOrdersItem.vue";
import { reactive, ref } from 'vue';
import axios from 'axios';

var modes = ref(['Все', 'Доставлены', 'Отменены'])
var currentMode = reactive({category: 'Все'})
function changeCategory(mode) {
    currentMode.category = mode
}
// NOTE   statuses:  Текущий, Отменен, Доставлен
var orders = await (await axios.get('http://localhost:3000/user-orders/?id=635692d5dc2f8a2f4a5358cb')).data
console.log(orders)
//ref([
//    {
//        date: '8 апреля 2054',
//        id: '298456548',
//        status: 'Текущий',
//        cost: 4250
//    },
//    {
//        date: '8 апреля 2054',
//        id: '298456548',
//        status: 'Доставлен',
//        cost: 4250
//    },
//    {
//        date: '8 апреля 2054',
//        id: '298456548',
//        status: 'Отменен',
//        cost: 4250
//    }
//])
</script>

<style lang="scss" scoped>
@import '@/assets/style';
.orders {
    display: flex;
    flex-direction: column;
    gap: rem(20);
    margin-top: rem(30);
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