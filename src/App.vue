<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <ProductListOne v-bind:productsProp="products" />
    <ProductListTwo v-bind:productsProp="products" />
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne";
import ProductListTwo from "./components/ProductListTwo";
export default {
  name: "App",
  components: {
    ProductListOne: ProductListOne,
    ProductListTwo: ProductListTwo
  },
  data() {
    return {
      products: [
        {
          name: "Banana Skin",
          price: 20
        },
        {
          name: "Shiny Star",
          price: 40
        },
        {
          name: "Red Shells",
          price: 60
        },
        {
          name: "Green Shells",
          price: 80
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
