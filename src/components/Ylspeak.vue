<template lang="html">
<div>
		
	<div class="loginHead">
	<div class="head-l">
            <router-link to="/" class="back-btn" >返回</router-link>
    </div>
    <h1 class="head-m">永乐说戏</h1>
	</div>
	<!-- .......... banner ........... -->
	<banner></banner>
	<!--........... list ...........  -->
	<div class="speaklist">
		<dl v-for="(v,i) in data" :key="i._id">
			<dt><img :src="`http://localhost:3000/uploads/${v.showPic}`"></dt>
			<dd>{{v.showName}}</dd>
			<dd>{{v.showTime}}</dd>
			<dd>{{v.showTips}}</dd>
		</dl>
	</div>
	<!-- .........查看更多 ...... -->
	<div class="speakmore">
		<h1 @click="getmore"  class="lookmore">{{message}}</h1>	
	</div>
	<!-- ......... foot ......... -->
	<foot-cmpt></foot-cmpt>
	<!-- .......fix图标 -->

	<navigation></navigation>
</div>
</template>
<script>

import FootCmpt from './Foot'
import Banner from './Banner'
import axios from 'axios'
import Navigation from './Navigation'

export default {
  	components:{
  		Banner,
  		FootCmpt,
  		Navigation
  	},
	data:() => {
        return{
            data:[],
            count:0,
	 		length:4,
	 		message:'展开更多'
        }
    },
  	mounted() {

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
		 		url:'/api/newslist/find?start='+(4*++this.count)+'&count=4',
		 	})
		 	.then((result) => {

		 		let data = result.data.data
		 		this.data = this.data.concat(data)
		 		this.length = result.data.data.length
		 		if (this.length != 4) {
		 			this.message='已经到底啦~'
		 		}
		 	})
	 	}
	},
}
	
</script>
