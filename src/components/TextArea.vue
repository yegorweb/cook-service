<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <label>{{props.label}}</label>
        <textarea :placeholder="props.placeholder" type="text" v-model="value" @input="$emit('val', value)"></textarea>
    </div>
</template>

<script setup>
import { ref } from "vue"

var props = defineProps(['placeholder', 'label'])
var value = ref('')
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    gap: rem(5);
}
label {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: rem(16);
    color: rgba(0, 0, 0, 0.5);
}
textarea {
    width: 100%;
    background: #E9E9E9;
    border: 1px solid #FFFFFF;
    border-radius: rem(8);
    height: rem(100);
    box-sizing: border-box;
    padding: rem(14);
    font-family: 'Gilroy';
    font-weight: 700;
    font-style: normal;
    font-size: rem(18);
    color: #212629;
    max-width: 100%;
    min-width: 100%;

    &::placeholder {
        font-weight: 400;
        font-size: rem(16);
    }
    &:focus {
        background: #E9E9E9;
        border: 1px solid #FFFFFF;
        outline: 0;
    }
}
</style>