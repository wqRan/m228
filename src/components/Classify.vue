<template>
<div>
	<div class="loginHead">
		<div class="head-l">
			<router-link to="/" class="back-btn">返回</router-link>
	    </div>
    	<h1 class="head-m">全国</h1>
	</div>
<!-- ........ 地区.............. -->
	<div id="classifyList">
		<div class="titlelist">
			<ul class="titlelist_detail_top">
				<li>全国<span class="yo-ico">&#xf031;</span></li>
				<li>全部分类<span class="yo-ico">&#xf031;</span></li>
				<li>全部时间<span class="yo-ico">&#xf031;</span></li>
			</ul>	
		</div>
	</div>
	<!-- ........ newList.............. -->
	<div id="newList" style="background: #fff;">
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
	</div>
	<!-- classify查看更多演出 -->
	<h1 @click="getmore" v-if="length == 4" class="moreshows" ><a href="javascript:;">加载更多结果</a></h1>
	<p class="classifyfoot">永乐票务>&nbsp;&nbsp;全国>&nbsp;&nbsp;门票</p>

<!-- ......... foot ......... -->
	<foot-cmpt :isshow="true"></foot-cmpt>
<!-- .......fix图标 -->

	<navigation></navigation>
</div>
	
</template>

<script>
	
import axios from 'axios'
import FootCmpt from './Foot'
import Navigation from './Navigation'

export default {
	
  components:{
  	FootCmpt,
  	Navigation
  	},
  	data:() => {
  		return{
  			isshow:false,
  			data:[],
  			count:0,
	 		length:4
  		}
  	},
  	mounted(){
  		axios({
            url:'/api/newslist/list/0'
        })
        .then((result) => {
           let data = result.data.data
           this.data = data.result
        })
  	},
  	methods:{
  		getmore(){
  			axios({
  				url:'/api/newslist/find?start='+(4*++this.count)+'&count=4'
  			})
  			.then((result) => {
  				this.length = result.data.data.length
		 		let data = result.data.data
		 		this.data = this.data.concat(data)
  			})
  		},
  		showhide:function(){
	        	this.isshow = !this.isshow;
	    },
	    routrTo(id){
        	location.hash = '/detail/'+id
      }
  	}


}


</script>



