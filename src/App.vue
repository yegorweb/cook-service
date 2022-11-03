<!-- eslint-disable prettier/prettier -->
<script setup>
import Header from '@/components/Header.vue'
import Footer from './components/Footer.vue';
</script>

<template>
	<Header />
	<Suspense><router-view></router-view></Suspense>
	<Footer />
</template>

<style lang="scss">
	@import '@/assets/style';
	@import '@/assets/hint.css';

	body, html {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		position: relative;
	} body {
		min-height: 100vh;
		overflow-y: visible;
		background: #E5E5E5;
	} 
	//html {
	//	overflow-y: hidden;
	//}

	.no {
		font-family: 'Gilroy';
		font-weight: 700;
		font-size: rem(22);
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	.overflow-disable {
		overflow-y: hidden !important;
	}

	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-Regular.eot');
		src: local('Gilroy Regular'), local('Gilroy-Regular'),
			url('@/assets/fonts/Gilroy-Regular.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-Regular.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-Regular.woff') format('woff'),
			url('@/assets/fonts/Gilroy-Regular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-ExtraboldItalic.eot');
		src: local('Gilroy Extrabold Italic'), local('Gilroy-ExtraboldItalic'),
			url('@/assets/fonts/Gilroy-ExtraboldItalic.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-ExtraboldItalic.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-ExtraboldItalic.woff') format('woff'),
			url('@/assets/fonts/Gilroy-ExtraboldItalic.ttf') format('truetype');
		font-weight: 800;
		font-style: italic;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-Bold.eot');
		src: local('Gilroy Bold'), local('Gilroy-Bold'),
			url('@/assets/fonts/Gilroy-Bold.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-Bold.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-Bold.woff') format('woff'),
			url('@/assets/fonts/Gilroy-Bold.ttf') format('truetype');
		font-weight: bold;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-Black.eot');
		src: local('Gilroy Black'), local('Gilroy-Black'),
			url('@/assets/fonts/Gilroy-Black.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-Black.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-Black.woff') format('woff'),
			url('@/assets/fonts/Gilroy-Black.ttf') format('truetype');
		font-weight: 900;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-Light.eot');
		src: local('Gilroy Light'), local('Gilroy-Light'),
			url('@/assets/fonts/Gilroy-Light.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-Light.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-Light.woff') format('woff'),
			url('@/assets/fonts/Gilroy-Light.ttf') format('truetype');
		font-weight: 300;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-Semibold.eot');
		src: local('Gilroy Semibold'), local('Gilroy-Semibold'),
			url('@/assets/fonts/Gilroy-Semibold.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-Semibold.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-Semibold.woff') format('woff'),
			url('@/assets/fonts/Gilroy-Semibold.ttf') format('truetype');
		font-weight: 600;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-Medium.eot');
		src: local('Gilroy Medium'), local('Gilroy-Medium'),
			url('@/assets/fonts/Gilroy-Medium.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-Medium.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-Medium.woff') format('woff'),
			url('@/assets/fonts/Gilroy-Medium.ttf') format('truetype');
		font-weight: 500;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-MediumItalic.eot');
		src: local('Gilroy Medium Italic'), local('Gilroy-MediumItalic'),
			url('@/assets/fonts/Gilroy-MediumItalic.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-MediumItalic.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-MediumItalic.woff') format('woff'),
			url('@/assets/fonts/Gilroy-MediumItalic.ttf') format('truetype');
		font-weight: 500;
		font-style: italic;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-BlackItalic.eot');
		src: local('Gilroy Black Italic'), local('Gilroy-BlackItalic'),
			url('@/assets/fonts/Gilroy-BlackItalic.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-BlackItalic.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-BlackItalic.woff') format('woff'),
			url('@/assets/fonts/Gilroy-BlackItalic.ttf') format('truetype');
		font-weight: 900;
		font-style: italic;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-UltraLight.eot');
		src: local('Gilroy UltraLight'), local('Gilroy-UltraLight'),
			url('@/assets/fonts/Gilroy-UltraLight.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-UltraLight.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-UltraLight.woff') format('woff'),
			url('@/assets/fonts/Gilroy-UltraLight.ttf') format('truetype');
		font-weight: 200;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-RegularItalic.eot');
		src: local('Gilroy Regular Italic'), local('Gilroy-RegularItalic'),
			url('@/assets/fonts/Gilroy-RegularItalic.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-RegularItalic.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-RegularItalic.woff') format('woff'),
			url('@/assets/fonts/Gilroy-RegularItalic.ttf') format('truetype');
		font-weight: normal;
		font-style: italic;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-SemiboldItalic.eot');
		src: local('Gilroy Semibold Italic'), local('Gilroy-SemiboldItalic'),
			url('@/assets/fonts/Gilroy-SemiboldItalic.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-SemiboldItalic.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-SemiboldItalic.woff') format('woff'),
			url('@/assets/fonts/Gilroy-SemiboldItalic.ttf') format('truetype');
		font-weight: 600;
		font-style: italic;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-HeavyItalic.eot');
		src: local('Gilroy Heavy Italic'), local('Gilroy-HeavyItalic'),
			url('@/assets/fonts/Gilroy-HeavyItalic.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-HeavyItalic.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-HeavyItalic.woff') format('woff'),
			url('@/assets/fonts/Gilroy-HeavyItalic.ttf') format('truetype');
		font-weight: 900;
		font-style: italic;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-Extrabold.eot');
		src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
			url('@/assets/fonts/Gilroy-Extrabold.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-Extrabold.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-Extrabold.woff') format('woff'),
			url('@/assets/fonts/Gilroy-Extrabold.ttf') format('truetype');
		font-weight: 800;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-BoldItalic.eot');
		src: local('Gilroy Bold Italic'), local('Gilroy-BoldItalic'),
			url('@/assets/fonts/Gilroy-BoldItalic.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-BoldItalic.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-BoldItalic.woff') format('woff'),
			url('@/assets/fonts/Gilroy-BoldItalic.ttf') format('truetype');
		font-weight: bold;
		font-style: italic;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-UltraLightItalic.eot');
		src: local('Gilroy UltraLight Italic'), local('Gilroy-UltraLightItalic'),
			url('@/assets/fonts/Gilroy-UltraLightItalic.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-UltraLightItalic.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-UltraLightItalic.woff') format('woff'),
			url('@/assets/fonts/Gilroy-UltraLightItalic.ttf') format('truetype');
		font-weight: 200;
		font-style: italic;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-LightItalic.eot');
		src: local('Gilroy Light Italic'), local('Gilroy-LightItalic'),
			url('@/assets/fonts/Gilroy-LightItalic.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-LightItalic.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-LightItalic.woff') format('woff'),
			url('@/assets/fonts/Gilroy-LightItalic.ttf') format('truetype');
		font-weight: 300;
		font-style: italic;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-Heavy.eot');
		src: local('Gilroy Heavy'), local('Gilroy-Heavy'),
			url('@/assets/fonts/Gilroy-Heavy.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-Heavy.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-Heavy.woff') format('woff'),
			url('@/assets/fonts/Gilroy-Heavy.ttf') format('truetype');
		font-weight: 900;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-Thin.eot');
		src: local('Gilroy Thin'), local('Gilroy-Thin'),
			url('@/assets/fonts/Gilroy-Thin.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-Thin.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-Thin.woff') format('woff'),
			url('@/assets/fonts/Gilroy-Thin.ttf') format('truetype');
		font-weight: 100;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'Gilroy';
		src: url('@/assets/fonts/Gilroy-ThinItalic.eot');
		src: local('Gilroy Thin Italic'), local('Gilroy-ThinItalic'),
			url('@/assets/fonts/Gilroy-ThinItalic.eot?#iefix') format('embedded-opentype'),
			url('@/assets/fonts/Gilroy-ThinItalic.woff2') format('woff2'),
			url('@/assets/fonts/Gilroy-ThinItalic.woff') format('woff'),
			url('@/assets/fonts/Gilroy-ThinItalic.ttf') format('truetype');
		font-weight: 100;
		font-style: italic;
	}

</style>