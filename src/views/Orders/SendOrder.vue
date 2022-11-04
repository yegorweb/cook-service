<template>
    <div class="container">
        <TitleAndBack onBackClick="back">Оформление заказа</TitleAndBack>
        <CatalogButtons
            :categories="modes" 
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

var modes = ref(['Все', 'Доставлены', 'Отменены'])
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