<template>
	<div class="myorder">
		<div class="loginHead">
			<div class="head-l">
				<router-link to="/mine" class="back-btn">返回</router-link>  
		    </div>
	    	<h1 class="head-m">我的订单</h1>
	    	
		</div>
		<dl class="order-list">
            <dt>
            	<span class="order-list-span-name">订单号：43218544</span>
            	<em>
                等待付款</em>
                
            </dt>
    		<dd>
            	<a href="javascript:void(0);" class="order-img">
            		<img :src="`http://localhost:3000/uploads/${this.productList[0].list.showPic}`"/>
            	</a>
            	<div class="order-r" style="width: 100%;" >
                	<h1>
                		<a href="javascript:;">{{this.productList[0].list.showName}}
                		</a>
                	</h1>
                    <ul>
                        <li>时间：{{this.productList[0].time}}</li>
                        <li>数量：{{this.productList[0].count}}张</li>
                        <li>合计：{{this.productList[0].total}}</li>
                    </ul>
            	</div>
        	</dd>
        </dl>
        <div class="btn pb30 pl15 pr15">
				<input type="hidden" id="sumpayment" value="">
				<a class="submit-btn" id="submitOrder" >去支付</a>
		</div>
	</div>
</template>
<script>
	export default{
		data:()=>{
			return {
				productList:[],
                havepic:false
			}
		},
		mounted(){
    		this.productList.push(this.$store.state)
            if (this.$store.state.list.showPic != '') {
                this.havepic = true
            }
  		}
	}
</script>