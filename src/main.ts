import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  store,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  vuetify,
  render: h => h(App)
}).$mount('#app')
