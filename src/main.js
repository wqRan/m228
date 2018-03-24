import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vues/store'
import wsCache from 'web-storage-cache'
import "./assets/styles/app.scss"

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{

Vue.prototype.$wsCache = new wsCache(); 

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
  store,
  components: { App },
  template: '<App/>'
})
