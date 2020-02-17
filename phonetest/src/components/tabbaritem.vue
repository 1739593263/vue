<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="itemImage"></slot></div>
    <div v-else><slot name="clickImage"></slot></div>
    <div :style="activeC"><slot name="itemName"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    data(){
      return{
        // isActive:false,
        // path: '/home'
      }
    },
    props:{
      path: {
        type:String
      },
      activeColor:{
        type: String,
        default: "red"
      }
    },
    computed:{
      isActive(){
        // judge if active path contain the absolute path('/home'&'cart'&...) which active
        return this.$route.path.indexOf(this.path)!==-1;
      },
      activeC(){
        return this.isActive? {color: this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex:1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img{
    height: 24px;
    width: 24px;

    margin-top: 3px;
    vertical-align: middle;
  }

  /*.active {*/
  /*  color: red*/
  /*}*/
</style>
