<template>
    <div class="item">
        <div class="top" :style="'background: #ac662d url('+img+') center center no-repeat;'">
            <div class="cont top-container">
                <img src="@/assets/like.svg" class="like">
                <div class="peculiarities">
                    <div v-for="peculiaritie in item.peculiarities" :key="peculiaritie" class="peculiarities-item hint--bottom-right" :aria-label="peculiaritie.name">
                        <img :src="peculiaritie.imageSource" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="middle cont">
            <div class="title">{{item.name}}</div>
            <div class="info">
                <div>{{item.info.weight}}</div>
                <div>{{item.info.calories}}</div>
                <div class="price">{{item.info.price}}</div>
            </div>
            <div class="desc">{{item.description}}</div>
        </div>
        <div class="bottom cont">
            <div class="btn">
                <div @click="item.amount>1 ? item.amount-=1 : item.amount+0" class="btn-minus">-</div>
                <div class="btn-count">{{item.amount}}</div>
                <div @click="item.amount+=1" class="btn-plus">+</div>
            </div>
            <a class="add"><div>Добавить</div></a>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"

var props = defineProps(['item'])
var item = props.item
var img = item.imageSource
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
@import '@/assets/hint.css';
.item {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: rem(40) rem(40) rem(40) rem(5);
    overflow: hidden;
}
.cont {
    margin: 0 auto;
    width: 90%;
}
.top {
    aspect-ratio: 370 / 360;
    display: flex;
    align-items: center;
    background-size: cover;
    position: relative;
}
.top-container {
    margin: auto;
    height: 90%;
}
.middle {
    margin-top: rem(20);
}
.title {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(20);
    color: #212629;
}
.info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: rem(25);
    margin-top: rem(14);

    & > * {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 300;
        font-size: rem(16);
        color: rgba(33, 38, 41, 0.7);
    } .price {
        font-weight: 700;
    }
}
.desc {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: rem(17);
    line-height: rem(20);
    color: rgba(33, 38, 41, 0.7);
    margin-top: rem(20);
}
.bottom {
    margin-top: rem(36);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: rem(10);
    margin-bottom: rem(20);
}
.btn {
    display: flex;
    flex-direction: row;
    border-radius: 999px;
    gap: rem(2);
    align-items: center;
    border: 1px solid #FFFFFF;
    padding: rem(1) rem(11);

    & > * {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(18);
        color: #212629;
        padding: rem(9);
        user-select: none;
        border-radius: 999px;
    } &-minus, &-plus {
        font-weight: 400;
        font-size: rem(26);
        line-height: rem(12);
        transition: all .2s;
        cursor: pointer;
        &:hover {
            background: #EEEEEE;
        }
    }
}
.add {
    background: #E9E9E9;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
    border-radius: 99px;
    min-height: 100%;
    width: 100%;
    text-align: center;
    cursor: pointer;
    transition: all .2s;
    align-items: center;
    display: flex;
    justify-content: center;

    & > * {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(18);
        color: #FE9102;
    }
    &:hover {
        box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.08), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;
    }
}
.like {
    height: rem(20);
    cursor: pointer;
    margin: rem(-6) 0 0 rem(-6);
    padding: rem(6);
    box-sizing: content-box;
}
.peculiarities {
    display: flex;
    flex-direction: row;
    gap: rem(8);
    position: absolute;
    bottom: rem(-10);

    &-item {
        background: #FFFFFF;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
        border-radius: 999px;
        width: rem(40);
        height: rem(40);
        padding: rem(10);
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        & > * {
            height: 100%;
        }
    }
}
</style>