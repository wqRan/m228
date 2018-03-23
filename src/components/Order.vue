<template>
	<div>
		<div class="loginHead">
			<div class="head-l">
				<a href="javascript:history.back();" class="yo-ico">&#xf07d;</a>
		       
		    </div>
	    	<h1 class="head-m">{{showName}}</h1>
		</div>
		<div class="order_container">
			<div class="ticket_tids">
				<p>
					
			      	温馨提示：预订/预售票品最终数量视项目主办方及场馆情况而定，正式开票后永乐将根据用户付款的先后顺序依次配票。我们会尽量满足用户需求，如最终未能配票，永乐承诺全额退款，敬请谅解。
			      
				</p>
			</div>
			<dl class="ticket_dl">
				<dt class="ticket_title">选择日期/场次</dt>
				<dd>
					<ul class="day_info">
						<li class="day_info_first" v-for="(t,index) in showTime" :key="index._id">

							<a @click="chooseTime(index,$event)" class="time_btn" :key="index" :class="{curr:index===timeselect}">{{t}}<br>周五 19:00<b class="yo-ico" v-show="index===timeselect">&#xf078;</b>
							</a>
						</li>
						
					</ul>
				</dd>
			</dl>
			<dl class="ticket_dl">
				<dt class="ticket_title">选择价格</dt>
				<dd class="price_container">
					<ul class="ticket_prices">
						<li v-for="(p,i) in this.priceList" :key="i._id">
							<a :class="{'price_choose':i===priceselect}" @click="choosePrice(i,$event)">
								{{p}}
							</a>
						</li>
					</ul>
				</dd>
			</dl>
			<dl class="ticket_dl">
				<dt class="ticket_title">选择数量</dt>
				<dd class="ticket-num_container">
					<ul class="ticket-num">
	                    <li class="num-btn-s" @click="reduce"></li>
	                    <li id="ticket_num" class="num-t">{{count.count}}</li>
	                    <li class="num-btn-a" @click="add"></li>
                	</ul>

				</dd>
			</dl>
			<dl class="ticket_dl" id="choosed">
	            <dt class="ticket_title" id="choose">您已选择</dt>
	            <dd id="choose_show" class="result-txt" style="border-bottom:none;">
	            	<!-- {{selectedTime}}、{{selectedPrice}}、{{num}} -->
	            	{{count.time}}、{{count.price}}元、{{count.count}}
	            </dd>
        	</dl>
			<dl class="ticket_dl">
	            <dd class="btn-line">
	                <a id="ylToBuy" class="form-btn"  @click="sureOrder">确认提交</a>
                </dd>
        	</dl>

		</div>
	</div>
</template>
<script>

import Vue from 'vue'
import axios from 'axios'
import store from '../vues/store'
	export default {
		data: ()=>{
			//console.log(this)
			return{
				priceList:[180,280,480,580,680],
				timeselect:'-1',
				priceselect:'-1',
				showName:'',
				showTime:'',
				res:''
				
			}
		},
		mounted(){
			
			let routerQuery_id=this.$route.query.id
			
			axios({
				url:'/api/newslist/item/'+routerQuery_id
			})
			.then((result)=>{
				let data=result.data.data
				this.showName=data.showName
				this.showTime=data.showTime.split('-')
				this.res=data
				
				
			})
			
			
		},
		computed:{
			count(){
				return this.$store.state
			}
		},
		methods:{
			choosePrice(i,e){
				this.priceselect=i
				this.$store.commit('selectPrice',e.target.text.trim())
			},
			chooseTime(index,e){
				
				this.timeselect=index;
				
				this.$store.commit('selectTime',e.target.text.trim())
			},
			add(){
				this.$store.commit('add')
			},
			reduce(){
				this.$store.commit('reduce')
			},
			sureOrder(){
				/*console.log(this.res)*/
				this.$router.push({
					path:'/shopcar',
					name:'shopcar',
					query:{
						id:this.$route.query.id
					}
				})
				//console.log(this.result)
				 this.$store.commit('saveInfo',{
		          showName:this.res.showName,
		          showLocal:this.res.showLocal,
		          showPrice:this.res.showPrice,
		          showTime:this.res.showTime,
		          showPic:this.res.showPic

		        })
				 this.$store.commit('total')
			}
			
		}
	}
</script>