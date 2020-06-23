<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(currentProduct, index) in storeProducts" v-bind:key="index">
        <span class="name">{{currentProduct.name}}</span>
        <span class="price">${{currentProduct.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //NEWIMPORTANT: use computed property to fetch vuex store data
  computed: {
    storeProducts() {
      // code to fetch data from the store. Very easy to decipher.
      // wrote same exact code in other component.
      return this.$store.state.products;
    }
  },
  // Created this created hook to see what the data structure of our store data looks like. J'ai pas fait sur l'autre component.
  created() {
    console.log(this.$store);
    console.log(this.$store.state);
  }
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>