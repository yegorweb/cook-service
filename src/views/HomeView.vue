<template>
	<BannerList v-bind:list="bannerList" />
	<CatalogView />
</template>

<script setup>
import { ref } from 'vue';
import BannerList from '@/components/Banners/BannerList.vue';
import CatalogView from '@/components/Catalog/CatalogView.vue';

// TODO: Менять "Мои данные" на "Зарегистрироваться"

var bannerList = ref([{
	type: 'main',
	title: 'Доставка из ресторана в керамической посуде',
	background: '#212629',
	buttonText: 'Сториз о сервисе',
	buttonLink: 'https://google.com',
	buttonImageSource: 'src/assets/banner-btn.svg',
	imageSource: 'src/assets/banner-img.png'
},
{
	type: 'main',
	title: 'Доставка из ресторана в керамической посуде ff',
	background: '#212629',
	buttonText: 'Сториз о сервисе',
	buttonLink: 'https://google.com',
	buttonImageSource: 'src/assets/banner-btn.svg',
	imageSource: 'src/assets/banner-img.png'
},
{
	type: 'image',
	imageSource: '@/assets/image-banner.jpg'
}])
</script>
