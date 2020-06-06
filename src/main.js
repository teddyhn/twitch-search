import Vue from 'vue'
import App from './App.vue'
import Spinner from 'vue-simple-spinner'

Vue.component('vue-simple-spinner', Spinner)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
