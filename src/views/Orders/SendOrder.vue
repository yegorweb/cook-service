<template>
    <div class="container">
        <TitleAndBack onBackClick="back">Оформление заказа</TitleAndBack>
        <CatalogButtons
            :categories="addresses" 
            :currentCategory="currentMode" 
            :inCatalog="false"
            @changeCategory="changeCategory" 
        />
        <div class="container cont">
            <div class="cont-btns">
                <Payment />
            </div>
            <TextArea placeholder="Комментарий (если есть)" v-on:val="(a) => {comment=a}" />
        </div>
    </div>
</template>

<script setup>
import TitleAndBack from '../../components/TitleAndBack.vue';
import CatalogButtons from "@/components/Catalog/CatalogButtons.vue";
import TextArea from '@/components/TextArea.vue'
import Payment from '../../components/Orders/Payment.vue';
import { reactive, ref } from 'vue';
import axios from 'axios';
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
console.log(addresses)
var currentMode = reactive({category: 'Все'})
var comment = ref('')
function changeCategory(mode) {
    currentMode.category = mode
}
</script>

<style lang="scss" scoped>
@import '@/assets/style';
.cont {
    margin-top: rem(30);
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: rem(30);

    &-btns {
        min-width: 100%;
        width: 100%;
    }
}
</style>