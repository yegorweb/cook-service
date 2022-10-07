<template>
    <div class="container">
        <TitleAndBack :onBackClick="'home'">{{items.length}} блюд {{items.length!=0 ? items.map(item => item.amount * (item.info.price + item.additions.map(i => i.selected ? x+=i.price : x+=0, x=0).reverse()[0], x=0)).reverse()[0] : ''}}</TitleAndBack>
        <div class="items-cont container">
            <template v-if="items.length!=0">
                <ShoppingCartItem v-for="item in items" :key="item" :item="item" />
                <ShoppingCartPersons :persons="persons" />
                <ShoppingCartDelivery :delivery="delivery" />
            </template>
            <div v-else class="no">Отсутсвует 😱</div>
        </div>
    </div>
</template>

<script setup>
import TitleAndBack from '@/components/TitleAndBack.vue';
import { inject, ref } from 'vue';
import Input from '../../components/Input.vue';
import ShoppingCartItem from '../../components/ShoppingCart/ShoppingCartItem.vue';
import ShoppingCartPersons from '../../components/ShoppingCart/ShoppingCartPersons.vue';
import ShoppingCartDelivery from '../../components/ShoppingCart/ShoppingCartDelivery.vue';

var items = ref([{
    like: false,
    category: 'Закуски',
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
        price: 430
    },
    additions: [{
        name: 'Побольше лука',
        price: 20,
        selected: false
    },
    {
        name: 'По домашнему',
        price: 0,
        selected: true
    },
    {
        name: 'Грибов побольше',
        price: 300,
        selected: false
    }],
    description: 'Это вкусное и сытное блюдо является любимым блюдом во многих семьях, полюбите его и вы.',
    amount: 1
}])
var test = ref('')
var persons = ref(1)
var delivery = ref(0)
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.items-cont {
    margin-top: rem(30);
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