<template>
    <div class="container">
        <TitleAndBack onBackClick="back">Мои адреса</TitleAndBack>
        <div class="items">
            <AddressItem v-for="address in addresses" :key="address" :address="address" />
        </div>
        <router-link style="text-decoration: none;" to="/create-address"><Button :marginTop="30">Добавить адрес</Button></router-link>
    </div>
</template>

<script setup>
import TitleAndBack from '@/components/TitleAndBack.vue';
import AddressItem from '@/components/AddressItem.vue';
import Button from '@/components/Button.vue';

var addresses = [{
    name: 'Дом',
    address: 'Меркурий Сити Тауэр, кв./офис 62, этаж 25'
},
{
    name: 'Работа',
    address: 'Меркурий Сити Тауэр, кв./офис 62, этаж 25'
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