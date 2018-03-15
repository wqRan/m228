import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store1 = new Vuex.store({
	state:{
		tip:{

		}
	}

	mutations:{
		setTip(state, payload){
			state.nav = {...payload}
		}
	}
})

export default store1