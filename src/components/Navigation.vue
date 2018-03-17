<template>
	<div id="Navigation">
		<div class="index-le" v-on:click="showhide">
	        <a class="index-le-l"></a>
	    </div>
	    <div class="index_detail" v-show="isshow">
	    	<a class="index_detail1"></a>
	    	<a class="index_detail2"></a>
	    	<a class="index_detail3"></a>
	    	<a class="index_detail4"></a>
	    	<a class="index_detail5"></a>
	    	<a class="index_detail6"></a>
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
