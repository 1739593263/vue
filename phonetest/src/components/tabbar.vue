<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>
  body {
    padding: 0px;
    margin: 0px;
  }
  #tab-bar {
    display: flex;
    background-color: lightgray;

    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;

    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }
</style>
