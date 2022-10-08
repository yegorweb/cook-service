<template>
    <div class="item">
        <img :src="getImage()" alt="" class="img">
        <div class="number">**** {{card.numbersInEnd}}</div>
    </div>
</template>

<script setup>
var props = defineProps(['card'])
var card = props.card
function getImage() {
    switch (card.type) {
        case 'mastercard':
            return 'public/mastercard.svg'
        case 'visa':
            return 'public/visa.svg'
        case 'mir':
            return 'public/mir.png'
        default:
            return 'public/card.png'
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.item {
    aspect-ratio: 86 / 54;
    box-sizing: border-box;
    padding: rem(30);
    background: #E9E9E9;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
    border-radius: rem(24) rem(24) rem(24) rem(5);
    transition: all .2s;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    cursor: pointer;
    gap: rem(20);

    &:hover {
        box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.12), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;
    }
} .img {
    height: rem(30);
} .number {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(20);
    color: #212629;
    word-break: break-all;
}
</style>