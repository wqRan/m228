import Vue from 'vue'
import App from './App'
import router from './router'
import wsCache from 'web-storage-cache'
import "./assets/public/zepto.min.js"
import "./assets/styles/app.scss"

Vue.config.productionTip = false
/*Vue.prototype.$wsCache = new wsCache(); */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
