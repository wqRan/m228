<template lang="html">
	
<div class="container">
	<!-- ...... header ...... -->
	<header>
	  <a id="ylCity" href="javascript:;">全国</a>   
	  <h1>永乐票务</h1>        
	</header>  
	<!-- ...... search ...... -->          
	<div id="js_search" class="sear-comm" style="margin-bottom:.1rem;">
		<div class="sear-all">
			<form action="//m.228.cn/search.html" method="get" id="currentSearchForm">
				<span class="sear-m"> 
					<input type="search" class="sear-inp" id="search-text" name="keyword" onkeydown="search2(this,'#searchForm','');" autocomplete="off" data-key="阴阳师" placeholder="阴阳师"> 
				</span>
				<a class="fr" href="javascript:search('#search-text','')"></a>
			</form>
		</div>
	</div>
	<!-- ....... banner ............ -->
	
		  <banner></banner>
	
	

	<!-- ........ nav ....... -->
	<div class="index-nav index-nav-20">
        <ul class="navBtn">
            <li class="nav-item1"><router-link to="/classify">全部分类</router-link></li>
            <li class="nav-item2"><router-link to="/login">用户中心</router-link></li>
            <li class="nav-item3"><router-link to="/ylSpeak">永乐说戏</router-link></li>
            <li class="nav-item4"><router-link to="/activities">专题活动</router-link></li>
           <li class="nav-item5"><router-link to="/verification">在线验票</router-link></li>
           
        </ul>
    </div>
    <!-- ....... pic1 ........ -->
    <div class="pic1">
		<img src="../assets/images/banner8.jpg">
    </div>

    <!-- ........ pic2 .......... -->
    <div class="pic2">
    	<img src="../assets/images/pic2left.jpg">
    	<img src="../assets/images/pic2right.jpg">
    </div>
	<!-- ........ pronav....... -->

	<div class="index-pronav" id="JindexPronav">
        <ul id="Jpronav">
            <li><a rel="1" class="on" href="javascript:;">推荐</a></li>
            <li><a rel="2" href="javascript:;">场馆</a></li>
        </ul>
    </div>
	<!-- ........ newList.............. -->
	<div id="newList">
		<div class="newList"></div>
	</div>
	<!-- .........foot-icon.............. -->
	<div class="foot-icon">
	    <ul>
	        <li class="foot-item1"><a href="javascript:;">演唱会</a></li>
	        <li class="foot-item2"><a href="javascript:;">话剧舞台剧</a></li>
	        <li class="foot-item3"><a href="javascript:;">音乐会</a></li>
	        <li class="foot-item4"><a href="javascript:;">体育赛事</a></li>
			<li class="foot-item5"><a href="javascript:;">舞蹈芭蕾</a></li>
	        <li class="foot-item6"><a href="javascript:;">戏曲综艺</a></li>
	        <li class="foot-item7"><a href="javascript:;">儿童亲子</a></li>
	        <li class="foot-item8"><a href="javascript:;">休闲娱乐</a></li>
	    </ul>
	</div>
	<!-- ......... foot ......... -->
	<div class="foot">
		<!-- one-download -->
		<div class="foot-down">
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
	<!-- .......fix图标 -->
	<div id="Navigation">
		<div class="index-le" >
	        <a class="index-le-l"></a>
	    </div>
	    <div class="index_detail">
	    	<a class="index_detail1"></a>
	    	<a class="index_detail2"></a>
	    	<a class="index_detail3"></a>
	    	<a class="index_detail4"></a>
	    	<a class="index_detail5"></a>
	    	<a class="index_detail6"></a>
	    </div>
	</div>
</div>
</template>
<script>
   
	import Banner from './Banner.vue'
	export default {

	  components:{
	  	Banner
	  }/*,
	  data:{
          isshow:false
        },
       methods:{
         showhide:function(){
         	console.log(this.isshow)
            this.isshow = !this.isshow;
          }
        }*/
	}
</script>