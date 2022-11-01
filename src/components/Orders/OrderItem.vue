<template>
    <div class="item">
        <div class="left">
            <div class="img" :style="'background: #ac662d url('+item.imageSource+') 50% 50% no-repeat;'"></div>
            <div class="info">
                <div class="info-title">{{item.name}}</div>
                <div class="info-additions">{{item.additions.map(i => i.name).join(', ')}}</div>
            </div>
        </div>
        <div class="right">
            <div class="amount">
                {{item.amount}} шт.
            </div>
            <div class="price">{{item.price}}₽</div>
        </div>
    </div>
</template>

<script setup>
var props = defineProps(['item'])
var item = await props.item
</script>

<style lang="scss" scoped>
@import '@/assets/style.scss';
.item {
    @include adaptive-value(flex-direction, row, row, row, row, column);
    width: 100%;
    box-sizing: border-box;
    display: flex;
    gap: rem(30);
    align-items: flex-start;
    justify-content: space-between;
    background: transparent;
    border-radius: 20px 20px 20px 5px;
}
.left {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: rem(20);
}
.right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: rem(35);

    & > * {
        white-space: nowrap;
    }
}
.img {
    min-width: rem(60);
    min-height: rem(60);
    max-width: rem(60);
    max-height: rem(60);
    border-radius: rem(6);
    background-size: cover !important;
}
.info {
    display: flex;
    flex-direction: column;
    gap: rem(4);

    &-title {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: rem(24);
        color: #212629;
        word-break: keep-all;
    } &-additions {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 300;
        font-size: rem(16);
        color: rgba(0, 0, 0, 0.7);
    }
}
.price {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: rem(18);
    color: #212629;
}
.amount {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 300;
    font-size: rem(16);
    color: rgba(0, 0, 0, 0.7);
}
</style>