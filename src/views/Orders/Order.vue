<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <TitleAndBack onBackClick="back">№{{order.number}}</TitleAndBack>
        <div v-if="order.done" class="status">{{order.status.toLowerCase()}}</div>
        <div v-else class="stages container">
            <div class="stages-line" id="line"></div>
            <div class="stages__item" id="first-stage">
                <div :class="{'stages__item-circle': true, 'stages__item-circle-active': order.status == 'Оформлен'}">
                    <img :src="getSrc('Оформлен')" alt="" class="stages__item-circle-img">
                </div>
                <div :class="{'stages__item-text': true, 'stages__item-text-active': order.status == 'Оформлен'}">
                    Оформлен
                </div>
            </div>
            <div class="stages__item">
                <div :class="{'stages__item-circle': true, 'stages__item-circle-active': order.status == 'Готовится'}">
                    <img :src="getSrc('Готовится')" alt="" class="stages__item-circle-img">
                </div>
                <div :class="{'stages__item-text': true, 'stages__item-text-active': order.status == 'Готовится'}">
                    Готовится
                </div>
            </div>
            <div class="stages__item">
                <div :class="{'stages__item-circle': true, 'stages__item-circle-active': order.status == 'В доставке'}">
                    <img :src="getSrc('В доставке')" alt="" class="stages__item-circle-img">
                </div>
                <div :class="{'stages__item-text': true, 'stages__item-text-active': order.status == 'В доставке'}">
                    В доставке
                </div>
            </div>
            <div class="stages__item" id="last-stage">
                <div :class="{'stages__item-circle': true, 'stages__item-circle-active': order.status == 'Готово'}">
                    <img :src="getSrc('Готово')" alt="" class="stages__item-circle-img">
                </div>
                <div :class="{'stages__item-text': true, 'stages__item-text-active': order.status == 'Готово'}">
                    Готово
                </div>
            </div>
        </div>
        <div class="date">{{order.date}}</div>
        <div class="cont"> 
            <div class="cont-item cont-item-items">
                <div class="cont-item-items-orders">
                    <OrderItem v-for="item in order.items" :key="item" :item="getItem({id: item._id, additions: item.additions, amount: item.amount, price: item.price})" />
                </div>
                <div class="lines"><div class="line"></div></div>
                <div class="cont-item-item">
                    <div class="cont-item-item__name">Доставка</div>
                    <div class="cont-item-item__value">{{order.delivery_price}}₽</div>
                </div>
                <div class="lines"><div class="line"></div><div class="line"></div></div>
                <div class="cont-item-item">
                    <div class="cont-item-item__name">Итого</div>
                    <div class="cont-item-item__value">{{order.total}}₽</div>
                </div>
            </div>
            <div class="cont-item cont-basicitem">
                <div class="cont-basicitem-title">Когда</div>
                <div class="cont-basicitem-text">{{order.time}}</div>
            </div>
            <div class="cont-item cont-basicitem">
                <div class="cont-basicitem-title">Куда</div>
                <div class="cont-basicitem-text">{{order.adress}}</div>
            </div>
            <div class="cont-item cont-basicitem">
                <div class="cont-basicitem-title">Оплата</div>
                <div class="cont-basicitem-text">{{order.payment}}</div>
            </div>
        </div>
        <div class="btns">
            <Button bg="#25D366" color="#FFFFFF" :width="320">Управлять в WhatsApp</Button>
            <Button :width="320">{{order.done ? 'Повторить заказ' : 'Отменить заказ'}}</Button>
        </div>
    </div>
</template>

<script setup>
import OrderItem from '@/components/Orders/OrderItem.vue'
import TitleAndBack from "../../components/TitleAndBack.vue";
import Button from '@/components/Button.vue';
import axios from "axios";
import { onMounted } from "vue";

