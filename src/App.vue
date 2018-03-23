<template>
	<div id="root">
	<router-view>	
		<index-cmpt></index-cmpt>    
	</router-view>
	</div>	
</template>



<script>
import wsCache from 'web-storage-cache'
import IndexCmpt from './components/Index.vue'
import store from './vues/store'

export default {
  name: 'App',
  store,
  components:{
  	IndexCmpt
  }
}
</script>
