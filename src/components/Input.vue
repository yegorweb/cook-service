<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <label>{{props.label}}</label>
        <div class="input">
            <input 
                :data-tel-input="props.type=='tel'" 
                :type="props.type" 
                :maxlength="props.maxlength" 
                :id="props.inputID"
                :placeholder="props.placeholder"
                
                v-model="value" 
                @input="$emit('val', value)" 
            />
            <img v-if="props.type=='password'" class="password-control" @click="changeVisibile()" :src="getURL()" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

var value = ref('')
var visible = ref(false)
function getURL() {
    return visible.value ? import.meta.env.VITE_API_URL + 'visible.png' : import.meta.env.VITE_API_URL + 'invisible.png'
}
function changeVisibile() {
    if (visible.value) {
        document.getElementById(props.inputID).setAttribute('type', 'password');
    } else {
        document.getElementById(props.inputID).setAttribute('type', 'text');
    }
    visible.value = !visible.value
}
var props = defineProps({
    placeholder: {
        type: String,
        required: false
    },
    label: {
        type: String,
        required: true
    },
    inputID: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false,
        default: 'text'
    },
    maxlength: {
        type: String,
        required: false,
    }
})
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
input {
    width: 100%;
    background: #E9E9E9;
    border: 1px solid #FFFFFF;
    border-radius: rem(8);
    height: rem(44);
    box-sizing: border-box;
    padding: rem(14);
    font-family: 'Gilroy';
    font-weight: 700;
    font-style: normal;
    font-size: rem(18);
    display: flex;
    color: #212629;

    &::placeholder {
        font-weight: 400;
        font-size: rem(16);
    }
    &:focus {
        background: #E9E9E9;
        border: 1px solid #FFFFFF;
        outline: 0;
    }
} .input {
    width: 100%;
    position: relative;
} .password-control {
    position: absolute;
    right: rem(14);
    height: rem(26);
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
</style>