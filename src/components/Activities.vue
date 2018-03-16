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
		<h1 @click="getmore" class="lookmore">查看更多</h1>
	
	<!-- ......... foot ......... -->
	<foot-cmpt></foot-cmpt>
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
	 		data:[]
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
	 getmore(){
	 	var count = 0;
	 	count++
	 	// axios({
	 	// 	url:'/api/topic/find',
	 	// 	data:{
	 	// 		start:4*count,
	 	// 		count:3
	 	// 	}
	 	// })
	 	// .then((result) => {
	 	// 	let data = result.data.data
	 	// 	this.data.push(data)
	 	// })
	 }
	}

  // $.ajax({
  //             url: '/api/listmore',
  //             data: {
  //               pageNo: ++pageCount,
  //               pageSize: opt.loadmoreSize
  //             },
</script>