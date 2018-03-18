<template>
<div>
		<div class="loginHead">
			<div class="head-l">
				<router-link to="/" class="back-btn">返回</router-link>
		       
		    </div>
	    	<h1 class="head-m">精彩专题</h1>
		</div>
<!-- ........ newList.............. -->
		<div id="activityList">
			<div v-for="(v,i) in data" :key="i._id" class="theme_item">
				<img :src="`http://localhost:3000/uploads/${v.topicPic}`">
				<div class="bar">
					<span>{{v.topicName}}</span>
				</div>
			</div>
		</div>
		<h1 @click="getmore"  v-if="length == 4" class="lookmore">查看更多</h1>
	<!-- ......... foot ......... -->
	<foot-cmpt :isshow="true"></foot-cmpt>
</div>
</template>
<script>


import axios from 'axios'
import FootCmpt from './Foot'


 export default {
 	components:{
  		FootCmpt
  	},
	 data:() => {
	 	return {
	 		data:[],
	 		count:0,
	 		length:4
	 	}
	 },
	 mounted() {
	 	axios({
	 		url:'/api/topic/find?start=0&count=4'
	 	})
	 	.then((result) => {
	 		let data = result.data.data
	 		this.data = data
	 	})
	 },
	methods:{
	 	getmore(){

	 		axios({
		 		url:'/api/topic/find?start='+(4*++this.count)+'&count=4',
		 	})
		 	.then((result) => {

		 		this.length = result.data.data.length
		 		let data = result.data.data
		 		this.data = this.data.concat(data)
		 	})
	 	}
	},
	}

</script>