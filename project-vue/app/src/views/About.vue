<template lang="pug">
.about
  h1 {{myVariable}}
  .main
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return 
      
    
  },
  computed: {
    vuexData(){
      return this.$store.getters.vuexData
    }
  },
  mounted(){
    this.vuexData = this.$store.getters.myVariable
  },
  methods:{
    
  }
})
</script>