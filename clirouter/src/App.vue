<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <router-link to="/hello" tag="button" replace>hello</router-link>-->
<!--    <router-link to="/next" tag="button" replace>next</router-link>-->
    <button @click="helloClick">hello</button>
    <button @click="nextClick">next</button>
<!--    <router-link :to="{path:'/profile', query:{name:'hehe', age:'18', height:1.98}}" tag="button">profile</router-link>-->
    <button @click="proClick">profile</button>
    <keep-alive exclude="Next,profile">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    helloClick(){
      this.$router.replace("/hello");
      console.log("hello");
    },
    nextClick(){
      this.$router.replace("/next");
      console.log("next");
    },
    proClick(){
      this.$router.push({
        path:"/profile",
        query:{
          name:"hehe",
          age:"18",
          height:1.89
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color: deepskyblue;
}
</style>
