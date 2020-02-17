<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="DeepPink">
        <img slot="itemImage" src="./assets/logo.png" alt="">
        <img slot="clickImage" src="./assets/img/lion.jpg" alt="">
        <div slot="itemName">main</div>
      </tab-bar-item>
      <tab-bar-item path="/class" activeColor="blue">
        <img slot="itemImage" src="./assets/logo.png" alt="">
        <img slot="clickImage" src="./assets/img/lion.jpg" alt="">
        <div slot="itemName">class</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="orange">
        <img slot="itemImage" src="./assets/logo.png" alt="">
        <img slot="clickImage" src="./assets/img/lion.jpg" alt="">
        <div slot="itemName">cart</div>
      </tab-bar-item>
      <tab-bar-item path="/personal" activeColor="green">
        <img slot="itemImage" src="./assets/logo.png" alt="">
        <img slot="clickImage" src="./assets/img/lion.jpg" alt="">
        <div slot="itemName">personal</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabBar from "./components/tabbar";
import tabBarItem from "./components/tabbaritem"

export default {
  name: 'App',
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>
