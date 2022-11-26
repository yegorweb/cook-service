<template>
    <div class="container">
        <TitleAndBack onBackClick="home">Регистрация</TitleAndBack>
        <div style="display: flex;flex-direction: column;gap: 10px;">
            <div class="warn" v-show="name_mistake">
                Слишком короткое имя
            </div>
            <Input 
                label="Ваше имя" 
                placeholder="Иван" 
                maxlength="28" 
                inputID="name" 
                v-on:val="(a) => {name=a}" 
            />
            <div class="warn" v-show="phone_mistake">
                Слишком короткий номер телефона
            </div>
            <Input 
                label="Ваш телефон" 
                placeholder="+7 (___) ___ __-__" 
                maxlength="22" 
                type="tel" 
                inputID="phone" 
                v-on:val="(a) => {fullphone=a}" 
            />
            <div class="warn" v-show="password_mistake">
                Пароль должен содержать минимум 1 маленькую и 1 большую <strong>латинские буквы</strong>, 1 цифру, длина пароля должна быть больше или равной 8
            </div>
            <Input 
                label="Пароль" 
                placeholder="************" 
                maxlength="30" 
                type="password" 
                inputID="password" 
                v-on:val="(a) => {password=a}" 
            />
        </div>
        <Button @click="submit" :marginTop="30">Cохранить</Button>
    </div>
</template>

<script setup>
import TitleAndBack from '../components/TitleAndBack.vue';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/userStore.js'

var name = ref('')
var fullphone = ref('')
var phone = () => { return fullphone.value.replace(/[\D]+/g, '')}
var password = ref('')

var name_mistake = ref(false)
var phone_mistake = ref(false)
var password_mistake = ref(false)

var userStore = useUserStore()

function submit() {
    name_mistake.value = false 
    phone_mistake.value = false 
    password_mistake.value = false
    if (
        name.value.length > 1 &&
        phone().length >= 11 &&
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password.value)
    ) {
        userStore.registration({
            name: name.value,
            fullphone: fullphone.value,
            phone: phone(),
            password: password.value
        })
    } else {
        console.log(phone(), fullphone.value.replace(/[\D]+/g, ''))
        if (name.value.length < 2) name_mistake.value = true 
        if (phone().length < 11) phone_mistake.value = true 
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password.value)) password_mistake.value = true
    }
}
onMounted(() => {
    var phoneInputs = document.querySelectorAll('input[data-tel-input=true]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.warn {
    padding: rem(14);
    border-radius: rem(6);
    background: rgb(194, 39, 39);
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: rem(16);
    color: #FFFFFF;
}
</style>