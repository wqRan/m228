<template>
	<div>
	<mt-swipe  :auto="2000" style="height:1.52rem;width:100%;">
	    <mt-swipe-item v-for="(v,i) in data" :key="i._id">
	    	<img :src="`http://localhost:3000/uploads/${v.topicPic}`" alt="">
	    </mt-swipe-item>
	</mt-swipe>
	</div>
</template>
<script>
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

 export default {
	 components: {
	  'mt-swipe': Swipe,
	  'mt-swipe-item': SwipeItem
	 },
	 data:() => {
	 	return {
	 		data:[]
	 	}
	 },
	 mounted() {
	 	axios({
	 		url:'/api/topic/find?start=0&count=8'
	 	})
	 	.then((result) => {
	 		let data = result.data.data
	 		this.data = data
	 	})
	 }
	}

</script>
<style scoped>
	img{
		width:100%;
		height:100%;
	}
</style>