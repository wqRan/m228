<template lang="html">

<div class="collection">
	<div class="loginHead">
		<div class="head-l">
			<router-link to="/" class="back-btn" >返回</router-link>
	    </div>
	    <h1 class="head-m">我的收藏</h1>	    
	</div>
	<!-- ........ newList.............. -->
	<div id="newList" style="background: #fff;">
		<div class="newList" id="newListitem">
			<dl v-for="(v,i) in data" :key="i._id" @click="routrTo(v._id)" class="pro-list cl"  >
		       <dt><img :src="`http://localhost:3000/uploads/${v.showPic}`"></dt>
		       <dd class="pro-tit"><a href="">{{v.showName}}</a></dd>
		       <dd>
		           <strong class="icon icon-date"></strong>
		           <span class="pro-sp">{{v.showTime}}</span>            
		       </dd>
		       <dd>
		           <strong class="icon icon-cg"></strong>
		           <span class="pro-sp">{{v.showLocal}}</span>
		       </dd>
		       <dd>
		           <strong class="icon icon-price"></strong>
		           <span class="pro-sp">{{v.showPrice}}元</span>   
		           <span class="state"><a class="btn b-sale">{{v.showStates}}</a></span>     
		       </dd>
		       
		    </dl>
		</div>	
	</div>
	<!-- 无收藏 -->
	<div  v-if="show" style="width:100%;height: 600px;background: #fff;line-height: 400px;text-align: center">收藏空空的，快去收藏吧！</div>
</div>

</template>
<script>
	
import axios from 'axios'
import Vue from 'vue'
import cookie from 'vue-cookie'
Vue.use(cookie)

export default {
	data:() =>{
		return{
			data:[],
			show:true
		}
	},
	mounted(){
	let acookie= JSON.parse(this.$cookie.get('savedata'))
	if (acookie) {
		this.show = false
		acookie.forEach((item) => {
	  	axios({
	  			method:'get',
	  			url:'/api/newslist/item/'+item.id
	  		})
	  		.then((result)=>{
	  			this.data = this.data.concat(result.data.data)
	  		})
		})

		}
	}
}


</script>