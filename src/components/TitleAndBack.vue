<template>
    <div class="title">
        <img class="title-backbtn" @click="props.onBackClick == 'home' ? $router.push('/') : $router.go(-1)" src="@/assets/back.svg" alt="">
        <div class="title-text"><slot></slot></div>
    </div>
</template>

<script setup>
var props = defineProps(['onBackClick', 'title'])
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.title {
    position: relative;
    align-items: center;
    margin-bottom: rem(30);
    &-backbtn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: rem(-38);
        height: rem(14);
        padding: rem(6);
        cursor: pointer;
    }
    &-text {
        font-family: 'Gilroy';
        font-weight: 700;
        font-size: rem(32);
        color: #212629;
    }
}
</style>