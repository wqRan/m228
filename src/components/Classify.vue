<template>
	<div>
		<div class="loginHead">
		<div class="head-l">
			<router-link to="/" class="back-btn">返回</router-link>
	       
	    </div>
	    <h1 class="head-m">全国</h1>
	</div>
<!-- ........ newList.............. -->
		<div id="classifyList">

			<div class="titlelist">
				<ul class="titlelist_detail_top">
					<li @click="showhide">全国<span class="yo-ico">&#xf031;</span></li>
					<li>全部分类<span class="yo-ico">&#xf031;</span></li>
					<li>全部时间<span class="yo-ico">&#xf031;</span></li>
				</ul>


				<div class="titlelist_detail_bot" v-show="isshow">
					<ul  class="titlelist_detail_list">
						<li><a>全部分类</a></li>
						<li><a>全部分类</a></li>
						<li><a>全部分类</a></li>
					</ul>
				</div>	
				<div class="mask" v-show="isshow" @click="showhide"></div>
			</div>
			
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

