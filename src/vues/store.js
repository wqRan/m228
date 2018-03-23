import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		count:1,
		price:'',
		time:'',
		total:'',
		list:{
			
			
		}

	},

	mutations:{
		/*setList(state, payload){
			state.list = {...payload}
		},*/
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
			/*state.list.showName=payload.showName,
			state.list.showPrice=payload.showPrice,
			state.list.showTime=payload.showTime,
			state.list.showLocal=payload.showLocal*/
			state.list=payload
		},
		total(state){
			state.total=state.price*state.count
		}
	},
	actions:{
		changeNum(){

		}
	}


})

export default store