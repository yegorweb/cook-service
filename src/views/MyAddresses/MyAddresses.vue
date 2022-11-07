<template>
    <div class="container">
        <TitleAndBack onBackClick="back">Мои адреса</TitleAndBack>
        <div v-if="addresses.length != 0" class="items">
            <AddressItem v-for="address in addresses" :key="address" :address="address" />
        </div>
        <div v-else class="no">Отсутсвуют 😱</div>
        <router-link style="text-decoration: none;" to="/create-address"><Button :marginTop="30">Добавить адрес</Button></router-link>
    </div>
</template>

<script setup>
import TitleAndBack from '@/components/TitleAndBack.vue';
import AddressItem from '@/components/AddressItem.vue';
import Button from '@/components/Button.vue';
import axios from 'axios';
import { ref } from 'vue';
import { showToast, showToastFromServerResponse } from '../../assets/show-toast';

var addresses
await axios.get('http://localhost:3000/get-addresses/?id=635692d5dc2f8a2f4a5358cb')
    .then((res) => {
        addresses = ref(res.data)
    })
    .catch((err) => {
        if (err.response) {
            showToastFromServerResponse(err.response.data)
        // } else if (err.request) {
        //     showToastFromServerResponse(err.request)
        } else {
            showToast('Нет соединения с сервером. Проверьте подключение к интернету.', 'error')
        }
    })
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.items {
    @include adaptive-value(grid-template-columns, 1fr 1fr 1fr, 1fr 1fr 1fr, 1fr 1fr, 1fr 1fr, 1fr);
    display: grid;
    gap: rem(30);
}
</style>