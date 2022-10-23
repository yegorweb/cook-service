<template>
    <div class="item">
        <div class="info">
            <div class="info-title">{{order.date}}</div>
            <div class="info-desc">
                №{{order.id}} на {{order.cost.toString().split('.').length == 1 ? 
                order.cost.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + '₽' :
                order.cost.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + '.' + order.cost.toString().split('.')[1] + '₽'}}
            </div>
        </div>
        <div class="status">
            <div class="status-text">{{order.status}}</div>
            <img :src="getImage()" alt="" class="status-img">
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

var props = defineProps({order: { required: true }})
var order = ref(props.order)
function getImage() {
    switch (order.value.status) {
        case 'Текущий':
            return import.meta.env.VITE_API_URL + '/current-order.png'
        case 'Отменен':
            return import.meta.env.VITE_API_URL + '/canceled-order.png'
        case 'Доставлен':
            return import.meta.env.VITE_API_URL + '/delivered-order.png'
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style';
.item {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
    border-radius: 40px 40px 40px 5px;
    padding: rem(20) rem(40);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.12), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;
    }
}
.info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: rem(5);

    &-title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(20);
        color: #212629;
    } &-desc {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 300;
        font-size: rem(17);
        color: rgba(33, 38, 41, 0.7);
    }
}
.status {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: rem(10);

    &-text {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 300;
        font-size: rem(17);
        color: #212629;
    } &-img {
        height: rem(40);
        filter: drop-shadow(2px 2px 30px rgba(0, 0, 0, 0.05)) drop-shadow(15px 15px 20px rgba(0, 0, 0, 0.15));
    }
}
</style>