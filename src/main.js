import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './userStore'
import axios from 'axios'

Vue.prototype.$Axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
