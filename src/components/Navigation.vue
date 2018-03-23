<template>
	<div id="Navigation">
		<div class="index-le" v-on:click="showhide">
	        <a class="index-le-l"></a>
	    </div>
	    <div class="index_detail" v-show="isshow">
	    	<router-link to="/" class="index_detail1"></router-link>
	    	<router-link to="/search" class="index_detail2"></router-link>
	    	<router-link to="/classify" class="index_detail3"></router-link>
	    	<router-link to="/activities" class="index_detail4"></router-link>
	    	<router-link to="/mine" class="index_detail5"></router-link>
	    	<router-link to="/verification" class="index_detail6"></router-link>
	    </div>
	</div>
</template>
<script>
	export default {
		data: () => {
	    return {
	      isshow:false
	    }
	  },
	   methods:{
	     showhide:function(){
	     	
	        this.isshow = !this.isshow;
	      }
	    }
	}
</script>
