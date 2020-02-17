<template>
  <div id="app">
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">ADD STU</button>
    <button @click="addActStu">ADD BY ACT</button>
    <hello-vuex/>
    <h1>------------------- Getter Methods ----------------------------</h1>

    <h2>{{$store.getters.getStuInfo}}</h2>
    <h2>{{$store.getters.getStuAgeOver20}}</h2>
    <h2>{{$store.getters.getStuAgeOver20length}}</h2>
    <h2>{{$store.getters.getStuAgeOverage(23)}}</h2>

    <button @click="updateStudent">UPDATE</button>
    <h2>{{$store.state.info}}</h2>
    <h2>{{$store.getters.getInfo}}</h2>

    <h1>---------------------------- ModuleA --------------------------------</h1>
    <h2>{{$store.state.a.MCounter}}</h2>
    <button @click="changeMC">MCount+</button>
  </div>
</template>

<script>
  import helloVuex from "./components/HelloVuex"
  import {
    INCREMENT
  } from "./store/mutation-type";

  export default {
    name: 'App',
    components:{
      helloVuex,
    },
    // data() {
    //   return {
    //     counter: 100
    //   }
    // },
    methods:{
      addition(){
        this.$store.commit(INCREMENT)
      },
      subtraction(){
        this.$store.commit("decrement")
      },
      addCount(num){
        // this.$store.commit("addCount",num)

        this.$store.commit({
          type:"addCount",
          num,
        });
      },
      addStudent(student){
        student = {name:"老屎蛋",age:40,gender:"male"}
        this.$store.commit("addStudent",student)
      },
      updateStudent(){
        this.$store.commit("updateStudent")
      },
      addActStu(){
        this.$store.dispatch("updateAct","the message which transfered to updateAct in index.js ")
            .then((data) => {
              console.log(data);
            });
      },
      changeMC(){
        this.$store.commit("changeMCount");
      }
    }
  }
</script>

<style>

</style>
