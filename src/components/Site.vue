<template lang="html">
<div class="sitebg">
	<dl v-for="(v,i) in data" :key="i._id" class="pro-list1" >
        <dt><img :src="`http://localhost:3000/uploads/${v.sitePic}`"></dt>
        <dd class="pro-tit">{{v.siteTitle}}</dd>
        <dd>
        	<strong class="icon"></strong>
            <span class="pro-sp">{{v.siteLocal}}</span>
        </dd>
        <dd>
            <span class="pro-sp">{{v.sitePre}}</span>      
        </dd>
    </dl>
</div>
</template>


<script>

import axios from 'axios'

export default {
    data:() => {
        return{
            data:[]
        }
    },
    mounted() {

        axios({
            url:'/api/site/find'
        })
        .then((result) => {
           let data = result.data.data
           this.data = data
        })
    }
}

</script>