import Vue from 'vue'
import App from './App.vue'
import { BSpinner } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('b-spinner', BSpinner)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
