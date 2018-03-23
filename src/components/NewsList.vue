<template lang="html">
<div>
    <dl v-for="(v,i) in data" :key="i._id" class="pro-list cl" @click="routrTo(v._id)" >
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
       <dd v-if="v.showTips" v-show="isshow" class="tips">
           {{v.showTips}}
       </dd>
    </dl>
    <h1 class="moreshows"><router-link to="/classify">查看更多全国演出</router-link></h1>
   
</div>
</template>

<script>

import axios from 'axios'

export default {
    props: {
    isshow: [Boolean],

  },
    data:() => {
        return{
            data:[]
        }
    },
    mounted() {

        axios({
            url:'/api/newslist/list/0'
        })
        .then((result) => {
           let data = result.data.data.result;
           this.data = data;

           // console.log(this.data)
        })
    },
    methods:{
      routrTo(id){
        this.$router.push('/detail/'+id)

       

        //console.log(this.data,this.$store.state.list)
        // this.$router.replace({
        //   path:'/detail',
        //   name:'detail',
        //   params:{
        //         dataObj:id
        //   }
        // })
      }
    }
  
}

</script>