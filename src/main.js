import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from './vuex/store'


import wsCache from 'web-storage-cache'
import "./assets/styles/app.scss"

Vue.config.productionTip = false

Vue.prototype.$wsCache = new wsCache(); 


router.beforeEach((to,from,next)=>{

	if(to.path === '/login'){
		next()
	}else{
		
		if(to.meta.requiresAuth && !localStorage.getItem('token')){
		
			next({path:'/login'})
		}else{
			next()
		}
	}
})


new Vue({
  el: '#app',
  router,
  vuex,
  components: { App },
  template: '<App/>'
})
