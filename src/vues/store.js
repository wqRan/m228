import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.store({
	state:{
		list:{
			showPic:'',
			showName:'',
			showTime:'',
			showLocal:'',
			showPrice:'',
			showStates:'',
			showTips:'',
			url:''
		}
	}

	mutations:{
		setList(state, payload){
			state.list = {...payload}
		}
	}
})

export default store