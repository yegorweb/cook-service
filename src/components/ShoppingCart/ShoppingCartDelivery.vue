<template>
    <div class="item">
        <div class="title">Доставка</div>
        <div class="right">{{props.info.delivery_price + props.info.currency}}</div>
    </div>
</template>

<script setup>
import { ref } from "vue"

var props = defineProps(['info'])
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.item {
    flex-direction: row;
    width: 100%;
    padding: rem(22) rem(32);
    box-sizing: border-box;
    display: flex;
    gap: rem(30);
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 20px 20px 20px 5px;
}
.title {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(24);
    color: #212629;
}
.right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: rem(20);
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(18);
    color: #212629;
}
</style>