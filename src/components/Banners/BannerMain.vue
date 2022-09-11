<template>
    <div class="container">
        <div class="info">
            <div class="title">
                {{item.title}}
            </div>
            <a :href="item.buttonLink" class="btn">
                <div class="btn-text">{{item.buttonText}}</div>
                <img class="btn-img" :src="item.buttonImageSource" alt="image" />
            </a>
        </div>
        <img :src="item.imageSource" alt="" class="img">
    </div>
</template>

<script setup>
import { ref } from "vue"

var props = defineProps(['item'])
var item = ref(props.item)
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.container {
    border-radius: rem(40) rem(40) rem(40) rem(5);
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05), 40px 40px 50px rgba(0, 0, 0, 0.5);
    height: rem(460);
    padding: rem(50);
    box-sizing: border-box;
    background: #212629;
    position: relative;
}
.info {
    @include adaptive-value(width, 50%, 50%, 100%, 100%, 100%);
    float: left;
    display: inline-flex;
    flex-direction: column;
    gap: rem(40);
    align-items: flex-start;
}
.title {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(48);
    line-height: rem(56);
    color: #FFFFFF;
}
.btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: rem(18);
    height: rem(40);
    padding: 0 rem(26);
    border-radius: 9999px;
    background: #212629;
    text-decoration: none;
    cursor: pointer;
    transition: all .2s;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5), -1px -1px 6px rgba(255, 255, 255, 0.05), -5px -5px 20px rgba(255, 255, 255, 0.1), 5px 5px 20px rgba(0, 0, 0, 0.8);
    
    &:hover {
        box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.5), 1px 1px 6px rgba(255, 255, 255, 0.05), 5px 5px 20px rgba(255, 255, 255, 0.1), -5px -5px 20px rgba(0, 0, 0, 0.8);
    }
    &-img {
        height: rem(20);
        width: auto;
    }
    &-text {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(18);
        color: #FE9102;
    }
}
.img {
    @include adaptive-value(display, block, block, none, none, none);
    position: absolute;
    right: rem(50);
    bottom: rem(-80);
    width: auto;
    height: rem(490);
}
</style>