<template>
	<div id="root">
	<router-view>	
		<index-cmpt></index-cmpt>    
	</router-view>
	</div>	
</template>

<script>

import IndexCmpt from './components/Index.vue'

export default {
  name: 'App',
  components:{
  	IndexCmpt
  }
}
</script>





<style>

</style>
