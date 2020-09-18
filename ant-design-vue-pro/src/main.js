import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button } from "ant-design-vue";
Vue.config.productionTip = false;

// 全局注册
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
