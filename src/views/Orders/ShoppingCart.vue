<template>
    <div class="container">
        <TitleAndBack :onBackClick="'home'">5 блюд на 2 530₽</TitleAndBack>
        <Input placeholder="test" label="Test label" v-on:val="(a) => {test=a}" />
    </div>
</template>

<script setup>
import TitleAndBack from '@/components/TitleAndBack.vue';
import { ref } from 'vue';
import Input from '../../components/Input.vue';

var test = ref('')
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';


</style>