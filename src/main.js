import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

const authData = localStorage.getItem('auth')

new Vue({
  router,
  data: {
    auth: authData ? JSON.parse(authData) : null
  },
  render: h => h(App),
}).$mount('#app')
