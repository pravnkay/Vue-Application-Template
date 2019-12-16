import Vue from 'vue'
//Bootstrap-vue
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
//PWA
import './registerServiceWorker'
//Other Core
import router from './router'
import store from './store'
//App
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
