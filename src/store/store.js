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
    mutations: {
        reducePrice: (state) => {
            state.products.forEach((currentProduct) => {
                currentProduct.price -= 1;
            });
        }
    },
    //NEW: C'est pas idéal à utiliser les mutations quand on veut gérer le code asynchro. entrer les actions. (ici on va simuler le code asynchro avec setTimeout).
    /**
     * Lorsqu'on essaie de simuler le code asynchro sans actions (et avec seul les mutations), les données affichées dans le UI et dans le Vue Tools (Vuex en particulier) ne sont pas en sync. C'est donc difficile de tracer. Avec les actions. Les données s'affichent au navigateur et au Vue Devtools au même temps.
     * IMPORTANT: Même si on a fait les mutations dans la lecture dernière, voici le moyen recommandé pour transformer les données dans notre état: utiliser les actions et appeler notre mutations (avec context.commit())
     */
    actions: {
        reducePrice: (context) => {
            //NEW:IMPORTANT: context is essentially the store
            console.log(context);
            setTimeout(() => {
                context.commit("reducePrice");
            }, 3000)
        }
    }
});