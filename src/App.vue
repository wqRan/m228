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

export default {
  name: 'App',
  components:{
  	IndexCmpt
  }
}
</script>
