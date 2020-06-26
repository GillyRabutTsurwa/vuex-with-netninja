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
        /**
         * saleProducts: (state) => {
            let productsOnSale = state.products.map((currentProduct) => {
                return {
                    name: `**${currentProduct.name}**`,
                    price: currentProduct.price / 2
                };
            });
            return productsOnSale;
            }   
         */

    },
    //NEWIMPORTANTNOTE - Si on veut passer un parametre sur nos mutations ou actions, on utilise le payload, que l'on pourra donc acceder dans nos declarations.
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach((currentProduct) => {
                currentProduct.price -= payload;
            });
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(() => {
                // when committing a mutation, first parametre is name of mutation.
                // NEW: second parametre is the payload arguement: the data FROM THE MUTATION that we are dispatching so when we declare our action we have access to that data.
                context.commit("reducePrice", payload);
            }, 3000)
        }
    }
});