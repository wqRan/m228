<template>
	<div>
		<div class="loginHead">
		<div class="head-l">
			<router-link to="/" class="back-btn">返回</router-link>
	       
	    </div>
	    <h1 class="head-m">票面真伪查询</h1>
	</div>
<!-- ........ newList.............. -->
		<div class="content">
			<div class="check_area">
				<div class="input_area">
					<span>请输入票面防伪编码：</span>
					<div class="input-box">
						<input type="text" name="check_input">
						<a class="verification_btn">验证</a>	
					</div>
					<p>＊编码内大写英文字母无"O"、"I"两个字母</p>
					
				</div>
				<div class="hrbox"></div>
				<div class="check_info">
					<span class="red">
						票面信息真伪查询说明：
					</span>
					<span>
						
    1、此票面信息验证仅限于票面上印有“永乐票务logo”的门票；
					</span>
					<span>
						
    2、在票面防伪编码栏内输入票面“防伪编码”信息；
					</span>
					<span>
						
    
    3、点击【验证】就可以看到票面的信息真伪情况。
					</span>
					<img src="http://www.228.com.cn/resources/images/ticket/piaopin1.gif">
				</div>
			</div>
		</div>
	<!-- ......... foot ......... -->
	<foot-cmpt></foot-cmpt>
</div>
</template>

<script>
import FootCmpt from './Foot'	
 export default {
 	components:{
  		FootCmpt
  	},
 }

</script>