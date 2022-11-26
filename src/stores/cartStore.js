import { defineStore } from "pinia";
import { showToast } from "../assets/show-toast";
import { ref } from "vue";
import _ from "lodash";

export const useCartStore = defineStore('cartStore', () => {
    var cart = ref(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
    console.log(cart.value)
    function getCart() {
        return cart.value
    }
    function add(item) {
        if (cart.value.some(element => _.isEqual(element, item))) {
            showToast('Такое в вашей корзине уже лежит', 'error')
            return
        }
        cart.value.push(item)
        localStorage.setItem('cart', JSON.stringify(cart.value))
        showToast('Блюдо добавлено в корзину', 'success')
    }

    return {cart, getCart, add}
})