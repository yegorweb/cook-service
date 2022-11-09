<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="payment" :class="{'box': true, 'box-active': active}">
        <div @click="active=!active" id="item" class="item" align="center" justify="space-between">
            <img :src="current_option.image" alt="" class="item-img">
            <div class="item-text">{{current_option.text}}</div>
        </div>
        <div v-if="active" :style="'top: '+getListTop()+';'" class="list">
            <div v-for="item in list" :key="item" @click="current_option = item; active = !active" class="list-item">
                <img :src="item.image" alt="" class="list-item-img" />
                <div class="list-item-text">
                    <div class="list-item-text-left">{{item.text}}</div>
                    <div class="list-item-text-right">{{item.text_right}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

var active = ref(false)
var path = import.meta.env.VITE_BASE_URL
var list = ref([
    {
        image: path + '/deposit-white.svg',
        text: 'Депозит',
        text_right: '27 580₽'
    },
    {
        image: path + '/deposit-white.svg',
        text: 'Депозит',
        text_right: ''
    },
    {
        image: path + '/online-payment.svg',
        text: 'Оплата онлайн',
        text_right: ''
    },
    {
        image: path + '/card-payment.svg',
        text: 'Картой курьеру',
        text_right: ''
    },
    {
        image: path + '/cash.svg',
        text: 'Наличные',
        text_right: ''
    },
])
var current_option = ref({image: path + '/payment.svg', text: 'Оплата'})
function getListTop() {
    return (document.getElementById('item').clientHeight - 13) / 16 + 'rem'
}
onMounted(() => {
    document.addEventListener('click', (event) => {
        let element = document.getElementById('payment')
        let withinBoundaries = event.composedPath().includes(element)
	    if (!withinBoundaries) active.value = false
    })
})
</script>

<style lang="scss" scoped>
@import '@/assets/style';
* {
    user-select: none;
}
.box {
    position: relative;
    border-radius: rem(13);
    transition: all .2s;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
    &:hover {
        box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.12), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;
    }
    &-active {
        box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.12), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;
    }
}
.item {
    background: #E9E9E9;
    border-radius: rem(13);
    cursor: pointer;
    z-index: 100;
    padding: rem(24) rem(20);
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: rem(22);
    justify-content: left;

    &-img {
        filter: invert(100%);
        width: rem(20);
    } &-text {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(18);
        color: #212629;
    }
}
.list {
    position: absolute;
    background: #212629;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05), 40px 40px 50px rgba(0, 0, 0, 0.5);
    border-radius: 0 0 rem(13) rem(13);
    padding: rem(30) rem(22);
    padding-bottom: rem(22);
    display: flex;
    flex-direction: column;
    top: rem(-13);
    z-index: 99;
    left: 0;
    right: 0;

    &-item {
        padding: rem(20) 0;
        display: flex;
        flex-direction: row;
        justify-content: left;
        gap: rem(22);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        cursor: pointer;

        &-img {
            width: rem(20);
        }
        &-text {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;

            & > * {
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 300;
                font-size: rem(16);
                color: #FFFFFF;
            }
        }
        &:first-child {
            padding-top: 0;
            border: none;
        }
        &:last-child {
            padding-bottom: 0;
        }
    }
}
</style>