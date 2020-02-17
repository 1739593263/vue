<template>
  <div>
    <h1>profile</h1>
    <h2>{{getPro}}</h2>
  </div>
</template>

<script>
  export default {
    name: "profile",
    computed:{
      getPro(){
        return this.$route.query
      }
    }
  };
</script>

<style scoped>

</style>
