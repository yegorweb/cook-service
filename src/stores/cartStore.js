import { defineStore } from "pinia";
import { showToast } from "../assets/show-toast";

// var cart = localStorage.getItem('cart') ? Object.assign([], JSON.parse(localStorage.getItem('cart'))) : []
// // парсим каждый элемент массива
// for (let index = 0; index < cart.length; index++) {
//     cart[index] = JSON.parse(cart[index])
// }


export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    }),
    actions: {
        getCart() {
            console.log(this.cart)
            console.log(typeof this.cart)
            return this.cart
        },
        add(item) {
            console.log(this.cart.includes(item))
            if (this.cart.includes(item)) {
                showToast('Такое в вашей корзине уже лежит', 'error')
                return
            }
            this.cart.push(item)
            localStorage.setItem('cart', JSON.stringify(this.cart))
            showToast('Блюдо добавлено в корзину', 'success')
        }
    }
})