<template>
    <div class="container">
        <TitleAndBack :onBackClick="'home'">
            {{cart.length}} 
            блюд{{getEnding(cart.length)}}
            {{ cart.length != 0 ? 
                    ' на ' + cart.map(item => 
                        y += (item.amount * (item.info.price + item.additions.map(i => i.selected ? x+=i.price : x+=0, x=0).reverse()[0])), y=0
                    ).reverse()[0] + info.currency
                    : ''
            }}
        </TitleAndBack>
        <div class="items-cont container">
            <template v-if="items.length!=0">
                <ShoppingCartItem :info="info" v-on:openFullItem="openFullItem" v-for="item in cart" :key="item" :item="item" />
                <ShoppingCartPersons :info="info" :persons="persons" />
                <ShoppingCartDelivery :info="info" :delivery="delivery" />
            </template>
            <div v-else class="no">Отсутсвуют 😱</div>
        </div>
        <Button v-if="cart.length > 0" @click="router.push({name: 'send-order'})" bg="#25D366" color="#FFFFFF" :marginTop="30">Оформить заказ</Button>
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
import Button from '@/components/Button.vue';
import ShoppingCartItem from '@/components/ShoppingCart/ShoppingCartItem.vue';
import ShoppingCartPersons from '@/components/ShoppingCart/ShoppingCartPersons.vue';
import ShoppingCartDelivery from '@/components/ShoppingCart/ShoppingCartDelivery.vue';
import CatalogItemPage from "@/components/Catalog/CatalogItemPage.vue";
import { useCartStore } from '../../stores/cartStore';
import { useInfoStore } from '../../stores/infoStore';
import { useRouter } from 'vue-router';

var infoStore = useInfoStore()
var cartStore = useCartStore()
const router = useRouter()

// получаем блюда и инфу
var cartFromStore = cartStore.getCart()
var items = await infoStore.getItems()
var info = await infoStore.getInfo()

console.log(items)
console.log(cartFromStore)

var cart = ref([]) // будет использваться

// находим блюда из корзины
cartFromStore.forEach(cart_item => {
    let item = Object.assign({}, items.find(el => cart_item._id === el._id), cart_item)
    cart.value.push(item)
})

console.log(cart.value)

var currentFullItem = reactive({active: false, item: {}})
// получить окончание по цифре
function getEnding(number) {
    let lastDigit = number % 10
    if (lastDigit == 0 || lastDigit == 5 || lastDigit == 6 || lastDigit == 7 || lastDigit == 8 || lastDigit == 9) return ''
    if (lastDigit == 1) return 'о'
    if (lastDigit == 2 || lastDigit == 3 || lastDigit == 4) return 'а'
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