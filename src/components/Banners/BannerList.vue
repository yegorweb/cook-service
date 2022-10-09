<template>
    <div class="container">
        <template v-for="item in props.list" :key="item">
            <BannerMain v-if="item.type == 'main'" :item="item" />
            <!-- <BannerImg v-else v-bind:item="item" /> -->
        </template>
    </div>
</template>

<script setup>
import BannerMain from '@/components/Banners/BannerMain.vue';
import BannerImg from '@/components/Banners/BannerImg.vue';

var props = defineProps(['list'])
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
</style>