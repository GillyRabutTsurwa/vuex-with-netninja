import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [{
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
    },
    //NEW: GETTERS
    //NOTE: We are NOT manipulating the data in our state. We are using the data in our state to return a manipulated value (using a variable) WITHOUT changing the data. In this case, we are looping through the products array in our state. We are not changing it in any way, shape or form.
    getters: {
        saleProducts: (state) => {
            let productsOnSale = state.products.map((currentProduct) => {
                return {
                    name: `**${currentProduct.name}**`,
                    price: currentProduct.price / 2
                };
            });
            return productsOnSale;
        }
    }
});