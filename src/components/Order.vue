<template>
	<div>
		<div class="loginHead">
			<div class="head-l">
				<router-link to="/detail" class="yo-ico">&#xf07d;</router-link>
		       
		    </div>
	    	<h1 class="head-m">订单页</h1>
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
						<li class="day_info_first">
							<a>
								<span>
									
                            2018-04-13
                            <br>
                            周五 19:00
								</span>
								<b class="yo-ico">&#xf078;</b>
							</a>
						</li>
						<li class="day_info_second">
							<a>
								<span>
									
                            2018-04-13
                            <br>
                            周五 19:00
								</span>
								
							</a>
						</li>
					</ul>
				</dd>
			</dl>
			<dl class="ticket_dl">
				<dt class="ticket_title">选择价格</dt>
				<dd class="price_container">
					<ul class="ticket_prices">
						<li>
							<a>
								<span>380(看台)</span>
							</a>
						</li>
						<li>
							<a>
								<span>380(看台)</span>
							</a>
						</li>
						<li>
							<a>
								<span>380(看台)</span>
							</a>
						</li>
						<li>
							<a>
								<span>380(看台)</span>
							</a>
						</li>
						<li>
							<a>
								<span>380(看台)</span>
							</a>
						</li>
					</ul>
				</dd>
			</dl>
			<dl class="ticket_dl">
				<dt class="ticket_title">选择数量</dt>
				<dd class="ticket-num_container">
					<ul class="ticket-num">
	                    <li class="num-btn-s" onclick="num(1);"></li>
	                    <li id="ticket_num" class="num-t">1</li>
	                    <li class="num-btn-a" onclick="num(2);"></li>
                	</ul>

				</dd>
			</dl>
			<dl class="ticket_dl" id="choosed">
	            <dt class="ticket_title" id="choose">您已选择</dt>
	            <dd id="choose_show" class="result-txt" style="border-bottom:none;">
	            	2018-04-13  周五 19:00、680元、1
	            </dd>
        	</dl>
			<dl class="ticket_dl">
	            <dd class="btn-line">
	                <a id="ylToBuy" href="javascript:confirmBuy();" class="form-btn" _dbreport="sureOrder">确认提交</a>
                </dd>
        	</dl>

		</div>
	</div>
</template>