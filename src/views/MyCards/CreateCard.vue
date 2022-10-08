<template>
    <div class="container">
        <TitleAndBack onBackClick="back">Добавить карту</TitleAndBack>
        <div class="inputs">
            <Input label="Номер карты" placeholder="0000 0000 0000 0000" :val="(a) => {number=a}" />
            <Input label="Действительна до" placeholder="00 / 00" :val="(a) => {actionTime=a}" />
            <Input label="Имя держателя карты" placeholder="IVAN IVANOV" :val="(a) => {name=a}" />
            <Input label="CVC2/CVV2" placeholder="***" :val="(a) => {cvc=a}" />
        </div>
        <Button :style="'margin-top: '+(34/16)+'rem;'" color="#212629" bg="#E9E9E9" :width="(320/16)+'rem'">Добавить карту</Button>
    </div>
</template>

<script setup>
import TitleAndBack from '@/components/TitleAndBack.vue';
import { ref } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
var number = ref('')
var actionTime = ref('')
var name = ref('')
var cvc = ref('')
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.inputs {
    @include adaptive-value(width, 60%, 80%, 100%, 100%, 100%);
    @include adaptive-value(grid-template-columns, 3fr 1fr, 3fr 1fr, 3fr 1fr, 2fr 1fr, 1fr);
    display: grid;
    gap: rem(26);
}
</style>