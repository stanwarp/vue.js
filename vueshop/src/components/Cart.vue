<template>
    <div class="cart">
        <div v-show="isVisibleCart" class="cart-list">
            <div class="cart-list">
                <h1>Корзина:</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isVisibleCart: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
<style>
.cart-list {
    box-shadow:  0 0 10px 10px #222;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 700px;
    height: 500px;
    overflow: auto;
    background-color: #fff;
    transform: translate(-50%, -50%);
}
.cart-item {
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px 0;
}
</style>