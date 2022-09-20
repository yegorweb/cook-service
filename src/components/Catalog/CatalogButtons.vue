<template>
    <div class="btns container">
        <div class="btns-top">
            <a class="btns-top-item btns-top-item-active" @click="$emit('changeMode', 'Частным клиентам')">Частным клиентам</a>
            <a class="btns-top-item" @click="$emit('changeMode', 'Корпоративные заказы')">Корпоративные заказы</a>
        </div>
        <div class="btns-bottom">
            <template v-for="category in categories" :key="category">
                <a class="btns-bottom-item">
                    {{category}}
                </a>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

var props = defineProps(['categories'])
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

        &-item {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: rem(26);
            color: rgba(33, 38, 41, 0.5);
            cursor: pointer;
            transition: all .15s;

            &:hover {
                color: #212629;
            } 
            &-active {
                color: #212629;
            }
        }
    }
    &-bottom {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: rem(10);
        margin-top: rem(24);
        row-gap: rem(10);

        &-item {
            box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
            background: #E9E9E9;
            border-radius: 999px;
            padding: rem(10) rem(20);
            cursor: pointer;
            transition: all .2s;

            &:hover {
                box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.08), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;                
            }
            &-active {
                box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.08), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;                
            }
        }
    }
}
</style>