<template>
    <div class="items container">
        <template v-for="item in items" :key="item">
            <template v-if="props.currentCategory.category=='Все'||(props.currentCategory.category=='Любимое'&&item.like)||props.currentCategory.category==item.category">
                <CatalogItem :item="item" />
            </template>
        </template>
        <div v-if="props.currentCategory.category != 'Все' &&
        items.every(t => t.category != props.currentCategory.category) &&
        props.currentCategory.category!='Любимое'" class="no">Отсутсвует 😱</div>
        <div v-if="props.currentCategory.category=='Любимое' && items.every(t => !t.like)" class="no">Отсутсвует 😱</div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import CatalogItem from "./CatalogItem.vue";

var props = defineProps(['items', 'currentCategory'])
var items = ref(props.items)
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.items {
    display: grid;
    @include adaptive-value(grid-template-columns, 1fr 1fr 1fr, 1fr 1fr 1fr, 1fr 1fr, 1fr, 1fr);
    margin-top: rem(60);
    column-gap: rem(30);
    position: relative;
}
.no {
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: rem(22);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
</style>