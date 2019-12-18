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
//Dependencies
import firebase from 'firebase'
import '@/library/firebaseInit'

import Unicon from 'vue-unicons'
import { uniBars, uniHomeAlt, uniAngleLeft, uniAngleDown, uniSearch, uniLink, uniSignOutAlt, uniCheckSquare, uniCheckCircle } from 'vue-unicons/src/icons'

Unicon.add([uniBars, uniHomeAlt, uniAngleLeft, uniAngleDown, uniSearch, uniLink, uniSignOutAlt, uniCheckSquare, uniCheckCircle])
Vue.use(Unicon)

import '../node_modules/nprogress/nprogress.css'
//App
import App from './App.vue'

Vue.config.productionTip = false

let app

firebase.auth().onAuthStateChanged(function() {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App)
		}).$mount('#app')
  }
})