<template>
    <div class="container">
        <template v-for="item in this.props.list" :key="item">
            <BannerMain v-if="item.type == 'main'" :item="item" />
            <!-- <BannerImg v-else v-bind:item="item" /> -->
        </template>
    </div>
</template>

<script setup>
import BannerMain from './BannerMain.vue';
import BannerImg from './BannerImg.vue';

var props = defineProps(['list'])
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.container {
    margin-top: rem(60);
}
</style>