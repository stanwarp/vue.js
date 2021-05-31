<template>
  <div id="app">
<header>
    <div class="logo">E-shop</div>
        <div class="search">
            <input type="text" v-model="searchLine" class="goods-search" />
            <button @click="filterProducts" class="search-button cart-btn" type="button">Искать</button>
        </div>
        <div class="cart">
            <div id="cart-preview"></div>
            <button class="cart-btn" @click="changeCartVisibility" type="button" data-modal-target="#modal">Корзина</button>
            <div class="modal" id="modal">
            <div class="modal-header">
              <div class="title">Ваша корзина</div>
              <button data-close-button @click='closeCart' class="close-button">&times;</button>
            </div>
            <div id="cart-body" class="modal-body"></div>
          </div>
          <div id="overlay"></div>
        </div>
</header>
    <main>
      Товары:
      <div id="products">
        <div v-for="item in filteredProducts" :key="item.id_product" class="products-item">
          <img src='https://place-hold.it/150'>
          <h3>{{item.product_name}}</h3>
          <p>{{item.price}}</p>
          <button class="card-btn buy-btn">Добавить</button>
        </div>
      </div>
      <div v-show="isVisibleCart" class="cart-list">
          <h1>Корзина:</h1>
      </div>
    </main>
  </div>
</template>

<script>
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

export default {
  data: () => ({
    products: [],
    filteredProducts: [],
    isVisibleCart: false,
    searchLine: ""
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
    filterProducts(){
        let regexp = new RegExp(this.searchLine, 'i');
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
  text-align: center;
  color: #2c3e50;
}
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the `main` element consistently in IE.
 */

main {
  display: block;
}
.goods-search {
    margin: 0 10px 0  0;
}
/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
*, *::after, *::before {
    box-sizing: border-box;
  }
  
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 200ms ease-in-out;
    border: 1px solid black;
    border-radius: 10px;
    z-index: 10;
    background-color: white;
    width: 500px;
    max-width: 80%;
  }
  
  .modal.active {
    transform: translate(-50%, -50%) scale(1);
  }
  
  .modal-header {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
  }
  
  .modal-header .title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .modal-header .close-button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .modal-body {
    padding: 10px 15px;
  }
  
  #overlay {
    position: fixed;
    opacity: 0;
    transition: 200ms ease-in-out;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    pointer-events: none;
  }
  
  #overlay.active {
    opacity: 1;
    pointer-events: all;
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
.logo {
    color:#fafafa;
    font-style: italic;
    font-size: xx-large;
}
.cart-btn:hover{
    background-color: transparent;
    border-color: #fafafa;
    color: #fafafa;
}
.card-btn {
    border: 2px solid #888;
    background-color: #888;
    color: #fafafa;
}
.buy-btn:hover{
    background-color: #fafafa;
    color: #222;
}
#products {
    width: 1140px;
    padding: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.goods-item {
    display: flex;
    flex-flow: column nowrap;
    align-items:center;
    width: 250px;
    height: 350px;
}
.icon {
    width: 100px;
    height: 150px;
    border: solid 2px black;
}
.cart-item {
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px 0;
}

</style>
