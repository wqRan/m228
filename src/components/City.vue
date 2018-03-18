<template>
	<div>
		<div class="loginHead">
			<div class="head-l">
				<router-link to="/" class="yo-ico">&#xf07d;</router-link>    
		    </div>
	    	<h1 class="head-m">选择演出城市</h1>
		</div>
		<div class="citys">
			<h4 class="location">定位城市</h4>
			<p>
				<span style="color:#cc0001;">北京</span>
			</p>
			<h4 class="hot">热门城市</h4>
			<ul class="hotCity_list">

				<router-link to="/" v-for="(c,i) in hotcitylist" :key="i._id" tag="li" :msg="c">{{c}}</router-link @click="chooseCity" v-model="hotcity">

				

			</ul>
			<h4 class="more">更多城市</h4>
			<ul class="moreCity_list">
				<router-link to="/" v-for="(m,i) in morecitylist" :key="i._id" tag="li">{{m}}</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data: ()=>{
			return {
				hotcitylist:['全国','北京','上海','广州','深圳','武汉','合肥','南京','西安'],
				morecitylist:['澳门','安庆','宝鸡','本溪','包头','长春','成都','重庆','长沙','常州','德阳','东莞','大连','佛山','抚顺','德州','桂林','贵阳','邯郸','黄冈','呼和浩特','哈尔滨','杭州','金华','澳门','安庆','宝鸡','本溪','包头','长春','成都','重庆','长沙','常州','德阳','东莞','大连','佛山','抚顺','德州','桂林','贵阳','邯郸','黄冈','呼和浩特','哈尔滨','杭州','金华'],
				hotcity:'',
			}
		},
		methods:{
			chooseCity:function(){
				this.$emit('checkcity',this.hotcity)
			}
		}
		
	}
</script>