<template>
  <div class="cart">
    <div v-show="isVisibleCart" class="cart-list">
      <button @click="$emit('toggle-cart')">Закрыть корзину</button>
      <h1>Корзина:</h1>
      <div
        v-for="item in cartProducts"
        :key="item.id_product"
        class="cart-item"
      >
        <h3>{{ item.product_name }}</h3>
        <p>{{ item.price }}</p>
        <button @click="onClick(item)">Удалить</button>
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
    },
    cartProducts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClick(item) {
      this.$emit("remove-from-cart", item);
    },
  },
};
</script>
<style>
.cart-list {
  box-shadow: 0 0 10px 10px #222;
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