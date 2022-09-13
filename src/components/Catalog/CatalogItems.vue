<template>
    <div class="items container">
        <template v-for="item in items" :key="item">
            <CatalogItem v-bind:item="item" />
        </template>
    </div>
</template>

<script setup>
import { ref } from "vue"
import CatalogItem from "./CatalogItem.vue";

var props = defineProps(['items'])
var items = ref(props.items)
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';


</style>