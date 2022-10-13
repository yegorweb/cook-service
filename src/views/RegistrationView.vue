<template>
    <div class="container">
        <TitleAndBack onBackClick="home">Регистрация</TitleAndBack>
        <div style="display: flex;flex-direction: column;gap: 10px;">
            <Input label="Ваше имя" v-on:val="(a) => {name=a}" />
            <Input label="Ваш телефон" v-on:val="(a) => {phone=a}" />
            <Input label="Пароль" v-on:val="(a) => {password=a}" />
        </div>
        <Button color="#212629" @click="submit" bg="#E9E9E9" :style="'margin-top:'+(30/16)+'rem;'" :width="(320/16)+'rem'">Cохранить</Button>
    </div>
</template>

<script setup>
import TitleAndBack from '../components/TitleAndBack.vue';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import axios from 'axios';
import { ref } from 'vue';

var name = ref('')
var phone = ref('')
var password = ref('')

function submit() {
    axios({
        url: 'http://localhost:3000/registration',
        method: 'post',
        data: {
            name: name.value,
            phone: phone.value,
            password: password.value
        }
    })
}
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
</style>