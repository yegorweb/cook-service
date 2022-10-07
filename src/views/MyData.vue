<template>
    <div class="container">
        <TitleAndBack onBackClick="home">Мои данные</TitleAndBack>
        <div class="inputs">
            <Input placeholder="Имя" label="Как вас зовут?" v-on:val="(a) => {name=a}" />
            <Input placeholder="+7 (900) 000 00-00" label="Телефон" v-on:val="(a) => {phone=a}" />
        </div>
        <div class="buttons">
            <Button color="#212629" bg="#EFEFEF" :width="(320/16)+'rem'">Cохранить</Button>
            <div class="delete">Удалить аккаунт</div>
        </div>
    </div>
</template>

<script setup>
import Button from '../components/Button.vue';
import TitleAndBack from '../components/TitleAndBack.vue';
import Input from '../components/Input.vue';
import { ref } from 'vue';

var name = ref('')
var phone = ref('')
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.container {
    display: flex;
    flex-direction: column;
}
.delete {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: rem(16);
    color: #212629;
    cursor: pointer;
}
.buttons {
    @include adaptive-value(flex-direction, row, row, row, row, column);
    justify-content: space-between;
    display: flex;
    width: 100%;
    gap: rem(30);
    align-items: center;
    margin-top: rem(20);
    user-select: none;
}
.inputs {
    @include adaptive-value(grid-template-columns, 2fr 1fr, 2fr 1fr, 2fr 1fr, 2fr 1fr, 1fr);
    display: grid;
    gap: rem(20);
    margin-top: rem(30);
}
</style>