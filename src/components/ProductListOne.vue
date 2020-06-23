<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(currentProduct, index) in saleProducts" v-bind:key="index">
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
    },
    saleProducts() {
      //NOTE: Instead of duplicating this code, which is in the other component, we use getters to write the code in one place and access the value of that getter here.

      // let productsOnSale = this.$store.state.products.map(currentProduct => {
      //   return {
      //     name: `**${currentProduct.name}**`,
      //     price: currentProduct.price / 2
      //   };
      // });
      // return productsOnSale;
      return this.$store.getters.saleProducts;
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