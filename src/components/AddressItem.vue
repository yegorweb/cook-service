<template>
    <div class="item">
        <div class="item-title">{{address.name}}</div>
        <div class="item-address">{{address.address}}</div>
    </div>
</template>

<script setup>
var props = defineProps(['address'])
var address = props.address
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.item {
    padding: rem(30);
    background: #E9E9E9;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
    border-radius: rem(24) rem(24) rem(24) rem(5);
    transition: all .2s;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: rem(20);
    & > * {
        word-break: keep-all;
    } &-title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(20);
        color: #212629;
    } &-address {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 300;
        font-size: rem(16);
        color: rgba(33, 38, 41, 0.5);
    }
    &:hover {
        box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.12), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;
    }
}
</style>