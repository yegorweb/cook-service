<template>
    <div class="container">
        <TitleAndBack onClickBack="back">Создать адрес</TitleAndBack>
        <div class="inputs">
            <Input label="Название адреса" placeholder="Например: Дом" v-on:val="(a) => {name=a}" />
            <Input label="Адрес" placeholder="Например: г. Москва, Ленинский проспект, 93к2, кв. 91" v-on:val="(a) => {address=a}" />
            <TextArea label="Комментарий (если есть)" placeholder="Например: Оставляйте под дверью" v-on:val="(a) => {comment=a}" />
        </div>
        <div class="buttons">
            <Button color="#212629" bg="#E9E9E9" :width="(320/16)+'rem'">Cохранить</Button>
            <div class="delete">Удалить адрес</div>
        </div>
    </div>
</template>

<script setup>
import Input from '../../components/Input.vue';
import TitleAndBack from '../../components/TitleAndBack.vue';
import TextArea from '../../components/TextArea.vue';
import { ref } from 'vue';
import Button from '../../components/Button.vue';

var name = ref('')
var address = ref('')
var comment = ref('')
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.inputs {
    display: flex;
    flex-direction: column;
    gap: rem(16);
}
.buttons {
    @include adaptive-value(flex-direction, row, row, row, row, column);
    justify-content: space-between;
    display: flex;
    width: 100%;
    gap: rem(30);
    align-items: center;
    margin-top: rem(30);
    user-select: none;
}
.delete {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: rem(16);
    color: #212629;
    cursor: pointer;
}
</style>
