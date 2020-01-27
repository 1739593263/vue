const on = new Vue({
  el:"#On",
  data:{
    count:0
  },
  methods:{
    //structure with function intensify, normal structure --> increment:function(){}
    increment(){
      this.count++;
    },
    decrement(){
      this.count--;
    }
  }
});

const event = new Vue({
  el:"#event",
  methods:{
    btn1(index){
      console.log(index);
    },
    //browser will inject event into the function which didn't with index but need index
    btn2(event){
      console.log("-----",event);
    },
    btn3(index,event){
      console.log("+++++++++++",index,event);
    }
  }
});