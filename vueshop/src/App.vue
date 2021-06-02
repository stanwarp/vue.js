<template>
    <div id="app">
        <Header @toggle-cart='changeCartVisibility' @filter-products = 'filterProducts'/>
        <main>
        <Cart :isVisibleCart='isVisibleCart'/>
        <ProductsList :products = 'filteredProducts'/>
        </main>
    </div>
</template>

<script>
import Header from './components/Header';
import Cart from './components/Cart'
import ProductsList from './components/ProductsList';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

export default {
    components: {
        ProductsList,
        Header,
        Cart,
    },
    data: () => ({
        products: [],
        filteredProducts: [],
        isVisibleCart: false,
    }),
    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`)
    },
    methods: {
        makeGETRequest(url) {
            fetch(url)
            .then((data) => data.json())
            .then((data) => {
                this.products = data;
                this.filteredProducts = data;
            })
        },
        filterProducts(value){
            let regexp = new RegExp(value, 'i');
            this.filteredProducts = this.products.filter(product => regexp.test(product.product_name))
        },
        changeCartVisibility(){
            this.isVisibleCart = !this.isVisibleCart
        }
    }
}
</script>

<style>
#app {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body {
    margin: 0px;
    font-family: 'SF Pro Display', sans-serif;
}
header{
    background-color:#888;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
main {
    display: flex;
    justify-content: center;
}
button {
    padding: 10px 20px;
    border: 1px solid transparent;
    color: #888;
    transition: all ease-in-out .4s;
    width: 120px;
    height: 50px;
    border-radius: 25px;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    text-transform: none;
    cursor: pointer;
}

</style>
