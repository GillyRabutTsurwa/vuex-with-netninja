<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(currentProduct, index) in storeProducts" v-bind:key="index">
        <span class="name">{{currentProduct.name}}</span>
        <span class="price">${{currentProduct.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice">Reduce Price</button>
  </div>
</template>

<script>
export default {
  computed: {
    storeProducts() {
      return this.$store.state.products;
    }
    //NOTE: not using the store getter car il changeait en plus les valeurs du prix.
    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // }
  },
  methods: {
    reducePrice() {
      // call on our mutation. COMMITTING our mutation.
      // reducePrice (one below) is the name of the mutation we assigned at the store.
      // this.$store.commit("reducePrice");
      this.$store.dispatch("reducePrice");
    }
  },
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