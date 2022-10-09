<template>
    <div class="item">
        <div class="title">Персон</div>
        <div class="right">
            <div class="amount">
                <div @click="persons>1 ? persons-=1 : persons+0" class="amount-minus">-</div>
                <div class="amount-count">{{persons}}</div>
                <div @click="persons+=1" class="amount-plus">+</div>
            </div>
            <div class="price">{{persons}}</div><!-- {{persons * item.amount * (item.info.price + item.additions.map(i => i.selected ? x+=i.price : x+=0, x=0).reverse()[0])}}₽</div> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

var props = defineProps(['persons'])
var persons = ref(props.persons)
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