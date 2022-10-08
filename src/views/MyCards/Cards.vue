<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <TitleAndBack onBackClick="back">Привязанные карты</TitleAndBack>
        <div class="items">
            <CardItem v-for="card in cards" :key="card" :card="card" />
        </div>
        <router-link style="text-decoration: none;" to="/create-card"><Button :style="'margin-top: '+(30/16)+'rem;'" color="#212629" bg="#E9E9E9" :width="(320/16)+'rem'">Добавить карту</Button></router-link>
    </div>    
</template>

<script setup>
import TitleAndBack from '@/components/TitleAndBack.vue';
import CardItem from '@/components/CardItem.vue';
import Button from '@/components/Button.vue';

// NOTE: types: mastercard, visa, mir, other
var cards = [{
    type: 'mastercard',
    numbersInEnd: 3456
},
{
    type: 'visa',
    numbersInEnd: 8944
}]
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.items {
    @include adaptive-value(grid-template-columns, 1fr 1fr 1fr, 1fr 1fr 1fr, 1fr 1fr, 1fr 1fr, 1fr);
    display: grid;
    gap: rem(30);
}
</style>