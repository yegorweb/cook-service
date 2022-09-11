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
                <button class="account button">
                    <img src="@/assets/account.svg" alt="" class="account-img">
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.box {
    padding-top: rem(40);
    display: flex;
    justify-content: center;
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