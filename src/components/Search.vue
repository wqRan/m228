<template>
<div class="search">
	<!-- head -->
	<div class="loginHead">
		<div class="head-l">
			<router-link to="/" class="back-btn" >返回</router-link>
	    </div>
	    <h1 class="head-m">{{findshow}}演出</h1>  
	</div>
	<!-- search框 -->
	<div class="sear-comm">
		<div class="sear-all">			
			<input type="search" class="sear-inp" name="keyword" v-model="findshow" autocomplete="off" placeholder="请输入关键字...">
			<span @click="search" class="fr" ></span>		
		</div>
	</div>
	<!-- search记录 -->
	<div class="searchNav" v-if='havedate'>
		<ul>
			<li v-for="(v,i) in content" :key="i._id">{{v}}</li>
		</ul>
	</div>
		<!-- ........ newList.............. -->
	<div id="newList" style="background: #fff;" v-if="newslist">
		<div class="newList" id="newListitem">
			<dl v-for="(v,i) in data" :key="i._id" @click="routrTo(v._id)" class="pro-list cl"  >
		       <dt><img :src="`http://localhost:3000/uploads/${v.showPic}`"></dt>
		       <dd class="pro-tit"><a href="">{{v.showName}}</a></dd>
		       <dd>
		           <strong class="icon icon-date"></strong>
		           <span class="pro-sp">{{v.showTime}}</span>            
		       </dd>
		       <dd>
		           <strong class="icon icon-cg"></strong>
		           <span class="pro-sp">{{v.showLocal}}</span>
		       </dd>
		       <dd>
		           <strong class="icon icon-price"></strong>
		           <span class="pro-sp">{{v.showPrice}}元</span>   
		           <span class="state"><a class="btn b-sale">{{v.showStates}}</a></span>     
		       </dd>
		    </dl>
		</div>	
		<h1 class="moreshows" v-if='newslist' ><a href="javascript:;">已全部加载~:)</a></h1>
	</div>
	<!-- ......no - find.... -->
	<div class="nofind" v-if="nofind">
      <p><img src="../assets/images/search-default.png" width="56" height="56"></p>
      <p class="pt10">没有找到 “{{findshow}}” 的相关信息</p> 
      <p>换个关键词试试 ~~</p>
	</div>
<!-- ......... foot ......... -->
	<foot-cmpt :isshow="true"></foot-cmpt>

</div>
</template>

<script>
	
import FootCmpt from './Foot'
import axios from 'axios'

export default {
	data:() => {
		return{
			content:['张学友','吉屋出租','开心麻花2018','谭咏麟','东野圭吾','音乐剧《猫》','陈慧娴','黎明之街','陈鸿宇','金玟岐','鹿先森','无人生还','马克西姆','杨宗纬','庄心妍'],
			findshow:'',
			data:[],
			havedate:true,
			newslist:false,
			nofind:false,
		}
	},
	components:{
	  	FootCmpt
  	},
  	mounted(){
  		let content = this.$route.query.data
  		this.findshow = content
  		if ( content != '') {
	  		axios({
	  			method:'post',
	  			url:'/api/newslist/search/'+content
	  		})
	  		.then((result) => {
	  			let manydate = result.data.data.length
	  			if (manydate != 0) {
	  				this.nofind = false
	  				this.havedate = false
	  				this.newslist = true
	  			}else {
	  				this.havedate = false
	  				this.newslist = false
	  				this.nofind = true
	  			}
		 		let data = result.data.data
		 		this.data = this.data.concat(data)
	  		})
  		}
  	},
  	methods:{
  		search(){
  			if (this.findshow != '') {
	  			axios({
	  				method:'post',
	  				url:'/api/newslist/search/'+this.findshow
	  			})
	  			.then((result) => {
	  				let manydate = result.data.data.length
		  			if ( manydate != 0) {
		  				this.nofind = false
		  				this.havedate = false
		  				this.newslist = true
		  			}else {
		  				this.havedate = false
		  				this.newslist = false
		  				this.nofind = true
		  			}
		  			
			 		let data = result.data.data
			 		this.data = this.data.concat(data)
		  		})
	  		}else {
	  			this.data = []
	  			this.nofind = true
	  			this.newslist = false
	  			this.havedate = false
	  		}
  		},
  		routrTo(id){
	        this.$router.push('/detail/'+id)
	    }
  	}	
}

</script>






