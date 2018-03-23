<template>
	<div class="shopcar">
		<div class="loginHead">
			<div class="head-l">
				<a href="javascript:history.back();" class="yo-ico">&#xf07d;</a>
		       
		    </div>
	    	<h1 class="head-m">确认订单</h1>
	    	
		</div>
		<div class="shopcar_container">
			<div class="order-type">
					<h3 class="thin">王力宏"龙的传人2060"巡回演唱会</h3>
					<p class="mt5 performance-information" >
						<span class="db">
							<label>演出场馆</label>
							
								    [北京]凯迪拉克中心
						</span>
						<span class="db">
							<label>已选场次</label>2018-04-14&nbsp;星期六&nbsp;19:00
						</span>
						<span class="db">
							<label class="fl">已选座位</label>
							<i class="fl">1280(看台)*1 （共1张）</i>
					    </span>
					</p>
			</div>
			<div class="cl bg-white refund-insurance p15  border-t"  id="insureDiv">
				<h4 class="fl f14 thin">退票保险</h4>
				<p class=" fl">
					<span class="db">
						<em class="red"> 66.00</em>元<a href="javascript:insuranceInfo('//m.228.cn/ajax/insurance.html?type=1','什么是退票保险？')"><i class="question-mark ml10">?</i></a>  
					</span>
					<span class="db">
						<em class="gray">(含演出期间人身意外保障)</em>
					</span>
				</p>
				<b onclick="chooseInsure(this);">✓</b>
			</div>
			<div class="cashcoupon bg-white mt10">
			     	<a class="p15 db clear pr30 tit" href="javascript:;" id="cashbest" caid="" onclick="showCash()">
						<b class="fl f14 thin">现金券</b>
						<span class="fl ml10 mt1 db pr15">
							<em class="red pr5" id="cashvalue"></em>
							<i class="unfont-style"></i>
						</span>
				 		<span class="fr mt1 db pr10">
				 			<em class="red pr5" id="span_total">
				 			0
				 			</em>&nbsp;张可用
				 		</span>
					</a>
					<a class="p15 db clear pr30 tit border-t" href="javascript:;" onclick="showActive()">
						<input type="hidden" name="activeno" id="activeno"/>
				    	<input type="hidden" name="oriPriceFlag" id="oriPriceFlag"/>
						<b class="fl f14 thin">优惠信息</b>
						<span class="fl mt1 ml15" id="account" data-rule="" data-form="" data-paycode="" data-ispay="" data-paytype=""></span>
						<span class="fr mt1 db pr10">
						无可用优惠</span>
					</a>
			</div>
			<div class="ticketPaper-type bg-white mt10">
				<h3 class="thin border-b pl15">票纸类型</h3>
				<ul class="cl" id="delieverUl">
					<li class="on" rel="1">纸质票</li>
				</ul>
				<div class="ticketPaper-centent">
					<div class="authentication-input bg-white">
						<ul class="border-t border-b">
							<li class="cl">
								<p>
									<label>配送方式</label>
									<input type="hidden" id="hiddendfreight" value="18" />
									<a class="verification-codes on mr10" href="javascript:;" rel="1">快递配送</a><a class="verification-codes" href="javascript:;" rel="2">自取</a>
								</p>
							</li>
						<!--start 快递配送-->
							<li class="cl" rel="1" aid="" >
								<p>
									<label class="fl">收货信息</label>
					 				<a class="fl new-address gray tr" href="//m.228.cn/person/address.html?from=%2F%2Fm.228.cn%2Fquickbuy.html%3Fpid%3D373848555%26sid%3D373856898%26num%3D1">
					 				添加收货地址
					 				</a>
								</p>
							</li>
						<!--end 快递配送-->
																								
						 <!--start 上门自取-->
						<!-- <li class="cl undb" rel="2">
							<p>
								<label>收货人</label>
								<input type="text" placeholder="请填写真实姓名" name="conname"/>
							</p>
							<p>
								<label>手机号码</label>
								<input type="text" placeholder="请输入手机号码" value="18702515140" name="conphone"/>
								<b class="verification-code-bg"></b>
							</p>
							
							<p class="gray lhg22 pt5 pb5 f12">取票地址：北京市东城区王家园胡同16号中国儿童福利大厦西门1层（富华大厦向东50米路南）;取票时间：周一至周日 9:00—18:00</p>
									<p class="red pl10 pr10 pt5 pb5 gray	">取票时请携带和收货人姓名一致的身份证件。</p>
								</li> -->
						<!--end 上门自取-->
						</ul>

					</div>
				
				</div>	
			

			<!-- 电子入场票begin -->
			<!-- 电子入场票end -->
			
			<!-- 电子兑换票begin -->
			<!-- 电子兑换票end -->
			</div>
			<div class="order-detailed mt10">
				<dl class="bg-lightOrangeRed">
					<dt class="bg-white border-b-lightOrangeRed p15 f14">订单明细</dt>
					<dd class="cl">
						<span class="fl">商品总价</span>
						<span class="fr">1280.00元</span>
					</dd>
					<dd class="cl">
						<span class="fl">现金券</span>
						<span class="fr">-<span id="cashcoupon"></span>元</span>
					</dd>
					<dd class="cl">
						<span class="fl">运费</span>
						<span class="fr">+<span id="freight">0</span>元</span></dd>
					
					<dd class="cl" id="insuranceli" style="display: none">
						<span class="fl">退票保险</span>
						<span class="fr">+<span id="premium"></span>元</span>
					</dd>
					<dd class="cl">
						<span class="fl">合计</span>
						<span class="fr" id="total">1280.00元</span>
					</dd>
				</dl>
			</div>

			<div class="invoice-information bg-white mt10 ewallet_div">
					 <h3 class="cl thin p15 ">
					 	<label class="fl">电子钱包</label>
					 	<span class="fl red f12 mt1">请登录电脑端开通</span>
					 </h3>
			</div>


			<div class="invoice-information bg-white mt10">
						 <h3 class="cl thin p15" >
						 	<label class="fl">发票</label>
							<b class="yes fr" id="invoiceCheck">✓</b>
						 </h3>
						 <p class="red pt10  pl10 pr10">温馨提示：请您仔细核对订单信息，因演出票的唯一性、时效性，购买后无法退票或更换。</p>


			</div>
			<p class="gray p15">我已阅读并同意 
				<a class="red" href="javascript:insuranceInfo('//m.228.cn/ajax/insurance.html?type=3','永乐票务用户服务协议')">永乐票务用户服务协议</a>
				<a class="red" href="javascript:insuranceInfo('//m.228.cn/ajax/insurance.html?type=2','票享无忧退票保险服务条款')" id="bxtk"></a>
			</p>
			<div class="btn pb30 pl15 pr15">
				<input type="hidden" id="sumpayment" value="">
				<a class="submit-btn" id="submitOrder" href="javascript:;">同意以上协议并支付</a>
			</div>


		</div>
	</div>
</template>