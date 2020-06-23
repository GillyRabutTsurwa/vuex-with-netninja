<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <ProductListOne />
    <ProductListTwo />
    <p>
      <strong>On voit rien parce que on a déplacé nos données d'ici à notre secteur central et on ne les a pas encore utilisées</strong>
    </p>
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
    return {};
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
