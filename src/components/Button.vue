<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="btn" :style="'background: ' + props.bg + '; color: ' + props.color + '; width: ' + props.width + ';'">
        <slot></slot>
    </div>
</template>

<script setup>
var props = defineProps(['bg', 'color', 'width'])
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.btn {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
    border-radius: 999px;
    padding: rem(10) rem(20);
    box-sizing: border-box !important;
    cursor: pointer;
    transition: all .2s;
    text-align: center;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(18);
    user-select: none;
    
    &:hover {
        box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.12), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;
    }
}
</style>