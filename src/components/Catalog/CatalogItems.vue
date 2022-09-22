<template>
    <div class="items container">
        <template v-for="item in items" :key="item">
            <template v-if="props.currentCategory.category=='Все'||(props.currentCategory.category=='Любимое'&&item.like)||props.currentCategory.category==item.category">
                <CatalogItem v-bind:item="item" />
            </template>
        </template>
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
}
.no {
    margin: auto;
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: rem(22);
}
</style>