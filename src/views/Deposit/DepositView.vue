<template>
    <div class="container">
        <TitleAndBack onBackClick="back">Депозит</TitleAndBack>
        <div class="deposit" :style="'font-size: ' + getDepositFontSize() + 'px;line-height: ' + (getDepositFontSize() - 10) + 'px;'">
            {{getDeposit()}}
        </div>
        <div class="text">на вашем счету</div>
        <Button bg="#FE9102" :marginTop="30" color="#FFFFFF">Пополнить депозит</Button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "../../components/Button.vue";
import TitleAndBack from "../../components/TitleAndBack.vue";

var deposit = ref(27580)
function getDeposit() {
    return deposit.value.toString().split('.').length == 1 ? 
           deposit.value.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + '₽' :
           deposit.value.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + '.' + deposit.value.toString().split('.')[1] + '₽'
}
function getDepositFontSize() {
    return document.querySelector('.container').clientWidth / getDeposit().length * 1.7
}
window.onresize = () => {
    document.querySelectorAll('.deposit').forEach((el) => {
        el.style['font-size'] = getDepositFontSize()  + 'px'
        el.style['line-height'] = (getDepositFontSize() - 10) + 'px'
    })
}
</script>

<style lang="scss" scoped>
@import '@/assets/style';
.deposit {
    font-family: 'Gilroy';
    font-style: normal;
    width: 100%;
    font-weight: 700;
    word-break: break-all;
    color: #212629;
}
.text {
    margin-top: rem(20);
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: rem(32);
    color: #212629;
}
</style>