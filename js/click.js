var click = new Vue({
  el:"#click",
  methods:{
    divClick(){
      console.log("divClick");
    },
    btnClick(){
      console.log("btnClick");
    },
    SBbutton(){
      console.log("submit button");
    },
    keyup1(){
      console.log("jojo")
    },
    keyup(){
      console.log(document.getElementById("tt").value)
    },
    one(){
      console.log("once");
    }
  }
});