import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		city:'全国',
		count:1,
		price:'',
		time:'',
		total:'',
		list:{}
	},

	mutations:{
		add(state){
			state.count++
		},
		reduce(state){
			state.count--
			if(state.count<=0){
				state.count=0
			}
		},
		selectPrice(state,price){
			state.price=price.trim()
		},
		selectTime(state,time){
			state.time=time.trim()
		},
		saveInfo(state,payload){
			state.list=payload
		},
		total(state){
			state.total=state.price*state.count
		},
		choosecity(state,citychoosed){
			state.city=citychoosed
		}
	},
	actions:{
		changeNum(){

		}
	}


})

export default store