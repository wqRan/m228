<template lang="html">
   <!--  <div>
       <dl v-for="(v,i) in data"  class="pro-list cl"  >
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
       <dd v-if="v.showTips">
           {{v.showTips}}
       </dd>
   </dl>
   </div> -->
</template>

<script>

import axios from 'axios'

export default {
    /*data:() => {
        return{
            data:[]
        }
    },
    mounted() {

        axios({
            url:'/api/newslist/list/0'
        })
        .then((result) => {
           let data = result.data.data
           // console.log(data.result)
           this.data = data.result
        })
    }*/
}

</script>