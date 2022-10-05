<template>
    <div class="item">
        <div class="left">
            <div class="img" :style="'background: #ac662d url('+item.imageSource+') 50% 50% no-repeat;'"></div>
            <div class="info">
                <div class="info-title">{{item.name}}</div>
                <div class="info-additions">{{item.additions.filter(i => i.selected).map(i => i.name).join(', ')}}</div>
            </div>
        </div>
        <div class="right">
            <div class="amount">
                <div @click="item.amount>1 ? item.amount-=1 : item.amount+0" class="amount-minus">-</div>
                <div class="amount-count">{{item.amount}}</div>
                <div @click="item.amount+=1" class="amount-plus">+</div>
            </div>
            <div class="price">{{item.amount * (item.info.price + item.additions.map(i => i.selected ? x+=i.price : x+=0, x=0).reverse()[0])}}₽</div>
        </div>
    </div>
</template>

<script setup>
var props = defineProps(['item'])
var item = props.item
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.item {
    @include adaptive-value(flex-direction, row, row, row, row, column);
    width: 100%;
    padding: rem(22) rem(32);
    box-sizing: border-box;
    display: flex;
    gap: rem(30);
    align-items: flex-start;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 20px 20px 20px 5px;
}
.left {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: rem(20);
}
.right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: rem(20);
}
.img {
    min-width: rem(60);
    min-height: rem(60);
    max-width: rem(60);
    max-height: rem(60);
    border-radius: rem(6);
    background-size: cover !important;
}
.info {
    display: flex;
    flex-direction: column;
    gap: rem(4);

    &-title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(24);
        color: #212629;
        word-break: keep-all;
    } &-additions {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 300;
        font-size: rem(16);
        color: rgba(0, 0, 0, 0.7);
    }
}
.price {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(18);
    color: #212629;
}
.amount {
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
</style>