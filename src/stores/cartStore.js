import { defineStore } from "pinia";
import { showToast } from "../assets/show-toast";

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    }),
    actions: {
        getCart() {
            console.log(localStorage.getItem('cart'))
            return this.cart
        },
        add(item) {
            if (this.cart.includes(item)) {
                showToast('Упс! Такое в вашей корзине уже лежит', 'error')
                return
            }
            this.cart.push(JSON.stringify(item))
            localStorage.setItem('cart', JSON.stringify(this.cart))
            showToast('Блюдо добавлено в корзину', 'success')
        }
    }
})