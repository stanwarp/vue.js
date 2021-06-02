<template>
    <div id="products">
        Товары:
        <div v-for="item in products" :key="item.id_product" class="products-item">
            <img src='https://place-hold.it/150' alt="product image">
            <h3>{{item.product_name}}</h3>
            <p>{{item.price}}</p>
            <button class="card-btn buy-btn">Добавить</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style>
#products {
    width: 1140px;
    padding: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.products-item {
    display: flex;
    flex-flow: column nowrap;
    align-items:center;
    width: 250px;
    height: 350px;
}
.buy-btn:hover{
    background-color: #fafafa;
    color: #222;
}
</style>