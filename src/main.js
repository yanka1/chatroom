import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import _format from 'date-fns/format';
import numeral from 'numeral'
// UI
import Vant from "vant";
import "vant/lib/vant-css/index.css";
import "./assets/style/reset.css";
import "./assets/style/index.scss";
// plugins
import RongIM from "@/plugins/RongIM"
Vue.use(Vant);
Vue.use(RongIM);
Vue.prototype.$date = {
  format: _format
}
Vue.prototype.$numeral = numeral
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
