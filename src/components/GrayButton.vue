<template>
    <a class="btn">
        <slot></slot>
    </a>
</template>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.btn {
    background: #E9E9E9;
    border-radius: 999px;
    padding: rem(10) rem(20);
    cursor: pointer;
    transition: all .2s;
    
    &-not-selected {
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
    }
    &-selected, &:hover {
        box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.12), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;
    }
}
</style>