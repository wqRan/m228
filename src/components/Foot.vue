<template lang="html">
	<div class="foot">
		<!-- one-download -->
		<div class="foot-down" v-if="isshow">
		   	<div class="foot-down-r"><a href="javascript:;">立刻下载</a></div>
		  	<div class="foot-down-l">
		  		<div class="logo-down"></div>
		  		<div class="yl-txt">
		  			<p class="yl-txt1">永乐票务APP</p>
		  			<p class="gray">随时抢票 惊喜不断</p>
		  		</div>
		  	</div>
		</div>
		<!-- two-preson -->
		<div class="foot-person">
	        <a href="javascript:;" class="pro-con-h2 fl">个人中心</a>
	        <a href="javascript:;" class="Jupto fr"></a>
	    </div>
	    <!-- three -->
	    <p class="foterbox-p">
	        <span>客服电话：4006-228-228</span>
	    </p>
	    <ul class="foterbox-ul">
	        <li><a href="javascript:;">首页</a></li> 
	        <li><a href="javascript:;">最新资讯</a></li>    
	        <li><a href="javascript:;">合作招商</a></li>
	        <li><a href="javascript:;">联系我们</a></li>
	    </ul>
	    <p class="foterbox-pbot">
	        ©永乐票务
	    </p>
	    <!--  -->
	    
	</div>
</template>

<script>

export default {
  props: {
    isshow: [Boolean]
  }
}

</script>