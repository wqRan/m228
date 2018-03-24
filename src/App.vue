<template>
	<div id="root">
	<router-view>	
		<index-cmpt></index-cmpt>    
	</router-view>
	</div>	
</template>

<script>

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
