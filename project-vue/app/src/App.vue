<template>
  <div class="app" type="checkbox" v-bind:class="{ white: isWhite }">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Всем привет</router-link> |
      <router-link to="/codeDark">CodeDark</router-link>
    </div>
    <router-view/>
    <footer class="footer">
      <input type="checkbox" id="checkbox" v-model="isWhite">
      
    </footer>
  </div>   
</template>

<script>


export default {
  
  data(){
    return{
        isWhite: false
        
    }
  },
  computed: {
      myVariable(){
          return 1
      }
  }
}
</script>

<style>
.white {
    height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353535;
  background: #ffffff  !important;
}
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353535;
  background: #202020;
}

.main {
    height: 1000px;
}
.footer {
  height: 80px;
  margin-top: 0px;
  bottom: 0;
  width: 100%;
  background-image: url(https://videoseyred.in/wp-content/uploads/Darknet_20170310232619.jpg);
  background-repeat: no-repeat;
  background-size: contain; 
  background-color: black;
  background-position: center;
}
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353535;
  background: #202020;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
