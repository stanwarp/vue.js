<template>
    <header>
        <div class="logo">E-shop</div>
        <div class="search">
            <input type="text" v-model="searchLine" class="goods-search" />
            <button @click="filterProducts" class="search-button cart-btn" type="button">Искать</button>
            <button class="cart-btn"  @click="$emit('toggle-cart')" type="button">Корзина</button>
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({
        searchLine: ''
    }),
    methods: {
        filterProducts(){
            this.$emit('filter-products', this.searchLine)
        }
    },
    watch: {
        searchLine() {
        this.filterProducts();
        }
  }
}
</script>
<style>
.logo {
    color:#fafafa;
    font-style: italic;
    font-size: xx-large;
}
.card-btn {
    border: 2px solid #888;
    background-color: #888;
    color: #fafafa;
}
.cart-btn:hover{
    background-color: transparent;
    border-color: #fafafa;
    color: #fafafa;
}

</style>