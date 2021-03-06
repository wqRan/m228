import Vue from 'vue'
import App from './App'
import router from './router'

// 
import "./assets/public/swiper-4.1.0.min.css"
import "./assets/public/swiper-4.1.0.min.js"
import "./assets/public/web-storage-cache.min.js"
import "./assets/public/zepto.min.js"
import "./assets/styles/app.scss"

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