var params = (new URL(document.location)).searchParams; 
var id = params.get('id')
// /?id=63569dd1d2775e9c452c21b6
var order = (await axios.get('http://localhost:3000/order/?id='+id)).data
async function getItem(params) {
    let item = (await axios.get('http://localhost:3000/item/?id=' + params.id)).data
    item.amount = params.amount
    item.price = params.price
    item.additions = params.additions
    return item
}
function getLineCSS() {
    return window.innerWidth > 576 ? {
        left: (document.getElementById('first-stage').clientWidth / 2 / 16) + 'rem',
        right: (document.getElementById('last-stage').clientWidth / 2 / 16) + 'rem',
        top: 18/16 + 'rem',
        bottom: 'auto',
        width: 'auto',
        height: '0.25rem'
    } : {
        left: (document.querySelector('.stages').clientWidth / 2 - 2) / 16 + 'rem',
        right: 'auto',
        top: 4/16 + 'rem',
        bottom: (document.getElementById('last-stage').clientHeight - 4) / 16 + 'rem',
        width: '0.25rem',
        height: 'auto'
    }
} 
function getSrc(item) {
    switch (item) {
        case 'Оформлен':
            return import.meta.env.VITE_API_URL + '/framed-order.svg' 
        case 'Готовится':
            return import.meta.env.VITE_API_URL + '/cooking-order.svg'
        case 'В доставке':
            return import.meta.env.VITE_API_URL + '/in-delivery-order.svg'
        case 'Готово':
            return import.meta.env.VITE_API_URL + '/done-order.svg'
    }
}
function getFontSize() {
    return document.querySelector('.container').clientWidth / document.querySelector('.status').innerHTML.length * 1.7
}
function setValues() {
    document.querySelectorAll('.status').forEach((el) => {
        el.style['font-size'] = (getFontSize() / 16)  + 'rem'
        el.style['margin-top'] = (getFontSize() / 2.2 * -1 / 16) + 'rem'
    })
    Object.assign(document.getElementById('line').style, getLineCSS())
}
onMounted(setValues)
window.onresize = setValues
</script>

<style lang="scss" scoped>
@import '@/assets/style';
.stages {
    @include adaptive-value(flex-direction, row, row, row, row, column);
    @include adaptive-value(justify-content, space-between, space-between, space-between, space-between, center);
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    row-gap: rem(30);
    position: relative;
    margin-bottom: rem(20);

    &-line {
        position: absolute;
        top: rem(18);
        height: rem(4);
        background: #FFFFFF;
        z-index: -1;
    }
    &__item {
        @include adaptive-value(margin, 0, 0, 0, 0, 0 auto);
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: rem(10);

        &-circle {
            width: rem(40);
            height: rem(40);
            padding: rem(10);
            margin: 0 auto;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            border-radius: 50%;
            background: #FFFFFF;

            &-img {
                height: 100%;
            }
            &-active {
                background: #212629;
                box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05), 15px 15px 20px rgba(0, 0, 0, 0.15);
                & > * {
                    filter: invert(100%);
                }
            }
        }
        &-text {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 300;
            font-size: rem(18);
            color: #212629;

            &-active {
                font-weight: 700;
                color: #212629;
            }
        }
    }
}
.status {
    font-family: 'Gilroy';
    font-style: normal;
    width: 100%;
    font-weight: 700;
    word-break: break-all;
    color: #212629;
}
.date {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(36);
    color: #212629;
}
.btns {
    @include adaptive-value(flex-direction, row, row, row, column, column);
    @include adaptive-value(justify-content, space-between, space-between, space-between, center, center);
    display: flex;
    margin-top: rem(30);
    gap: rem(20);
}
.cont {
    display: flex;
    flex-direction: column;
    gap: rem(10);
    margin-top: rem(26);

    &-item {
        background: rgba(255, 255, 255, 0.4);
        border-radius: 20px 20px 20px 5px;
        display: flex;
    
        &-items {
            padding: rem(30) rem(40);
            flex-direction: column;

            &-orders {
                display: flex;
                flex-direction: column;
                gap: rem(30);
            }
        }
        &-item {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            &__name, &__value {
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: rem(18);
                color: #212629;
            }
        }
    }
    &-basicitem {
        padding: rem(20);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: rem(6);

        &-title {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 300;
            font-size: rem(16);
            color: rgba(0, 0, 0, 0.7);
        } &-text {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 300;
            font-size: rem(18);
            color: #212629;
        }
    }
}
.line {
    width: 100%;
    height: rem(1);
    background: rgba(33, 38, 41, 0.08);
    
    &s {
        margin: rem(20) 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: rem(4);
    }
}
</style>