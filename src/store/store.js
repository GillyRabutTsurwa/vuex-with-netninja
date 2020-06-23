import Vue from "vue";
import Vuex from "vuex";

// tell vue js we want to use vuex. nothing new here.
Vue.use(Vuex);

// create our store.
export const store = new Vuex.Store({
    // define the state (the data of our application)
    // much like we would in the data portion of a component
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
    }
});