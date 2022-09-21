<template>
    <div class="container">
        <div class="text">Для корпоративных заказов обращайтесь по телефону <a href="tel:79454504660" class="text-tel">+7 (945) 450-46-60</a> или на наш <a href="" class="text-wa">WhatsApp</a></div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.container {
    margin-top: rem(60);
}
.text {
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: rem(24);

    &-tel {
        color: #6d7dc5;
        text-decoration: none;
    } &-wa {
        color: #80c46c;
        text-decoration: none;
    }
}
</style>