const app = new Vue({
  el:"#app",
  data:{
    message:"hahaha",
    value:"xixixi",
    gender:'',

    isAgree:false,
    is:[],

    fruit:"banana",
    fruits:[],

    ist:["piano","violin","cello","harp","drum",'whistle']
  },
  // methods:{
  //   valueChange(event){
  //     this.value = event.target.value;
  //   }
  // }
});

var app1 = new Vue({
  el:"#app1",
  data:{
    lazy:"lazy",
    number:0,
    trim:""
  }
});