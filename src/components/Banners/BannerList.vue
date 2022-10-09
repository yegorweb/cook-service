<template>
        <swiper 
            :slidesPerView="1"
            :spaceBetween="30"
            style="align-items: center;"
        >
            <swiper-slide v-for="item in props.list" :key="item"> 
                <BannerMain v-if="item.type == 'main'" :item="item"></BannerMain>
                <BannerImg v-else :item="item"></BannerImg>
            </swiper-slide>
        </swiper>
</template>

<script setup>
import BannerMain from '@/components/Banners/BannerMain.vue';
import BannerImg from '@/components/Banners/BannerImg.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

var props = defineProps(['list'])
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
</style>