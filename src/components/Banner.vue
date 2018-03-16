<template>
	<mt-swipe :auto="2000" style="height:1.52rem;width:100%;">
	    <mt-swipe-item><img src="../assets/images/banner1.jpg" alt=""></mt-swipe-item>
	    <mt-swipe-item><img src="../assets/images/banner2.jpg" alt=""></mt-swipe-item>
	    <mt-swipe-item><img src="../assets/images/banner3.jpg" alt=""></mt-swipe-item>
	    <mt-swipe-item><img src="../assets/images/banner4.jpg" alt=""></mt-swipe-item>
	    <mt-swipe-item><img src="../assets/images/banner5.jpg" alt=""></mt-swipe-item>
	    <mt-swipe-item><img src="../assets/images/banner6.jpg" alt=""></mt-swipe-item>
	    <mt-swipe-item><img src="../assets/images/banner7.jpg" alt=""></mt-swipe-item>
	    <mt-swipe-item><img src="../assets/images/banner8.jpg" alt=""></mt-swipe-item>
	</mt-swipe>
</template>
<script>
   import {Swipe, SwipeItem} from 'mint-ui'
   import 'mint-ui/lib/style.css'

	 export default {
		 components: {
		  'mt-swipe': Swipe,
		  'mt-swipe-item': SwipeItem
		 }
		 
		 
		}

</script>
<style scoped>
	img{
		width:100%;
		height:100%;
	}
</style>