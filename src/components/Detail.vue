<template>
	<div ref="mine-scroll">
		<div class="loginHead">
			<div class="head-l">
				<a href="javascript:history.back();" class="yo-ico">&#xf07d;</a>
		    </div>
	    	<h1 class="head-m">商品简介</h1>
		</div>
		<div class="product-pic">
			<div class="pro-new-left">

				<img v-if="havepic" :src="`http://localhost:3000/uploads/${data.showPic}`">
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
						</a>
					</div>
					<span class="icon">
						<i class="favorite" :style="style" @click="changeico"></i>
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
<!-- ......... foot ......... -->
	<foot-cmpt></foot-cmpt>
<!-- .......fix图标 -->

	<navigation></navigation>
	</div>
	
</template>
<script>
import Vue from 'vue'
import Navigation from './Navigation'
import FootCmpt from './Foot'
import axios from 'axios'
import { Toast } from 'mint-ui'
import cookie from 'vue-cookie'
Vue.use(cookie)

export default {

  	components:{
	  	Navigation,
	  	FootCmpt
  	},
  	data:() => {
        return{
            data:[],
            havepic:false,
            style:'background-position:0 -26px;',
            save:''
        }
    },
  	mounted(){
		let count = location.hash.split('/')
		let i = count.length;
		let id = count[i-1];
		this.save = id
		document.getElementById('root').scrollTop = 0 
	axios({
            url:'/api/newslist/item/'+id
        })
        .then((result) => {
           let data = result.data.data
           if (data.showPic) {
           	this.havepic = true
           }
           this.data = data
        })

	},
	methods:{       	
        	buy(){
        		this.$router.push('/order')
        		let count = location.hash.split('/')
				let i = count.length;
				let id = count[i-1];
        		this.$router.push({
        			path:'/order',
					name:'order',
					query:{
						id:this.data._id
					}
        		})
        	},

			changeico(){
				if ( this.style == 'background-position:0 0' ) {
					this.style = 'background-position:0 -26px'
					Toast({
					  message: '取消收藏:(',
					  position: 'center',
					  duration: 2000
					});
					
					let scookie = this.$cookie.get('savedata')
					let acookie = JSON.parse(scookie).slice(0,-1)

					scookie = JSON.stringify(acookie);
					this.$cookie.set('savedata',scookie)
				}else {
					this.style = 'background-position:0 0'
					Toast({
					  message: '收藏成功:)',
					  position: 'center',
					  duration: 2000
					});

					var scookie = this.$cookie.get('savedata')
					if (scookie) {
						var acookie = JSON.parse(scookie);
						var flag = false;
						var self = this
						acookie.forEach(function(item){
							if (item.id != self.save) {
								flag = true;
							}
						})
						if (flag == true) {

							var item = {
									id:this.save
								}
							acookie.push(item)
						
						}
						scookie = JSON.stringify(acookie);
						this.$cookie.set('savedata',scookie)
					}else {

						this.$cookie.set('savedata','[{"id":"'+this.save+'"}]')
						
					}
					
				}
			}
	}
}
</script>

<style  lang="scss">

	
</style>