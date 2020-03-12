<template lang="pug">
  .hello
    h1 {{ msg }}
    
    p

      a(href='https://cli.vuejs.org' target='_blank' rel='noopener') vue-cli documentation
      | .
    h3 Installed CLI Plugins
    ul
      li
        a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel' target='_blank' rel='noopener') babel
      li
        a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint' target='_blank' rel='noopener') eslint
    h3 Essential Links
    link-list(:myList="essential")

    h3 Ecosystem
    link-list(:myList=`[{link: 'https://router.vuejs.org', name:'vue-router'},
      {link: 'https://vuex.vuejs.org', name: ' vuex'},
      {link: 'https://github.com/vuejs/vue-devtools#vue-devtools', name: 'vue-devtools'},
      {link: 'https://vue-loader.vuejs.org', name: 'vue-loader'},
      {link: 'https://github.com/vuejs/awesome-vue', name: 'awesome-vue'}]`)


</template>

<script>

import LinkList from "./LinkList";

export default {
  name: 'HelloWorld',
  components:{
      LinkList
  },
  props: {
    msg: String
  },
  methods:{

  },
  data() {
    return {
      essential: [{link: 'https://vuejs.org', name:'Core Docs'},
      {link: 'https://forum.vuejs.org', name: 'Forum'},
      {link: 'https://chat.vuejs.org', name: 'Chat'},
      {link: 'https://twitter.com/vuejs', name: 'Twitter'},
      {link: 'https://news.vuejs.org', name: 'News'}],
      
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
