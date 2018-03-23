<template>
	<div>
		<div class="loginHead">
			<div class="head-l">
				<!-- <a href="history.back" class="yo-ico">&#xf07d;</a> -->
				<!-- <router-link to="/" class="yo-ico">&#xf07d;</router-link> -->
		       <a href="javascript:history.back();" class="yo-ico">&#xf07d;</a>

		    </div>
	    	<h1 class="head-m">商品简介</h1>
		</div>
		<div class="product-pic">
			<div class="pro-new-left">
				<img :src="`http://localhost:3000/uploads/${data.showPic}`">
			</div>
			<div class="pro-new-right">
				<h1>
					<p>{{data.showName}}</p>
				</h1>
				<span class="time">{{data.showTime}}</span>
				<div class="sale">
					<span class="status">{{data.showStates}}</span>
					<div class="footer">
						<a class="bot-askarea">
							<span></span>
						</a>
						<a class="bot-btn">
							<span  @click="buy">立即购买</span>
							<!-- <router-link to="/order"></router-link> -->
						</a>
					</div>
					<span class="icon">
						<i class="favorite"></i>
						<i class="share"></i>
					</span>
					
				</div>
			</div>
		</div>
		<div class="discounts-box">
			
		【温馨提示】本演出将于3月15日11:00正式开票；建议您提前注册、登录永乐票务网站或客户端，便于第一时间秒杀成功；为了保证您能够更顺利购票，请下载最新版本的APP
		<br>

		本演出将于3月15日11:00正式开票
		</div>
		<div class="location-box">
			<ul>
				<li>
					<a>
						<i class="addr"></i>
						<span>{{data.showLocal}}</span>
					</a>
				</li>
				<li>
					<a>
						<i class="price"></i>
						<span>
	                      {{data.showPrice}}元
	                    </span>
					</a>
				</li>
			</ul>
		</div>
		<div class="product_content">
			<h2>注意事项</h2>
			<div class="text">
				a)演出详情仅供参考，具体信息以现场为准；
				<br>
				b)1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场；
				<br>
				c)演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务，购票时请务必仔细核对并审慎下单。
				<br>
				d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。
			</div>
		</div>

		<div class="product_content">
			<h2>购票公告</h2>
			<div class="text">
				a)演出详情仅供参考，具体信息以现场为准；
				<br>
				b)1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场；
				<br>
				c)演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务，购票时请务必仔细核对并审慎下单。
				<br>
				d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。
			</div>
			<a>
				查看更多
				<i class="more_right"></i>
			</a>
		</div>
		<navigation></navigation>
<!-- ......... foot ......... -->
	<foot-cmpt></foot-cmpt>

	</div>
	
</template>
<script>

import Navigation from './Navigation'
import FootCmpt from './Foot'
import axios from 'axios'

export default {

  	components:{
	  	Navigation,
	  	FootCmpt
  	},
  	data:() => {
        return{
            data:[]
        }
    },
  	mounted(){
		let count = location.hash.split('/')
		let i = count.length;
		let id = count[i-1];
	axios({
            url:'/api/newslist/item/'+id
        })
        .then((result) => {
           let data = result.data.data
           this.data = data
           //console.log(this.data)
        })

	},
	 methods:{       	
        	buy(){
        		this.$router.push('/order')
        		let count = location.hash.split('/')
				let i = count.length;
				let id = count[i-1];
				//console.log(this.id)
        		console.log(this.data._id)
        		this.$router.push({
        			path:'/order',
					name:'order',
					query:{
						id:this.data._id
					}
        		})
        	}
        }
}
</script>
<style  lang="scss">

	
</style>