<template>
    <div class="container">
        <TitleAndBack :onBackClick="'home'">Политика конфиденциальности</TitleAndBack>
        <div class="text">
            <div class="text-paragraph">
                <div class="text-paragraph-title">1. Что регулирует настоящая политика конфиденциальности </div>
                <div class="text-paragraph-text">
                    <div class="text-paragraph-text-block">Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей информации, включая персональные данные в понимании применимого законодательства (далее — «Персональная информация»), которую ООО «ЯНДЕКС» и/или его аффилированные лица, в том числе входящие в одну группу с ООО «ЯНДЕКС» (далее — «Яндекс»), могут получить о Вас в процессе использования Вами любых сайтов, программ, продуктов и/или сервисов Яндекса (далее вместе — «Сервисы»), информацию о которых Вы можете найти на сайтах yandex.ru, yandex.com, yandex.ua, yandex.by, yandex.kz, yandex.com.tr, yandex.co.il и других принадлежащих Яндексу сайтах (далее вместе — «Сайты»), а также в ходе исполнения Яндексом / его аффилированными лицами любых соглашений и договоров, заключенных с Вами в связи с использованием Вами Сервисов. Яндекс может также получать Персональную информацию от своих партнеров (далее — «Партнеры»), сайты, программы, продукты или сервисы которых Вы используете (например, от рекламодателей Яндекса или служб такси) из других источников с общедоступными</div>
                </div>
            </div>
            <div class="text-paragraph">
                <div class="text-paragraph-title">1. Что регулирует настоящая политика конфиденциальности </div>
                <div class="text-paragraph-text">
                    <div class="text-paragraph-text-block">Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей информации, включая персональные данные в понимании применимого законодательства (далее — «Персональная информация»), которую ООО «ЯНДЕКС» и/или его аффилированные лица, в том числе входящие в одну группу с ООО «ЯНДЕКС» (далее — «Яндекс»), могут получить о Вас в процессе использования Вами любых сайтов, программ, продуктов и/или сервисов Яндекса (далее вместе — «Сервисы»), информацию о которых Вы можете найти на сайтах yandex.ru, yandex.com, yandex.ua, yandex.by, yandex.kz, yandex.com.tr, yandex.co.il и других принадлежащих Яндексу сайтах (далее вместе — «Сайты»), а также в ходе исполнения Яндексом / его аффилированными лицами любых соглашений и договоров, заключенных с Вами в связи с использованием Вами Сервисов. Яндекс может также получать Персональную информацию от своих партнеров (далее — «Партнеры»), сайты, программы, продукты или сервисы которых Вы используете (например, от рекламодателей Яндекса или служб такси) из других источников с общедоступными</div>
                </div>
            </div>
            <div class="text-paragraph">
                <div class="text-paragraph-title">1. Что регулирует настоящая политика конфиденциальности </div>
                <div class="text-paragraph-text">
                    <div class="text-paragraph-text-block">Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей информации, включая персональные данные в понимании применимого законодательства (далее — «Персональная информация»), которую ООО «ЯНДЕКС» и/или его аффилированные лица, в том числе входящие в одну группу с ООО «ЯНДЕКС» (далее — «Яндекс»), могут получить о Вас в процессе использования Вами любых сайтов, программ, продуктов и/или сервисов Яндекса (далее вместе — «Сервисы»), информацию о которых Вы можете найти на сайтах yandex.ru, yandex.com, yandex.ua, yandex.by, yandex.kz, yandex.com.tr, yandex.co.il и других принадлежащих Яндексу сайтах (далее вместе — «Сайты»), а также в ходе исполнения Яндексом / его аффилированными лицами любых соглашений и договоров, заключенных с Вами в связи с использованием Вами Сервисов. Яндекс может также получать Персональную информацию от своих партнеров (далее — «Партнеры»), сайты, программы, продукты или сервисы которых Вы используете (например, от рекламодателей Яндекса или служб такси) из других источников с общедоступными</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.container {
    display: flex;
    flex-direction: column;

    & * {
        font-family: 'Gilroy';
        font-style: normal;
        color: #212629;
    }
}
.text {
    display: flex;
    flex-direction: column;
    gap: rem(30);

    &-paragraph {
        display: flex;
        flex-direction: column;
        gap: rem(20);

        &-title {
            font-weight: 700;
            font-size: rem(20);
        }
        &-text {
            display: flex;
            flex-direction: column;
            gap: rem(16);

            &-block {
                font-weight: 300;
                font-size: rem(17);
                //color: rgba(33, 38, 41, 0.5);
            }
        }
    }
}
</style>

<script setup>
import TitleAndBack from '../components/TitleAndBack.vue';

</script>