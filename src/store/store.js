import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    // NEWNOTE: with strict sent to true, on va obtenir une erreur si on essaie de transformer l'état hors de mutations "handler".
    strict: true,
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
    // Not using the getter function but will leave it here regardless.
    getters: {
        // saleProducts: (state) => {
        //     let productsOnSale = state.products.map((currentProduct) => {
        //         return {
        //             name: `**${currentProduct.name}**`,
        //             price: currentProduct.price / 2
        //         };
        //     });
        //     return productsOnSale;
        // }
    },
    //NEW: WITH MUTATIONS, we do plan on changing the data from the original state
    mutations: {
        reducePrice: (state) => {
            state.products.forEach((currentProduct) => {
                currentProduct.price -= 1;
            });
        }
    }
});