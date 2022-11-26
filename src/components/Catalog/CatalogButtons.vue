<template>
    <div class="btns container">
        <div class="btns-top" v-if="props.inCatalog">
            <a class="btns-top-item btns-top-item-active" 
                    @click="$emit('changeMode', 'Частным клиентам')"
                    :class="{
                        'btns-top-item-not-selected': props.currentMode.mode != 'Частным клиентам',
                        'btns-top-item-selected': props.currentMode.mode == 'Частным клиентам'
                    }"
            >Частным клиентам</a>
            <a class="btns-top-item" 
                    @click="$emit('changeMode', 'Корпоративные заказы')"
                    :class="{
                        'btns-top-item-not-selected': props.currentMode.mode != 'Корпоративные заказы',
                        'btns-top-item-selected': props.currentMode.mode == 'Корпоративные заказы'
                    }"
            >Корпоративные заказы</a>
        </div>
        <div class="btns-bottom">
            <template v-for="category in categories" :key="category">
                <a 
                    class="btns-bottom-item" 
                    @click="$emit('changeCategory', category)" 
                    :class="{
                        'btns-bottom-item-selected': props.currentCategory.category==(props.inSendOrderPage ? category.name : category), 
                        'btns-bottom-item-not-selected': props.currentCategory.category!=(props.inSendOrderPage ? category.name : category)
                    }"
                >
                    {{props.inSendOrderPage ? category.name : category}}
                </a>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

var props = defineProps({
    categories: {
        required: true
    }, 
    currentCategory: {
        required: true
    }, 
    currentMode: {
        required: false
    },
    inCatalog: {
        required: false,
        default: true
    },
    inSendOrderPage: {
        required: false,
        default: false
    }
})
var categories = ref(props.categories)
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.btns {
    margin-top: rem(120);

    &-top {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: rem(40);
        row-gap: rem(8);
        margin-bottom: rem(24);

        &-item {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: rem(26);
            cursor: pointer;
            transition: all .15s;

            &:hover, &-selected {
                color: #212629;
            } 
            &-not-selected {
                color: rgba(33, 38, 41, 0.5);
            }
        }
    }
    &-bottom {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: rem(10);
        row-gap: rem(10);

        &-item {
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
    }
}
</style>