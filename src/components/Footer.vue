<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="item">
            <img src="@/assets/wa-footer.svg" alt="" class="item-img">
            <a href="" class="item-text wa">WhatsApp</a>
        </div>
        <div class="item">
            <img src="@/assets/f-img.svg" alt="" class="item-img">
            <a href="tel:79454504660" class="item-text">+7 (945) 450-46-60</a>
        </div>
        <div class="item">
            <img src="@/assets/email.svg" alt="" class="item-img">
            <a href="" class="item-text">Написать на E-mail</a>
        </div>
        <div class="item">
            <img src="@/assets/private-menu.svg" alt="" class="item-img">
            <a href="" class="item-text">Меню для частных клиентов</a>
        </div>
        <div class="item">
            <img src="@/assets/corporate-menu.svg" alt="" class="item-img">
            <a href="" class="item-text">Меню для корпоративных заказов</a>
        </div>
        <div class="item">
            <img src="@/assets/about-delivery.svg" alt="" class="item-img">
            <a href="" class="item-text">О доставке</a>
        </div>
        <div class="item">
            <img src="@/assets/privacy-policy.svg" alt="" class="item-img">
            <router-link to="privacy-policy" href="" class="item-text">Политика конфиденциальности</router-link>
        </div>
        <div class="item">
            <img src="@/assets/terms-of-use.svg" alt="" class="item-img">
            <router-link to="terms-of-use" href="" class="item-text">Пользовательское соглашение</router-link>
        </div>
        <div class="item">
            <a class="item-text">© 2022 COOK service</a>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import '@/assets/style.scss';
.container {
    display: grid;
    @include adaptive-value(grid-template-columns, 1fr 1fr 1fr, 1fr 1fr 1fr, 1fr 1fr, 1fr 1fr, 1fr);
    row-gap: rem(20);
    column-gap: rem(30);
    margin-top: rem(130);
    margin-bottom: rem(70);
}
.item {
    padding-top: rem(20);
    border-top: rem(1) solid rgba(22, 22, 22, 0.08);
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: rem(20);
    align-items: center;

    &-img {
        height: rem(20);
    }
    &-text {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 300;
        font-size: rem(18);
        color: #212629;
        text-decoration: none;
        cursor: pointer;
        transition: all .3s;
        
        &:hover {
            text-shadow: 0 0 rem(20) #808080;
        }
    }
}
.wa {
    color: #25D366;
}
</style>