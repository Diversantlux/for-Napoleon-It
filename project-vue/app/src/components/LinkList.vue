<template lang="pug">
  ul
    li(v-for="item in myList" v-bind:key='item.link')
      BlankLink(:linkLink="item.link" :linkName="item.name")
</template>

<script>
import BlankLink from "./BlankLink";

export default {
  name: "LinkList",
  components:{
    BlankLink
  },
  props: {
    myList: Array
  },
  data(){
      return{
    }
  },
  mounted() {
      console.log('LinkList component:', this.myList)
  }
}
</script>

<style scoped>

</style>