<template>
    <div class="box">
        <!-- <div class="box2"> -->
        <div class="item">
            <div class="top" :style="'background: #ac662d url('+item.imageSource+') 50% 50% no-repeat;'">
                <div class="cont top-container">
                    <div class="top-topBar">
                        <div class="like" @click="item.like=!item.like">
                            <svg v-if="item.like" class="like" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 0.237305C2.5 0.237305 0 2.7373 0 5.7373C0 7.7373 1.5 9.7373 3.4 11.7373C5.3 13.7373 7.6 15.7373 9.4 17.5373C9.7 17.8373 10.2 17.8373 10.5 17.5373C12.3 15.7373 14.7 13.7373 16.5 11.7373C18.3 9.7373 19.9 7.8373 19.9 5.7373C19.9 2.7373 17.4 0.237305 14.4 0.237305C12.7 0.237305 11.1 1.1373 9.9 2.7373C8.8 1.1373 7.2 0.237305 5.5 0.237305ZM5.5 1.7373C7 1.7373 8.2 2.5373 9.4 4.4373C9.6 4.8373 10.1 4.9373 10.4 4.6373C10.5 4.5373 10.6 4.5373 10.6 4.4373C11.8 2.5373 13 1.7373 14.5 1.7373C16.7 1.7373 18.5 3.5373 18.5 5.7373C18.5 6.9373 17.3 8.7373 15.5 10.6373C13.9 12.3373 11.8 14.1373 10 15.9373C8.2 14.1373 6.2 12.3373 4.5 10.6373C2.7 8.7373 1.5 6.9373 1.5 5.7373C1.5 3.5373 3.3 1.7373 5.5 1.7373Z" fill="white"/>
                                <path d="M5.5 1.7373C7 1.7373 8.2 2.5373 9.4 4.4373C9.6 4.8373 10.1 4.9373 10.4 4.6373C10.5 4.5373 10.6 4.5373 10.6 4.4373C11.8 2.5373 13 1.7373 14.5 1.7373C16.7 1.7373 18.5 3.5373 18.5 5.7373C18.5 6.9373 17.3 8.7373 15.5 10.6373C13.9 12.3373 11.8 14.1373 10 15.9373C8.2 14.1373 6.2 12.3373 4.5 10.6373C2.7 8.7373 1.5 6.9373 1.5 5.7373C1.5 3.5373 3.3 1.7373 5.5 1.7373Z" fill="#F03434"/>
                            </svg>                        
                            <svg v-else class="like" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 0.237305C2.5 0.237305 0 2.7373 0 5.7373C0 7.7373 1.5 9.7373 3.4 11.7373C5.3 13.7373 7.6 15.7373 9.4 17.5373C9.7 17.8373 10.2 17.8373 10.5 17.5373C12.3 15.7373 14.7 13.7373 16.5 11.7373C18.3 9.7373 19.9 7.8373 19.9 5.7373C19.9 2.7373 17.4 0.237305 14.4 0.237305C12.7 0.237305 11.1 1.1373 9.9 2.7373C8.8 1.1373 7.2 0.237305 5.5 0.237305ZM5.5 1.7373C7 1.7373 8.2 2.5373 9.4 4.4373C9.6 4.8373 10.1 4.9373 10.4 4.6373C10.5 4.5373 10.6 4.5373 10.6 4.4373C11.8 2.5373 13 1.7373 14.5 1.7373C16.7 1.7373 18.5 3.5373 18.5 5.7373C18.5 6.9373 17.3 8.7373 15.5 10.6373C13.9 12.3373 11.8 14.1373 10 15.9373C8.2 14.1373 6.2 12.3373 4.5 10.6373C2.7 8.7373 1.5 6.9373 1.5 5.7373C1.5 3.5373 3.3 1.7373 5.5 1.7373Z" fill="white"/>
                            </svg>                        
                        </div>
                        <img src="@/assets/close.svg" @click="$emit('closeFullItem')" alt="" class="close">
                    </div>
                    <div class="peculiarities">
                        <div v-for="peculiaritie in item.peculiarities" :key="peculiaritie" class="peculiarities-item hint--bottom-right" :aria-label="peculiaritie.name">
                            <img :src="peculiaritie.imageSource" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="middle cont">
                <div class="title">{{item.name}}</div>
                <div class="info">
                    <div>{{item.info.weight}}</div>
                    <div>{{item.info.calories}}</div>
                    <div class="price">{{item.info.price}}₽</div>
                </div>
                <div class="desc">{{item.description}}</div>
                <div class="additions">
                    <div class="additions-title">Дополнительно:</div>
                    <div class="additions-items">
                        <div class="additions-item" v-for="addition in item.additions" :key="addition">
                            <div class="additions-item-name">{{addition.name}}</div>
                            <div class="additions-item-right">
                                <div class="additions-item-price">{{(addition.price==0?'':'+ ')+ addition.price + '₽'}}</div>
                                <input class="additions-item-checkbox" type="checkbox" :disabled="addition.price==0" v-model="addition.selected">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom cont">
                <div class="btn">
                    <div @click="item.amount>1 ? item.amount-=1 : item.amount+0" class="btn-minus">-</div>
                    <div class="btn-count">{{item.amount}}</div>
                    <div @click="item.amount+=1" class="btn-plus">+</div>
                </div>
                <a class="add"><div>Добавить {{item.amount * (item.info.price + item.additions.map(i => i.selected ? x+=i.price : x+=0, x=0).reverse()[0])}}₽</div></a>
            </div>
        </div>
    <!-- </div> -->
    </div>
