<template lang="html">
<div>
		
	<div class="loginHead">
	<div class="head-l">
            <router-link to="/" class="back-btn" >返回</router-link>
    </div>
    <h1 class="head-m">永乐说戏</h1>
	</div>
	<!-- .......... banner ........... -->
	
		<banner></banner>
	
	<div class="swiper-pagination"></div>
	</div>
</div>
</template>
<script>

	import FootCmpt from './Foot'
	import Banner from './Banner.vue'
	export default {
	  components:{
	  	Banner
	  }
	}
	
</script>
