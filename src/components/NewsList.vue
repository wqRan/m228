<template lang="html">
	<dl class="pro-list cl">
        <dt><img src="{{$value.src}}"></dt>
        <dd class="pro-tit"><a href="">{{$value.main}}</a></dd>
        <dd>
            <strong class="icon icon-date"></strong>
            <span class="pro-sp">
                {{$value.time}}</span>
        </dd>
        <dd>
            <strong class="icon icon-cg"></strong>
            <span class="pro-sp">{{$value.local}}</span>
        </dd>
        <dd>
            <strong class="icon icon-price"></strong>
            <span class="pro-sp">{{$value.price}}元</span>   
            <span class="state"><a class="btn b-sale">售票中</a></span>     
        </dd>
    </dl>
</template>