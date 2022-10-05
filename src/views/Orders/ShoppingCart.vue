<template>
    <div class="container">
        <TitleAndBack :onBackClick="'home'">5 блюд на 2 530₽</TitleAndBack>
        <div class="items-cont container">
            <ShoppingCartItem :item="item" />
            <ShoppingCartPersons :persons="persons" />
            <ShoppingCartDelivery :delivery="delivery" />
        </div>


        <!-- <Input placeholder="test" label="Test label" v-on:val="(a) => {test=a}" /> -->
    </div>
</template>

<script setup>
import TitleAndBack from '@/components/TitleAndBack.vue';
import { ref } from 'vue';
import Input from '../../components/Input.vue';
import ShoppingCartItem from '../../components/ShoppingCart/ShoppingCartItem.vue';
import ShoppingCartPersons from '../../components/ShoppingCart/ShoppingCartPersons.vue';
import ShoppingCartDelivery from '../../components/ShoppingCart/ShoppingCartDelivery.vue';

var item = ref({
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
        selected: true
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
})
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
</style>