</template>

<script setup>
var props = defineProps(['item'])
var item = props.item
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
@import '@/assets/hint.css';
.box {
    position: absolute;
    isolation: isolate;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    backdrop-filter: blur(20px);
    z-index: 9999999;
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.box2 {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 200vh;
    overflow: visible;
}
.item {
    @include adaptive-value(width, rem(500), rem(500), rem(500), rem(500), rem(500));
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: rem(40) rem(40) rem(40) rem(5);
    background: #E5E5E5;
    margin-top: rem(50);
    overflow: hidden;
}
.cont {
    margin: 0 auto;
    width: 90%;
}
.top {
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    background-size: cover !important;
    position: relative;
    user-select: none;

    &-container {
        margin: auto;
        height: 90%;
    }
    &-topBar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
.middle {
    margin-top: rem(20);
}
.title {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(20);
    color: #212629;
}
.info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: rem(25);
    margin-top: rem(14);

    & > * {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 300;
        font-size: rem(16);
        color: rgba(33, 38, 41, 0.7);
    } .price {
        font-weight: 700;
    }
}
.desc {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: rem(17);
    line-height: rem(20);
    color: rgba(33, 38, 41, 0.7);
    margin-top: rem(20);
}
.bottom {
    margin-top: rem(36);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: rem(10);
    margin-bottom: rem(20);
}
.btn {
    display: flex;
    flex-direction: row;
    border-radius: 999px;
    gap: rem(2);
    align-items: center;
    border: 1px solid #FFFFFF;
    padding: rem(1) rem(11);

    & > * {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(18);
        color: #212629;
        padding: rem(9);
        user-select: none;
        border-radius: 999px;
    } &-minus, &-plus {
        font-weight: 400;
        font-size: rem(26);
        line-height: rem(12);
        transition: all .2s;
        cursor: pointer;
        &:hover {
            background: #EEEEEE;
        }
    }
}
.add {
    background: #E9E9E9;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08), -1px -1px 6px rgba(255, 255, 255, 0.5), -5px -5px 20px #FFFFFF, 5px 5px 20px #D3D3D3;
    border-radius: 99px;
    min-height: 100%;
    width: 100%;
    text-align: center;
    cursor: pointer;
    transition: all .2s;
    align-items: center;
    display: flex;
    justify-content: center;

    & > * {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(18);
        color: #FE9102;
    }
    &:hover {
        box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.08), 1px 1px 6px rgba(255, 255, 255, 0.5), 5px 5px 20px #FFFFFF, -5px -5px 20px #D3D3D3;
    }
}
.like {
    height: rem(20);
    cursor: pointer;
    margin: rem(-6) 0 0 rem(-6);
    padding: rem(6);
    box-sizing: content-box;
    & > * {
        height: rem(20);
    }
}
.close {
    height: rem(20);
    cursor: pointer;
    margin: rem(-6) rem(-6) 0 0;
    padding: rem(6);
    box-sizing: content-box;
}
.peculiarities {
    display: flex;
    flex-direction: row;
    gap: rem(8);
    position: absolute;
    bottom: rem(-10);

    &-item {
        background: #FFFFFF;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
        border-radius: 999px;
        width: rem(40);
        height: rem(40);
        padding: rem(10);
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        & > * {
            height: 100%;
        }
    }
}
.additions {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: rem(20);
    margin-top: rem(26);
    width: 100%;

    &-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: rem(10);
        width: 100%;
    }
    &-title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(18);
        color: #212629;
    }
    &-item {
        padding: rem(16) rem(20);
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: rem(30);
        overflow: hidden;
        align-items: flex-start;
        border-radius: rem(30) rem(30) rem(30) rem(3);
        background: rgba(0, 0, 0, 0.10);

        &-name {
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 300;
            font-size: rem(18);
            color: #000000;
            word-wrap: break-word;
            text-overflow: clip;
            overflow: hidden;
        }
        &-right {
            display: flex;
            flex-direction: row;
            gap: rem(10);
            align-items: center;
            position: relative;
        }
        &-price {
            white-space: nowrap;
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 300;
            font-size: rem(18);
        }
        &-checkbox {
            width: rem(22);
            height: rem(22);
            background: #C9C9C9;
            border: rem(1) solid rgba(0, 0, 0, 0.2);
            background-size: cover;
            padding: rem(8);
            box-sizing: border-box;
            background-repeat: no-repeat;
            border-radius: 999px;
            cursor: pointer;
            appearance: none;
            transition: all .15s;

            &:checked {
                border-color: #FE9102;
                background-color: #FE9102;
                background: #FE9102 url('@/assets/checked.svg') 50% 50% no-repeat;
            }
            &:not(:disabled):not(:checked):hover {
                background-color: #c0c0c0;
            }
        }
    }
}
</style>