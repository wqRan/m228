<template lang="html">
	<div class="loginPage">
	<!-- head -->
	<div class="loginHead">
		<div class="head-l">
			<router-link to="/" class="back-btn" >返回</router-link>
	    </div>
	    <h1 class="head-m">会员登录</h1>
	    
	</div>
	<!-- input -->
	<div class="usr-box">
	    <input name="loginname" type="text" class="con-ipt icon icon1" placeholder="手机号 / 邮箱地址" tabindex="1">
	    <input name="loginpwd" type="password" class="con-ipt icon icon2" placeholder="密码" tabindex="2">
	    <span class="showBtn">
	    	<input id="showpwd" type="checkbox" value="1">
	    	<font class="showFont" value="1">显示密码</font>
	    </span>
	    <h2 class="loginBtn">登录</h2>
		<div class="user-box1">
		    <span><input name="freeloginbtn" type="checkbox" value="1" checked="checked"> 两周内免登录</span>
		    <router-link to="/resgiter" class="resgiter">免费注册</router-link>
		    <a href="javascript:;">忘记密码？</a>
		</div>
		<!-- 使用合作账号登录 -->
		    <div class="lg-ft-box">
		        <dl>
		            <dt>使用合作账号登录</dt>
		            <dd>
		                <a href="javascript:;" class="weibo-btn"></a>
		                <a href="javascript:;" class="weibo-btn"></a>
		                <a href="javascript:;" class="weibo-btn"></a>
		                <a href="javascript:;" class="weibo-btn"></a>
		            </dd>
		        </dl>
		    </div>
		</div>
</div>
</template>