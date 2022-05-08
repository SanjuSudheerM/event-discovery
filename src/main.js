import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import VueDatePicker from "@mathieustan/vue-datepicker";
import VueAutosuggest from "vue-autosuggest";

import "./styles/styles.scss";

Vue.config.productionTip = false;

Vue.use(VueDatePicker);
Vue.use(VueAutosuggest);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
