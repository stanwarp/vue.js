<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Hello msg="Welcome to Yo3223ur Vue.js App"/>
  <Data/>
    <div>footer</div>
</template>

<script>
import Hello from './components/HelloWorld.vue'
import Data from './components/someData'
export default {
  name: 'App',
  components: {
    Hello,
    Data,
  }
}
</script>

<style>
#app {
    background-color: red;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hello {
    background-color: royalblue;
}
</style>
