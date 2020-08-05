import Vue from "vue";
import App from "./App.vue";
// importing our vuex store
import { store } from "./store/store";

Vue.config.productionTip = false;

new Vue({
	// enabling the usage of our just-imported store in our application.
	// we will use it under the variable store (first part). Second part is what we are importing from store/store.js
	store: store,
	render: (h) => h(App)
}).$mount("#app");
