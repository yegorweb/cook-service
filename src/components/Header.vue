<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable prettier/prettier -->
<template>
    <div class="box">
        <div class="container">
            <img src="@/assets/logo.svg" alt="logo" class="logo" />
            <div class="btns">
                <a href="" class="wa button">
                    <img src="@/assets/wa.svg" alt="WhatsApp" class="wa-img">
                    <div class="wa-text">WhatsApp</div>
                </a>
                <button class="btn button">Заказать 1 блюдо за 430₽</button>
                <button class="account button" @click="menu=!menu">
                    <img src="@/assets/account.svg" alt="" class="account-img">
                </button>
            </div>
        </div>
        <div class="container menu-cont" v-show="menu">
            <div class="menu">
                <img src="@/assets/close-menu.svg" alt="" class="menu-closeBtn" @click="menu=!menu">
                <div class="menu-buttons">
                    <router-link to="/cart" class="menu-buttons-item">
                        <img src="@/assets/cart.svg" alt="" class="menu-buttons-item-img">
                        <div class="menu-buttons-item-text">Корзина</div>
                    </router-link>
                    <div class="menu-buttons-item">
                        <img src="@/assets/orders.svg" alt="" class="menu-buttons-item-img">
                        <div class="menu-buttons-item-text">Мои заказы</div>
                    </div>
                    <div class="menu-buttons-item">
                        <img src="@/assets/deposit.svg" alt="" class="menu-buttons-item-img">
                        <div class="menu-buttons-item-text">Депозит</div>
                        <div class="menu-buttons-item-text-deposit">27 580₽</div>
                    </div>
                    <div class="menu-buttons-item">
                        <img src="@/assets/cards.svg" alt="" class="menu-buttons-item-img">
                        <div class="menu-buttons-item-text">Привязанные карты</div>
                    </div>
                    <div class="menu-buttons-item">
                        <img src="@/assets/map.svg" alt="" class="menu-buttons-item-img">
                        <div class="menu-buttons-item-text">Мои адреса</div>
                    </div>
                    <div class="menu-buttons-item">
                        <img src="@/assets/user-data.svg" alt="" class="menu-buttons-item-img">
                        <div class="menu-buttons-item-text">Мои данные</div>
                    </div>
                    <div class="menu-buttons-item">
                        <img src="@/assets/logout.svg" alt="" class="menu-buttons-item-img">
                        <div class="menu-buttons-item-text">Выйти</div>
                    </div>
                </div>
                <div class="menu-waBtn">Обратиться в WhatsApp</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

var menu = ref(false)
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.menu {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    margin-top: rem(10);
    background: #E9E9E9;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.05), 60px 60px 80px rgba(0, 0, 0, 0.35);
    border-radius: rem(40) rem(40) rem(40)rem(5);
    padding: rem(20);
    width: rem(320);

    &-closeBtn {
        float: right;
        height: rem(20);
        padding: rem(4);
        cursor: pointer;
    }
    &-waBtn {
        background: #25D366;
        border-radius: 999px;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(18);
        color: #FFFFFF;
        text-align: center;
        padding: rem(10) 0;
        margin-top: rem(30);
        cursor: pointer;
        transition: all .15s;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;

        &:hover {
            box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.08), 1px 1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;
        }
    }
    &-buttons {
        display: flex;
        flex-direction: column;
        margin-top: rem(44);

        &-item {
            padding: rem(20) 0;
            display: flex;
            flex-direction: row;
            gap: rem(20);
            align-items: center;
            border-top: 1px solid #FFFFFF;
            position: relative;
            cursor: pointer;
            &-img {
                width: rem(20);
            }
            &-text {
                position: absolute;
                left: rem(40);
                top: 50%;
                transform: translateY(-50%);
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 300;
                font-size: rem(18);
                color: #212629;
                &-deposit {
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 300;
                    font-size: rem(18);
                    color: #FE9102;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            &:last-child {
                border-bottom: 1px solid #FFFFFF;                
            }
        }
    }
    &-cont {
        position: relative;
    }
}
.box {
    padding-top: rem(40);
    margin-bottom: rem(60);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.logo {
    height: rem(36);
    width: auto;
}
.btns {
    display: flex;
    flex-direction: row;
    gap: rem(20);
    align-items: center;
}
.button {
    cursor: pointer;
    transition: all .2s;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;

    &:hover {
        box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.08), 1px 1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;

    }
}
.wa {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: rem(10);
    height: rem(40);
    padding: 0 rem(26);
    align-items: center;
    border-radius: 9999px;
    background: #25D366;
    text-decoration: none;
    @include adaptive-value(display, flex, flex, flex, none, none);
    
    &-img {
        height: rem(20);
        width: auto;
    }
    &-text {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(18);
        color: #FFFFFF;
    }
}
.btn {
    height: rem(40);
    border-radius: 999px;
    padding: 0 rem(26);
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(18);
    color: #212629;
    border: none;
    @include adaptive-value(display, block, block, block, none, none);
}
.account {
    height: rem(40);
    width: rem(40);
    border-radius: 50%;
    align-items: center;
    border: none;

    &-img {
        height: rem(20);
        margin: 0 auto;
    }
}
</style>