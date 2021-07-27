<template>
  <div id="app">
    <Header
      @toggle-cart="changeCartVisibility"
      @filter-products="filterProducts"
    />
    <main>
      <Cart
        @remove-from-cart="removeFromCart"
        :cartProducts="cartProducts"
        :isVisibleCart="isVisibleCart"
        @toggle-cart="changeCartVisibility"
      />
      <ProductsList @add-to-cart="addToCart" :products="filteredProducts" />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";

const API_URL = "http://localhost:3000";

export default {
  components: {
    ProductsList,
    Header,
    Cart,
  },
  data: () => ({
    products: [],
    cartProducts: [],
    filteredProducts: [],
    isVisibleCart: false,
  }),
  mounted() {
    this.getProducts();
    this.getCart();
  },
  methods: {
    addToCart(item) {
      this.makePOSTRequest(`${API_URL}/addToCart`, item).then(() =>
        this.getCart()
      );
    },
    removeFromCart(item) {
      this.makePOSTRequest(`${API_URL}/removeFromCart`, item).then(() =>
        this.getCart()
      );
    },
    makeGETRequest(url) {
      return fetch(url).then((data) => data.json());
    },
    makePOSTRequest(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((data) => data.json());
    },
    getProducts() {
      this.makeGETRequest(`${API_URL}/catalogData`).then((data) => {
        this.products = data;
        this.filteredProducts = data;
      });
    },
    getCart() {
      this.makeGETRequest(`${API_URL}/cartData`).then((data) => {
        this.cartProducts = data;
      });
    },
    filterProducts(value) {
      let regexp = new RegExp(value, "i");
      this.filteredProducts = this.products.filter((product) =>
        regexp.test(product.product_name)
      );
    },
    changeCartVisibility() {
      this.isVisibleCart = !this.isVisibleCart;
    },
  },
};
</script>

<style>
#app {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  margin: 0px;
  font-family: "SF Pro Display", sans-serif;
}
header {
  background-color: #888;
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
  transition: all ease-in-out 0.4s;
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
