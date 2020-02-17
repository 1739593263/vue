import Vue from 'vue'
import Vuex from 'vuex'

// 1. install plugin
Vue.use(Vuex);
import mutations
  from "./mutations";
import {
  INCREMENT
} from "./mutation-type";

const moduleA = {
  state:{
    MCounter: 1000,
  },
  mutations:{
    changeMCount(state){
      state.MCounter+=100;
    },
  },
  actions:{},
  getters:{},
};

const state = {
  counter:100,
  students:[
    {name:"lover",age:18,gender:"male"},
    {name:"f**ker",age:21,gender:"female"},
    {name:"Azis",age:30,gender:"male"},
    {name:"hop",age:25,gender:"female"}
  ],
  info:{
    id:1,
    name:"INFO",
    age:"11"
  }
};

// 2. create object
const store = new Vuex.Store({
  state,
  mutations,
  actions:{
    // this block always use to asynchronous working
    updateAct(context,message){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(message);
          context.commit("updateActionStu")
        },1000);

        resolve("execute success");
      })
    }
  },
  getters:{
    getStuInfo(state){
      return state.students;
    },
    getStuAgeOver20(state){
      return state.students.filter(s => s.age >20)
    },
    getStuAgeOver20length(state, getter){
      return getter.getStuAgeOver20.length
    },
    getStuAgeOverage(state){
      return function(age){
        return state.students.filter(s => s.age > age)
      };
    },
    getInfo(state){
      return state.info;
    }
  },
  modules:{
    // modules finally will be define in state and show in frontend as state.
    a: moduleA,
  }
});

// 3. export object
export default store
