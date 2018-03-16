<template>
	<div>
		<div class="loginHead">
			<div class="head-l">
				<router-link to="/" class="back-btn">返回</router-link>
		       
		    </div>
	    	<h1 class="head-m">个人中心</h1>
		</div>
		<div class="usercenter">
			<div class="usercenter_box">
				<div class="usercenter_top">

					<div class="usercontainer">
						<div class="user_avater">
							<img src="https://s2m.228.cn/resources/images/person-per.png">
						</div>
						<div class="usernickname">
							<span>Mickyio</span>
						</div>
					</div>
					<div class="set">
						<a class="service_icon"></a>
						<a class="set_icon"></a>
					</div>
				
				</div>
				<ul class="usercenter_list">
					<li>积分<span>0</span></li>
					<li>电子钱包<span>未启用</span></li>
					<li>优惠券<span>0</span></li>
				</ul>
			</div>
			<div class="user_link">
				<ul>
					<li>
						<div class="user_link_item">
							<i class="dingdan_icon"></i>
							<span>我的订单</span>
						</div>
						<i class="right_icon"></i>
					</li>
					<li>
						<div class="user_link_item">
							<i class="shengou_icon"></i>
							<span>我的申购</span>
						</div>
						<i class="right_icon"></i>
					</li>
					<li class="user_line"></li>
					<li>
						<div class="user_link_item">
							<i class="crush_icon"></i>
							<span>现金券</span>
						</div>
						<i class="right_icon"></i>
					</li>
					<li>
						<div class="user_link_item">
							<i class="guanyan_icon"></i>
							<span>观演凭证</span>
						</div>
						<i class="right_icon"></i>
					</li>
					<li class="user_line"></li>
					<li>
						<div class="user_link_item">
							<i class="quehuo_icon"></i>
							<span>缺货登记</span>
						</div>
						<i class="right_icon"></i>
					</li>
					<li>
						<div class="user_link_item">
							<i class="shoucang_icon"></i>
							<span>我的收藏</span>
						</div>
						<i class="right_icon"></i>
					</li>
					<li>
						<div class="user_link_item">
							<i class="tiwen_icon"></i>
							<span>我的提问</span>
						</div>
						<i class="right_icon"></i>
					</li>
					<li>
						<div class="user_link_item">
							<i class="yanpiao_icon"></i>
							<span>在线验票</span>
						</div>
						<i class="right_icon"></i>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import "../assets/public/web-storage-cache.min.js"
//const wsCache = new WebStorageCache()
//console.log(wsCache)
	export default{
		
		/*beforeRouteEnter (to, from, next) {
    		console.log('beforeRouteEnter')
    		const wsCache = new WebStorageCache()
					
    		axios({
				url:'api/users/issignin',
				header:{
					'X-Access-Token': wsCache.get('token')
				}
			})
			.then((result)=>{
				if(result.data.data.issignin){
					 this.$router.push("mine")
					 next()
				}else{
					console.log(0)
					 this.$router.push("login")
					 next()
				}
			})
			
		  }*/

		
	}
</script>